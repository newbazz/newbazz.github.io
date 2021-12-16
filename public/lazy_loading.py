import glob, os
from BeautifulSoup import BeautifulSoup as bs
import sys

dir_list = [".", "./bubble-sort", "../optimized-bubblesort", "../analysis"] 


for i in dir_list:
	os.chdir(i)
	for file in glob.glob("*.html"):
		html_file = open(file, 'r')
		data = html_file.read()
		soup = bs(data)
		prettyHTML=soup.prettify()
		file1 = open(file, "w")
		file1.writelines(prettyHTML)
		file1.close()
		html_file.close()

	for file in glob.glob("*.html"):
		html_file = open(file, 'r')
		source_code = html_file.readlines()
		lines = ""
		for line in source_code:
			if line.strip() == '<script type="text/javascript" src="https://cdn.rawgit.com/wingkwong/lazy-load-youtube-videos/master/src/llyv.min.js">':
				lines += '<script type="text/javascript" src="./assets/js/llyv.min.js"></script>\n'
			elif line.strip() == '<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/wingkwong/lazy-load-youtube-videos/master/src/llyv.min.css" />':
				lines += '<link rel="stylesheet" type="text/css" href="assets/css/llyv.min.css">\n'
			else:
				lines += line
		file1 = open(file, "w")
		file1.writelines(lines)
		file1.close()
		html_file.close()


# html_file = open("overview.html", 'r')
# data = html_file.read()
# soup = bs(data)
# prettyHTML=soup.prettify()
# file1 = open("overview.html", "w")
# file1.writelines(prettyHTML)
# file1.close()
# html_file.close()
