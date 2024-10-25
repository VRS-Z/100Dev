// document.getElementById("demo").innerHTML = "Hello World!";
// const element = document.getElementById("intro");

// document.getElementById("demo").innerHTML =
//   "The text from the intro paragraph is: " + element.innerHTML;
// const element = document.getElementsByTagName("p");

// document.getElementById("demo").innerHTML =
//   "The text in first paragraph (index 0) is: " + element[0].innerHTML;

// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// document.getElementById("demo").innerHTML =
//   'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML =
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML =
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// document.getElementById("demo").innerHTML = "Date :" + Date();

// document.getElementById("p2").style.color = "blue";
// document.getElementById("p2").style.fontFamily = "Arial";
// document.getElementById("p2").style.fontSize = "larger";
// function reloadPage() {
//   location.reload();
// }
// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// function mOver(obj) {
//   obj.innerHTML = "Thank You";
// }

// function mOut(obj) {
//   obj.innerHTML = "Mouse Over Me";
// }

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(para);
// function myFunction() {
//   document.getElementById("p1").remove();
// }
// const myNodelist = document.querySelectorAll("p");

// document.getElementById("demo").innerHTML =
//   "The innerHTML of the second paragraph is: " + myNodelist[1].innerHTML;
function myFunction() {
  const myNodelist = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "blue";
  }

  const myThing = document.querySelectorAll("h2");
  for (let i = 0; i < myThing.length; i++) {
    myNodelist[0].style.color = "brown";
  }
}
function resetPage() {
  location.reload();
}
