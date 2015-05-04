on 4/21/2015: _Setting Up WebPageInsight with ngrok_

The idea is to download a ngrok file into the project directory so that it can help to showcase the web page to the www! This task can also be done by checking out a gh-pages branch in the project repository and pushing that branch to gitHub remote branch. I had several blocks:

1. I did not know that my python is downloaded but not installed yet.

2. my ngrok is somewhere else, not in the project directory.

Once the two are overcome per help from Coach Susan:

at the command prompt of Window, I cd to my project directory, and enter

python -m SimpleHTTPServer 8080

then I double click the ngrok and go to another command prompt (this PC/File/open command prompt), and type in the instructed line ngrok.exe 8080. Tada!

I also did not realize that for webPageInsight to work, it needs a webpage url; such is not required to use DevTool of Chrome to analyze html page.

_on pizza page:_
4/30/2015:first uncomment style.css about the border style to show the borders.
-Again, do not need to host page to do fps analysis with Google DevTool
