import requests
f = open("style.css", "r")
css_text = f.read()
f.close()
r = requests.post("http://cssminifier.com/raw", data={"input":css_text})
css_minified = r.text
f2 = open("style.min.css", "w")
f2.write(css_minified)
f2.close()