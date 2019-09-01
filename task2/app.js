function slideIn(el){
	var elem = document.getElementById(el);
    elem.style.transition = "left .85s ease-in-out 0s";
    elem.style.left = "0px";
}
function slideOut(el){
	var elem = document.getElementById(el);
    elem.style.transition = "left .85s ease-in-out 0s";
	elem.style.left = "-100vw";
}
head3

$( "#go" ).click(function() {
    $( "#go" )
      .animate({ width: "4vw" }, {queue: false,duration: 500}, 1000 )
      .animate({ height: "8vh" },{queue: false,duration: 500}, 1000 )
  });
  $( "#head3" ).click(function() {
    $( "#go" ).css({
      width: "",
      height: "",
    });
  });
