let head = document.createElement("h1");
head.innerText = "This is a Heading";
head.style.backgroundColor = "Green";
console.log(head);

document.querySelector("body").append(head);



let para = document.createElement("p");
para.innerText = "This is a Paragraph.";
para.setAttribute("class", "democlass");
para.classList.add("myClass");

document.querySelector("h1").after(para);



let button = document.createElement("button");
button.innerText = "Click Me!";
button.style.backgroundColor = "Red";
button.style.color = "White";
console.log(button);

document.querySelector("p").after(button);