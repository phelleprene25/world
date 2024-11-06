const texts = ["HEALTH CARE IS OUR GOAL" , "JUST TRUST BUT DONT HOPE" , "LOVE YOURSELF"];
let index = 0;

function changeText() {
    const textElement = document.getElementById("changingText");
    textElement.innerText = text[index];
    index = (index + 1) %text.length;
}
setInterval(changeText, 2000);