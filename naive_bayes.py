import sys, math
from random import shuffle
from sklearn.metrics import confusion_matrix

# 
# read data
# 
if True:
    # 
    # read phos data
    # 
    positive = []
    positive_genes, positive_sites = {}, {}
    for line in open("Phosphorylation"):
        w = line.rstrip().split("\t")
        gene, id, loc, seq = w[0], w[1], int(w[2]), w[-1]
        if len(w) != 6 or len(seq) != 21:
            continue  # only ~137 of these
        if "_HUMAN" not in w[0] or "-" in seq or seq[10] != "S":
            continue
        positive.append((gene, id, loc, seq))
        positive_genes[gene] = 1
        positive_sites[(id, loc)] = 1

    # 
    # read human_genome
    # 
    negative = []
    neggenes, negsites = {}, {}
    for line in open("all_sites.txt"):
        w = line.split()
        gene, id, loc, aa, seq = w[0], w[1], int(w[2]), w[3], w[4]
        if aa != "S":
            continue
        negative.append((gene, id, loc, seq))
        neggenes[gene] = 1
        negsites[(id, loc)] = 1

# 
# filter data
# 
if True:
    # remove sites from positive if id does not appear in negative (keep only genes that appear in the genome, based on the Uniprot id)
    # remove sites from negative if site appears in positive (assume all S/T/Y sites not in the dbPTM are NOT phosphorylated)

    temp = []
    for (gene, id, loc, seq) in positive:
        if gene in neggenes:
            temp.append((gene, id, loc, seq))
    positive = temp

    temp = []
    for (gene, id, loc, seq) in negative:
        if (id, loc) not in positive_sites:
            temp.append((gene, id, loc, seq))
    negative = temp

# 
# training Naive Bayes - learn table of conditional probabilities
# 
if True:

    # make a full dataset by combing positive and negative into 1 list
    # randomize order
    # let training set be first 90%
    # test set is last 10%
    # compute class priors
    # compute conditional probs

    X, Y = [], []
    for w in positive:
        X.append(w[-1])
        Y.append(1)
    for w in negative:
        X.append(w[-1])
        Y.append(0)

    examples = [i for i in range(len(X))]
    shuffle(examples)
    N = len(examples)
    TESTFRAC = 0.3
    train = examples[: int(N * TESTFRAC)]
    test = examples[int(N * TESTFRAC) :]
    
    
    Ntrain, Ntest = len(train), len(test)

    Ntrain_pos = 0
    for i in train:
        if Y[i] == 1:
            Ntrain_pos += 1
    Ntrain_neg = Ntrain - Ntrain_pos
    Pr_phos = Ntrain_pos / float(Ntrain)
    Pr_non = 1.0 - Pr_phos

    counts = {}
    for j in train:
        for loc in range(len(X[0])):
            aa, cls = X[j][loc], Y[j]
            if (loc, aa, cls) not in counts:
                counts[(loc, aa, cls)] = 0
            counts[(loc, aa, cls)] += 1

    condprobs = {}
    for loc in range(len(X[0])):
        for aa in "ACDEFGHIKLMNPQRSTVWY":
            condprobs[(loc, aa, 1)] = counts.get((loc, aa, 1), 0) / float(Ntrain_pos)
            condprobs[(loc, aa, 0)] = counts.get((loc, aa, 0), 0) / float(Ntrain_neg)

    print(Pr_phos, Pr_non)

    print("phos")
    for aa in "ACDEFGHIKLMNPQRSTVWY":
        print(
            aa,
        )
        for loc in range(len(X[0])):
            print(
                "%5.3f" % (condprobs[(loc, aa, 1)]),
            )
        print()

    print("non-phos")
    for aa in "ACDEFGHIKLMNPQRSTVWY":
        print(
            aa,
        )
        for loc in range(len(X[0])):
            print(
                "%5.3f" % (condprobs[(loc, aa, 0)]),
            )
        print()

# 
# testing
# 
if True:
    print("testing...")

    PC = 0.00001


    def predict(seq):
        Lpos, Lneg = math.log(Pr_phos), math.log(Pr_non)
        for i in range(len(seq)):
            if i == 10:
                continue  # skip S in middle
            aa = seq[i]
            Lpos += math.log(PC + condprobs.get((i, aa, 1), 0))
            Lneg += math.log(PC + condprobs.get((i, aa, 0), 0))
        return 1 if Lpos > Lneg else 0
        # could return normalized prob
        # Ppos,Pneg = exp(Lpos),exp(Lneg)
        # return Ppos/(Ppos+Pneg)


    correct = 0
    Ytrue, Ypred = [], []
    for j in test:
        ytr = Y[j]
        ypr = predict(X[j])
        if ytr == ypr:
            correct += 1
        Ytrue.append(ytr)
        Ypred.append(ypr)

    print("correct=%s, Ntest=%s, acc=%0.3f" % (correct, Ntest, correct / float(Ntest)))
    print(
        "rows are true class (0=not phos; 1=phosphorylated); cols are predicted class labels"
    )
    print(confusion_matrix(Ytrue, Ypred, labels=[0, 1]))
