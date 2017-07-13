


//dropdown menu inspired from w3schools
const menuButton = document.querySelector('.menu-button');

function toggling(){
    document.getElementById("menu").classList.toggle("show");
}
menuButton.addEventListener('click',toggling);


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-button')) {

    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
		 var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 



/** progress bar initalization**/
function newCircle(circle, circleId,startColorId,endColorId){
	var circle = new ProgressBar.Circle(circleId, {
	color:startColorId,
		easing:'bounce',
		strokeWidth: 3,
		trialWidth: 1,
		duration: 2000,

	step: function(state, bar){
		bar.setText((bar.value() * 100).toFixed(0));
    }
	});
	// getting number from attribute of element on page
	var value = ($(circleId).attr('value') / 100);
	// this will determine the circumference of the article
		circle.animate(value,{
			from:{color:startColorId},
			to:{color:endColorId},
			step:function(state,circle,bar){
				circle.path.setAttribute('stroke',state.color);
					console.log(circle);
				circle.setText((circle.value() *100).toFixed(0));
			}
});
};
var circle = ['circleOne', 'circleTwo', 'circleThree'], 
	 circleId = ['.first-progress-bar', '.second-progress-bar', '.third-progress-bar'], 
	 startColorId = ['#f34739','#009989','#152b3c'],
	 endColorId = startColorId;


function testScroll(ev){
		
		if(window.pageYOffset>400) {
	//so much redundance...
			var mn = document.getElementById("circle-p1"),
				 mn1 = document.getElementById("circle-p2"),
				 mn2 = document.getElementById("circle-p3"),
				 lb1 = document.getElementById("label-1"),
				 lb2 = document.getElementById("label-2"),
				 lb3 = document.getElementById("label-3")
				 

			
			console.log(mn);
			mn.className += 'circle-show';
			mn1.className+='circle-show';
			mn2.className+='circle-show';
			lb1.className+='label';
			lb2.className+='label';
			lb3.className+='label';
			
			for (var x=0; x<=2; x++){
			 newCircle(circle[x],circleId[x],startColorId[x],endColorId[x]);
			}; 
			window.onscroll=null;
		}
	
};
	
window.onscroll=testScroll;


//smooth scroll by https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('a[href*="#"]')

.not('[href="#"]')
.not('[href="#0"]')
.click(function(event){
	if(
	location.pathname.replace(/^\//, '')== this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1)+']');
		
		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1400, function(){
				var $target = $(target);
				$target.focus();
				if($target.is(":focus")){
					return false;
				}else{
					$target.attr('tabindex','-1');
					$target.focus();
				};
			});
		}
	}
	
});