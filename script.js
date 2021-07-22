function myFunction() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV1");
  
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}