function test(){
    // event.defaultPrevented();
document.getElementById("textarea").style.fontWeight="bold";
}
function test1(){
    // event.defaultPrevented();
document.getElementById("textarea").style.fontStyle="italic";
}
function test2(){
    // event.defaultPrevented();
document.getElementById("textarea").style.textDecoration="Underline";
}
function test3(){
    document.getElementById("textarea").style.fontSize=document.getElementById("size").value
}
function test4(){
    document.getElementById("textarea").style.fontFamily=document.getElementById("ff").value
}
$(".pic").hover(function() { $(this).css("opacity","0.5"); $(this).find("#myBtn").show()}, function(){  $(this).css("opacity","1"); $(this).find("#myBtn").hide()})
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}