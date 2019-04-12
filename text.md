##Example

<img src="pic_trulli.jpg" alt="Italian Trulli">
Img tag heeft 2 attributen, src -> url adress of folder
                          , alt -> wat tekst die de afbeelding beschrijft, indien de 
                                   afbeelding niet zichtbaar is(error of trage connectie).
Geen closing tag.
Images in een andere map -> volledige filepath bijv: img/image1
animated GIFs zijn ook mogelijk.

####Styling
Images kunnen inline in je html file gestyled worden door de styles attribuut.
style="width:500px;height:600px;"   (altijd in pixels)


####Image als link gebruiken.
<img> tag binnen de <a> tag:
Example
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
</a>

####Image Floating
Gebruik de CSS float property om de image rechts of links van de text te laten floaten.

Example
<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>


####Responsive Image
Gebruik de width property.
Als ge de width een percentage is and de heigth auto, wordt de image responsive en kan deze
scalen.

Voorbeeld
img {
  width: 100%;
  height: auto;
}

max-width Property -> als deze 100% is kan je image nooit groter dan zijn originele grootte scalen.

####Background Image

Gebruik de background-image property om een image als achtergrond te gebruiken in een html 
element
To add a background image on a web page, specify the background-image property on the BODY element:
<body style="background-image:url('clouds.jpg');">
<h2>Background Image</h2>
</body>

[https://www.w3schools.com/cssref/pr_background-image.asp]
[https://www.w3schools.com/cssref/css3_pr_background.asp]


background-size property

1. "contain", the background image will scale, and try to fit the content area. However, the image will keep its aspect ratio (the proportional relationship between the image's width and height):


Example
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid red;
}


2. If the background-size property is set to "100% 100%", the background image will stretch to cover the entire content area:

3. If the background-size property is set to "cover", the background image will scale to cover the entire content area. Notice that the "cover" value keeps the aspect ratio, and some part of the background image may be clipped:


#####Ronde Images
Gebruik border-radius.



######Image centreren
display: block;
margin: auto;


#####Transparent Image
The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:


<!-- Image Text
How to position text in an image:
.container {
  position: relative;
}

.bottomleft {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 18px;
}

img { 
  width: 100%;
  height: auto;
  opacity: 0.3; -->


  
#####Image greyscale
100% is volledig grijs.
img {
  filter: grayscale(100%);
}


Flip an Image
Move your mouse over the image:
img:hover {
  
  transform: scaleX(-1);
}


Image Modal (Advanced)
[https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js]


All Values of The CSS object-fit Property
The object-fit property can have the following values:

fill - This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit

contain - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box

cover - The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit
none - The replaced content is not resized

scale-down - The content is sized as if none or contain were specified (would result in a smaller concrete object size)
The following example demonstrates all the possible values of the object-fit property:

https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js

https://css-tricks.com/snippets/css/complete-guide-grid/