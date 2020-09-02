function buttonClick() {
    document.getElementById("heading").innerHTML = "S-a apasat butonu ba!";
}

function verify() {
    var str = document.getElementById("input1").value;
    if (str.length > 10) {
        alert("E prea lung!")
    } else {
        alert("E bun!");
    }
}