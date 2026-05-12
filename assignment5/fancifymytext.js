function makeBigger() {
    alert("Hello World!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function makeFancy() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function makeBoring() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "";
    textArea.style.color = "";
    textArea.style.textDecoration = "";
}

function mooText() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();

    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        words[words.length - 1] = words[words.length - 1] + "-MOO";
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".");
}
