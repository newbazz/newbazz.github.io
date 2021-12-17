import htmlmin
import io
import glob, os
from BeautifulSoup import BeautifulSoup as bs
import sys

dir_list = ["."] 


# replace all the libraries from cdn to local
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
			if line.find("jpg") != -1:
				line = line.replace("jpg","webp")
			if line.find("png") != -1:
				line = line.replace("png","webp")
			lines+=line

		file1 = open(file, "w")
		file1.writelines(lines)
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
			elif line.strip() == '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/virtual-labs/virtual-style@0.0.6-b/css/style.min.css" />':
				lines += '<link rel="stylesheet" href="./assets/css/style.min.css" />'
			elif line.strip() == '<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous">':
				lines += '<script src="./assets/js/popper.min.js">'
			else:
				lines += line
		file1 = open(file, "w")
		file1.writelines(lines)
		file1.close()
		html_file.close()



# add service worker for caching
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
# 			if line.strip() == '</body>':
# 				lines += line
# 				lines += "<script>if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('./service-worker.js'); });}</script>"
# 			else:
# 				lines += line
# 		file1 = open(file, "w")
# 		file1.writelines(lines)
# 		file1.close()
# 		html_file.close()


# minification
for i in dir_list:
    os.chdir(i)
    for file in glob.glob("*.html"):
        with io.open(file, 'r',encoding="utf-8") as f:
            minified = htmlmin.minify(f.read())
        with io.open(file, 'w') as f:
            f.write(minified)