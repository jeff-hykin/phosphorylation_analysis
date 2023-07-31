# -*- encoding: utf-8 -*-
import os
import sys

import pkg_resources

from .__version__ import __version__  # noqa (imported but unused)
from .util import dependencies

def local_path(*paths):
    import os
    import inspect
    
    cwd = os.getcwd()
    # https://stackoverflow.com/questions/28021472/get-relative-path-of-caller-in-python
    try:
        frame = inspect.stack()[1]
        module = inspect.getmodule(frame[0])
        directory = os.path.dirname(module.__file__)
    # if inside a repl (error =>) assume that the working directory is the path
    except (AttributeError, IndexError) as error:
        directory = cwd
    
    if is_absolute_path(directory):
        return join(directory, *paths)
    else:
        # See note at the top
        return join(intial_cwd, directory, *paths)

try:
    with open(local_path("../requirements.txt"),'r') as f:
        requirements = f.read()
except:
    requirements = None        
# requirements = pkg_resources.resource_string("autosklearn", "requirements.txt")
# requirements = requirements.decode("utf-8")

dependencies.verify_packages(requirements)

if os.name != "posix":
    raise ValueError(
        "Detected unsupported operating system: %s. Please check "
        "the compability information of auto-sklearn: https://automl.github.io"
        "/auto-sklearn/stable/installation.html#windows-osx-compability" % sys.platform
    )

if sys.version_info < (3, 6):
    raise ValueError(
        "Unsupported python version %s found. Auto-sklearn requires Python "
        "3.6 or higher." % sys.version_info
    )
