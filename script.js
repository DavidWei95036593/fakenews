//this code change the picture
var imge = document.querySelectorAll("img");
//use for loop to change the odd number picture
for (var i = 1; i < imge.length; i +=2){
  imge[i].src ="http://cdn3-www.cattime.com/assets/uploads/2012/05/socializing-kitten-300x200.jpg";
}
//use for loop to change the even number picture
for(var i = 0; i <imge.length; i+=2){
	imge[i].src="http://orig14.deviantart.net/b291/f/2013/239/e/d/ssupersteve_face_by_frozen2-d6k0232.png";
}


//this code change the title
var title = document.querySelectorAll("h1");
//use for loop to change the even number title
for(var i = 0; i<title.length; i+=2){
	title[i].innerHTML="A hacker hacked this title";
}
//use for loop to change the odd number title
for(var i =1; i<title.length; i+=2){
	title[i].innerHTML ="This title has been hacked by a hacker";
}


//this code change the articles 
var paragraph = document.querySelectorAll("p");
//use for loop to change the even number paragraph
for(var i = 0; i<paragraph.length; i+=2){
	paragraph[i].innerHTML="A man with an ice axe murders Trotsky";
}
//use for loop to change the odd number paragraph
for(var i =1; i<paragraph.length; i+=2){
	paragraph[i].innerHTML ="French Surrender, Britain is alone";
}


//when you highlight a paragraph, the title will change
var paragraphs = document.getElementsByClassName("teaser")

paragraphs.addEventListener("mouseover",function(){

	title[0].innerHTML = title[0].innerHTML.replace(/hacked/g,"trumped");
	// for (var i = 0; i < title.length; i ++){
	// 	//change every hacked to trumped
 //  title[i].innerHTML = title[i].innerHTML.replace(/hacked/g,"trumped");
}

})

// - New titles on every title (some of them can be the same title)

// - New articles (These don't need to be anything fancy, just different then what you see on the
// page originally).

// - New pictures

// - At least two different elements that have event listeners on them that 