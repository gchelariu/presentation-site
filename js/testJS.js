var num = 5;
var num2 = 10;
document.write(num + num2);

document.writeln(" ")

if (num % 2 == 1) {
    document.write("<h3>Impar</h3>");
} else {
    document.write("<h3>Par</h3>");
}

var day = 2;
//switch in JS accepta numere, stringuri, booleene
switch (day) {
    case 1:
        document.write("<h2>Monday</h2>");
        break;
    case 2:
        document.write("<h2>Marti</h2>");
        break;
    case 3:
        document.write("<h2>Miercuri</h2>");
        break;
    case 4:
        document.write("<h2>Monday</h2>");
        break;
    case 5:
        document.write("<h2>Monday</h2>");
        break;
}

var x = 0;
for (; x < 11; x++) {
    if (x % 2 == 0) {
        document.write(x);
        document.write(", ");
    }
}

while (x != 50) {
    document.write(x + ", ");
    x++;
}