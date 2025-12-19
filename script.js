function colorblue() {
    document.body.style.backgroundColor = "blue";
}

function coloryellow() {
    document.body.style.backgroundColor = "yellow";
}

function colorred() {
    document.body.style.backgroundColor = "red";
}

function colorrandom() {
    const colors = ["blue", "yellow", "red", "green", "purple", "orange", "pink", "cyan"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
