const myImg = document.querySelector("img");

myImg.onclick = () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "img/Google_Chrome_Logo.png") {
        myImg.setAttribute("src", "img/Google_Chrome_Logo2.png");
    } else {
        myImg.setAttribute("src", "img/Google_Chrome_Logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, diga seu nome.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `O que é o Google Chrome, ${myName}?`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `O que é o Google Chrome, ${storedName}?`;
}

myButton.onclick = () => {
    setUserName();
};