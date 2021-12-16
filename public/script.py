import glob, os
from BeautifulSoup import BeautifulSoup as bs
import sys

# dir_list = [".", "./bubble-sort", "../optimized-bubblesort", "../analysis"] 


# for i in dir_list:
# 	os.chdir(i)
# 	for file in glob.glob("*.html"):
# 		html_file = open(file, 'r')
# 		data = html_file.read()
# 		soup = bs(data)
# 		prettyHTML=soup.prettify()
# 		file1 = open(file, "w")
# 		file1.writelines(prettyHTML)
# 		file1.close()
# 		html_file.close()

# 	for file in glob.glob("*.html"):
# 		html_file = open(file, 'r')
# 		source_code = html_file.readlines()
# 		lines = ""
# 		for line in source_code:
# 			if line.strip() == "</body>":
# 				print(line.strip())
# 				lines += '<script type="text/javascript" src="https://cdn.rawgit.com/wingkwong/lazy-load-youtube-videos/master/src/llyv.min.js"></script>\n'
# 				lines += line
# 			elif line.strip() == "</head>":
# 				print(line.strip())
# 				lines += '<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/wingkwong/lazy-load-youtube-videos/master/src/llyv.min.css">\n'
# 				lines += line
# 			else:
# 				lines += line
# 		file1 = open(file, "w")
# 		file1.writelines(lines)
# 		file1.close()
# 		html_file.close()


html_file = open("overview.html", 'r')
data = html_file.read()
soup = bs(data)
prettyHTML=soup.prettify()
file1 = open("overview.html", "w")
file1.writelines(prettyHTML)
file1.close()
html_file.close()
