const btn = document.getElementById("btn-img");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");


const adviceMessage = async() => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
}

btn.addEventListener("click", adviceMessage);