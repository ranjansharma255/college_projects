(function () {
  "use strict";

  var imgid = [
    "images/aqua1.jpg",
    "images/aqua2.jpg",
    "images/aqua3.jpg",
    "images/aqua4.jpg",
    "images/aqua5.jpg",
    "images/aqua6.jpg",
    "images/aqua7.jpg"
  ];
  let count = 0;
  document.getElementById("nex").onclick = funChan;
  document.getElementById("pre").onclick = funChan2;
  function funChan() {
    count++;
    if (count > imgid.length - 1) {
      count = 0;
    }
    document.getElementById("imgid").src = imgid[count];
  }
  function funChan2() {
    count--;
    if (count < 0) {
      count = imgid.length - 1;
    }
    document.getElementById("imgid").src = imgid[count];
  }
})();