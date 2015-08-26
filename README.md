## Website Performance Optimization portfolio project
--------------------------------------------------
To achieve >=90 page speed score on Mobile/desktop:
--------------------------------------------------
-I added async to line 24 of index.html, the page speed stays 28/30;

-I went back to jpeg-optimizer.com/ to compress the profilepic with compression level set at 10%; click the "analyse" button again at the page Speed insight site, and got Mobile/desktop score of 59/87;On a different day I ran page speed insight,and got a slightly different score for Mobile/desktop: 71/81;

-I added media="print" to line 14 of index.html css rule, page speed improves to 77/90;

-I inlined the entire style.css to index.html-removing media only css rule, removed font url and style.css at index.html, and the page speed rose to 84/85;

-I resized pizzeria to 1100px width with a compression rate of 10%, and the Mobile/desktop score increased to 91/92.

To Test the Page Speed:(for the uninitiated: for the pagespeed analysis to work, it takes a webpage url; such is not required to use DevTool of Chrome to analyze html page for timelines.)

1.First download python and install globally,then at the command prompt of Window,cd to the project directory and enter python -m SimpleHTTPServer 8080;

2. Then download ngrok and put it in the project directory, at the same level with the index.html;

3. Then double click the ngrok, and follow the prompt from ngrok -or go to another command prompt (this PC/File/open command prompt)- and type in the instructed line such as ngrok.exe http 8080. Tada!You are shown a window.

4. Right click the mouse, click "Select all", and then highlight the line after forwarding-resembling  http://aac83ece.ngrok.io, click; open a new Chrome Canary tab, and paste the line in, Tada! There is the web page.

5. Copy the web address to google's pageSpeedInsight site [https://developers.google.com/speed/pagespeed/insights/] to test the page speed.

-------------------------------------------------------------------------------------
To achieve >=60 FPS for pizza.html page:
--------------------------------------------------------------
Changes made in main.js and stle.css for better framerate of pizza.html:

-In makeRandomPizza, I simplified by subsituting NumOfItems (line 340) for NumsOfCheese, NumsOfMeats,etc.

-In pizzaElementGenerator (line 373) I moved style.width and style.height reset in main.js to style.css .randomPizzaContainer

-In changePizzaSizes, I changed the pizza size value to a percent width (line 438), removing the codes involving offsetWidth and complicated calculations to improve FPS

-I reduced the pizza number to a smaller number 51 in the for loop to populate #randomPizzas (line 456)

-I set the pizza number in document.addEventListener and set the sliding pizza position dynamically (line 519);

-I moved the width and height property of .mover in document.addEventListener (line 513) inside main.js to style.css;I removed "elem.basicLeft = (i % colNum) * colWidth;" , and instead added "flex-wrap:wrap;" to .randomPizzaContainer which contains the .mover pizza objects to ensure proper positioning. In document.addEventListener I also changed the row and col numbers of the sliding pizzas to smaller numbers (lines 517, 518) so that the total pizza number is smaller (at 40).

-I removed updatePositions() from the end of the Event Listener-because it is not needed for the initial load-plus window event listener (line 507) is already set to call it.

-I replaced style.width's reset with style.transform in updatePosition(line 494) to avoid forced synchronous layout; To match I added "will-change:transform; transform:translateZ(0);" to .mover class.

-added "use strict"; at the beginning of the main.js, the purpise is to "changes previously accepted "bad syntax" into real errors."(W3 Schools)

-With the above changes, the average time to generate 1 frame is at around 0.6 ms, less than 1 ms.

After revising per reviewer comments, I add and commit at git gh-pages branch, push to origin; checkout master, git rebase gh-pages, git log to verify fast forward.

To examine timelines for pizza.html: use Ctrl Shift I to open Chrome Dev Tool, click on timeline, click on the Record button to start the recording and then click again to end the recording; examine the timelines and console messages to find FPS (frame per second) and time required for scrolling the pizza page and resizing pizza.