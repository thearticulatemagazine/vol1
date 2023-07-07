---
title:  "Lenses and Viewlines"
authid: ug-2019-shankar-singh-solanki
img: 
categories: []
tags: []
date: 2023-07-06T22:12:08+05:30
description: ""
summary: ""
draft: true
---

<style>
     /* The grid: Four equal columns that floats next to each other */
.gallery .column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.gallery .column img {
  opacity: 0.8;
  cursor: pointer;
}

.gallery .column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */
.gallery.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The expanding image container (positioning is needed to position the close button and the text) */
.gallery-container {
  position: relative;
  display: none;
}

/* Expanding image text */
#imgtext {
text-align:right;
}

/* Closable button inside the image */
.closebtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 35px;
  cursor: pointer;
} 
    </style>



<!-- The expanding image container -->
<div class="gallery-container">
  <!-- Close the image -->

  <!-- Expanded image -->
  <img id="expandedImg" src="https://picsum.photos/id/1015/600/400.jpg" style="width:100%">

  <!-- Image text -->
  <div id="imgtext"></div>
</div>

<div class="gallery row">
  <div class="column">
    <img src="https://picsum.photos/id/1015/600/400.jpg" alt="Nature" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="https://picsum.photos/id/106/600/400.jpg" alt="Snow" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="https://picsum.photos/id/1039/600/400.jpg" alt="Mountains" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="https://picsum.photos/id/1057/600/400.jpg" alt="Lights" onclick="myFunction(this);">
  </div>
</div>

<script>
    function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 
    </script>