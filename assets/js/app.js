
const contents =  document.querySelectorAll(".content>div")
// contents.forEach( (item)=>{
//     item.style.display = "none"
// } )
// document.querySelector(".content>.brend").style.display = "flex"
document.getElementById("showAbout").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.onas").style.display = "flex"
}
document.getElementById("showChisla").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.chisla").style.display = "flex"
}

document.getElementById("showGroup").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.group").style.display = "flex"
}



document.getElementById("showSlide").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.sliders").style.display = "flex"
}



document.getElementById("showNews").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.news").style.display = "flex"
}
document.getElementById("showMap").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.mapic").style.display = "flex"
}


document.getElementById("showTop").onclick = function(){
    contents.forEach( (item)=>{
        item.style.display = "none"
    } )
    document.querySelector(".content>.brend").style.display = "flex"
}


document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.slide-1', {
        type   : 'loop',
		perPage    : 4,
		breakpoints: {
			600: {
				perPage: 1,
			}
		},

	} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.slide-2', {
        type   : 'loop',
		perPage    : 4,
		breakpoints: {
			600: {
				perPage: 1,
			}
		},

	} ).mount();
} );


document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.slide-3', {
        type   : 'loop',
		perPage    : 4,
		breakpoints: {
			600: {
				perPage: 1,
			}
		},

	} ).mount();
} );

const path = document.querySelectorAll("svg path")
path.forEach((item)=>{
  item.onmousemove = function(){
    document.querySelector(item.getAttribute('data-ser')).classList.add("active")
  }
  item.onmouseleave = function(){
    document.querySelector(item.getAttribute('data-ser')).classList.remove("active")
}
})