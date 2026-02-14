const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// Make NO button move randomly
noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// YES button response
yesBtn.addEventListener("click", () => {
    response.innerText = "YAYYYY!!! 💕 I knew it!!! 💘";
    noBtn.style.display = "none";
});
