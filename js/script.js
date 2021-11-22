/* This is Script File */

// Slider

let slide = 0;

function slider(){
	if (slide == 0) {
		document.getElementById('overheader').classList.remove('two');
		document.getElementById('overheader').classList.add('one');
		slide++;
	} else {
		document.getElementById('overheader').classList.remove('one');
		document.getElementById('overheader').classList.add('two');
		slide--;
	}
}
 
        setInterval(slider, 4500);

// Menu Burger 

let eat = 0;
let menuBurger = document.getElementById("header__links");

$(document).ready(function() {
  $('.menu__burger').click(function(event){
    $('.header__links').toggleClass('active');
    $('.header__link').click(function(event){
      $('.header__links').removeClass('active');
    });
  });
});

//   Scroll Down Open
/*
window.onload = function () {
	document.body.style.overflowY = "visible" ;
    var a = document.getElementById('open');
    var b = 2;
    var scroll = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    scroll = scroll + window.pageYOffset;
    scroll++;
    console.log("Scroll = " + scroll);
    if (scroll <= 1) {
		document.body.style.overflowY = "hidden" ;
	    document.getElementById('scroll').style.opacity = "0" ;
	} else { return scroll++};
	console.log("Scroll = " + scroll);
    a.onclick = function() {
        if (b / 2 || scroll > 1) { 
        	document.body.style.overflowY = "visible" ;
        	document.getElementById('scroll').style.opacity = "1" ;
        };
    }
}
*/
// Header on scroll

window.addEventListener("scroll",function(){
	
});

window.addEventListener('scroll', function() {
	var scroll = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if (scroll > 1500 ){
		document.getElementById('header').classList.add('header__scrolled');
	} else {
		document.getElementById('header').classList.remove('header__scrolled');
	};
});

// Portofolio 

function getPortofolio(x,y,z,i){
  document.getElementById(x).onmouseenter = function(){
    document.getElementById(x).classList.add('opacity');
    document.getElementById(y).classList.add('opacity');
    document.getElementById(z).classList.add('opacity');
  }
  document.getElementById(x).onmouseleave = function(){
    document.getElementById(x).classList.remove('opacity');
    document.getElementById(y).classList.remove('opacity');
    document.getElementById(z).classList.remove('opacity');
  }
}

getPortofolio('block1','bg1','i1');
getPortofolio('block2','bg2','i2');
getPortofolio('block3','bg3','i3');

// Blog

function getBlog(x,y){
  document.getElementById(x).onmouseenter = function(){
    document.getElementById(y).classList.add('opacity');
  }
  document.getElementById(x).onmouseleave = function(){
    document.getElementById(y).classList.remove('opacity');
  }
}

getBlog('block_blog1','blog_bg1');
getBlog('block_blog2','blog_bg2');
getBlog('block_blog3','blog_bg3');
