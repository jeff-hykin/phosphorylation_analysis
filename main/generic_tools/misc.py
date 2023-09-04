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