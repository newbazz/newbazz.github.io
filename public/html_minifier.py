import htmlmin
import io
import glob, os
from BeautifulSoup import BeautifulSoup as bs
import sys

dir_list = [".", "./bubble-sort", "../optimized-bubblesort", "../analysis"] 


for i in dir_list:
    os.chdir(i)
    for file in glob.glob("*.html"):
        with io.open(file, 'r',encoding="utf-8") as f:
            minified = htmlmin.minify(f.read())
        with io.open(file, 'w') as f:
            f.write(minified)

