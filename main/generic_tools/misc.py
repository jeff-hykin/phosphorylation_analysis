def pascal_case_with_spaces(string):
    digits = "1234567890-"
    valid_word_contents = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-"
    new_string = " "
    # get pairwise elements
    for each_character in string:
        prev_character = new_string[-1]
        prev_is_lowercase = prev_character.lower() == prev_character
        each_is_uppercase = each_character.lower() != each_character
        
        # remove misc characters (handles snake case, kebab case, etc)
        if each_character not in valid_word_contents:
            new_string += " "
        # start of word
        elif prev_character not in valid_word_contents:
            new_string += each_character.upper()
        # start of number
        elif prev_character not in digits and each_character in digits:
            new_string += each_character
        # end of number
        elif prev_character in digits and each_character not in digits:
            new_string += each_character.upper()
        # camel case
        elif prev_is_lowercase and each_is_uppercase:
            new_string += " "+each_character.upper()
        else:
            new_string += each_character
    
    # flatten out all the whitespace
    new_string = new_string.strip()
    while "  " in new_string:
        new_string = new_string.replace("  "," ")
    
    return new_string


def no_duplicates(items): # preserving order
    copy = []
    for each in items:
        if each in copy:
            continue
        copy.append(each)
    return copy

def line_count_of(file_path):
    # from stack overflow "how to get a line count of a large file cheaply"
    def _make_gen(reader):
        while 1:
            b = reader(2**16)
            if not b: break
            yield b
    with open(file_path, "rb") as file:
        count = sum(buf.count(b"\n") for buf in _make_gen(file.raw.read))
    
    return count

def confusion_to_stats(confusion_matrix):
    from __dependencies__.blissful_basics import LazyDict, Csv, FS, super_hash, flatten, large_pickle_save, large_pickle_load, stringify, print, to_pure, indent
    (
        (negative_guess_was_correct_count, positive_guess_was_wrong_count),
        (negative_guess_was_wrong_count  , positive_guess_was_correct_count)
    ) = to_pure(confusion_matrix)
    
    total_accuracy    = (negative_guess_was_correct_count + positive_guess_was_correct_count)/ (negative_guess_was_correct_count + positive_guess_was_wrong_count + negative_guess_was_wrong_count + positive_guess_was_correct_count)
    number_of_positive_guesses = (positive_guess_was_correct_count + positive_guess_was_wrong_count)
    number_of_negative_guesses = (negative_guess_was_correct_count + negative_guess_was_wrong_count)
    number_of_true_positives = (positive_guess_was_correct_count + negative_guess_was_wrong_count)
    number_of_true_negatives = (negative_guess_was_correct_count + positive_guess_was_wrong_count)
    guessing_positive_accuracy = positive_guess_was_correct_count/number_of_positive_guesses if number_of_positive_guesses != 0 else 0
    guessing_negative_accuracy = negative_guess_was_correct_count/number_of_negative_guesses if number_of_negative_guesses != 0 else 0
    true_positive_accuracy = positive_guess_was_correct_count/number_of_true_positives if number_of_true_positives != 0 else 0
    true_negative_accuracy = negative_guess_was_correct_count/number_of_true_negatives if number_of_true_negatives != 0 else 0
    number_of_false_positives_per_false_negative = positive_guess_was_wrong_count / negative_guess_was_wrong_count if negative_guess_was_wrong_count != 0 else float("inf")
    number_of_false_negatives_per_false_positive = negative_guess_was_wrong_count / positive_guess_was_wrong_count if positive_guess_was_wrong_count != 0 else float("inf")
    f1_score = 2 * (true_positive_accuracy * guessing_positive_accuracy) / (true_positive_accuracy + guessing_positive_accuracy) if 0 != (true_positive_accuracy + guessing_positive_accuracy) else 0
    inverse_f1_score = 2 * (true_negative_accuracy * guessing_negative_accuracy) / (true_negative_accuracy + guessing_negative_accuracy) if 0 != (true_negative_accuracy + guessing_negative_accuracy) else 0
    super_f1_score = 2 * (f1_score * inverse_f1_score) / (f1_score + inverse_f1_score) if 0 != (f1_score + inverse_f1_score) else 0
    weighted_f1_score = 2 * ((true_positive_accuracy**1.5) * guessing_positive_accuracy) / ((true_positive_accuracy**1.5) + guessing_positive_accuracy) if 0 != (true_positive_accuracy + guessing_positive_accuracy) else 0
    weighted_basic_score = (true_positive_accuracy**1.5) * guessing_positive_accuracy
    
    print(f"    super_f1_score:", super_f1_score)
    print(f"    f1_score:", f1_score)
    print(f"    inverse_f1_score:", inverse_f1_score)
    print(f"    total_accuracy:", total_accuracy)
    print(f"    weighted_f1_score:", weighted_f1_score) 
    print(f"    weighted_basic_score:", weighted_basic_score) 
    print(f"    when guessing:")
    print(f"        positive: accuracy is {guessing_positive_accuracy} (precision)")
    print(f"        negative: accuracy is {guessing_negative_accuracy}")
    print(f"    when actual:")
    print(f"        positive: accuracy is {true_positive_accuracy} (recall)")
    print(f"        negative: accuracy is {true_negative_accuracy}")
    print(f"    for every:")
    print(f"        false positive there were {number_of_false_negatives_per_false_positive} false negatives")
    print(f"        false negative there were {number_of_false_positives_per_false_negative} false positives")
    print(f'''    confusion_matrix = {indent(stringify(to_pure(confusion_matrix)))}''')
    return dict(
        super_f1_score=super_f1_score,
        f1_score=f1_score,
        inverse_f1_score=inverse_f1_score,
        total_accuracy=total_accuracy,
        weighted_f1_score=weighted_f1_score,
        weighted_basic_score=weighted_basic_score,
        true_positive_accuracy=true_positive_accuracy, # aka recall 
        true_negative_accuracy=true_negative_accuracy,
        guessing_positive_accuracy=guessing_positive_accuracy, # aka precision
        guessing_negative_accuracy=guessing_negative_accuracy,
        number_of_positive_guesses=number_of_positive_guesses, 
        number_of_negative_guesses=number_of_negative_guesses,
        number_of_true_positives=number_of_true_positives,
        number_of_true_negatives=number_of_true_negatives,
        number_of_false_positives_per_false_negative=number_of_false_positives_per_false_negative,
        number_of_false_negatives_per_false_positive=number_of_false_negatives_per_false_positive,
    )