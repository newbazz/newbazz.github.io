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
			if line.strip() == '</body>':
				lines += line
				lines += "if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('./service-worker.js'); });}"
			else:
				lines += line
		file1 = open(file, "w")
		file1.writelines(lines)
		file1.close()
		html_file.close()

		