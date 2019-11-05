function function1() {
    var x = 2;
    switch (x) {
        case 0:
            break;
        case 1:
            break;
        case 2: 
            document.getElementById("par1").innerHTML = "Variable x has the value of: " + x ;
    }
    
}

function function2() {
    var A = document.getElementsByClassName("par2");
    A[0].innerHTML = "The array returned by the getElementByClassName() method was stored inside variable A. this string was passed to the element in index 0 ";
}

function function3() {
    var a = document.getElementById("draw");
    var b = a.getContext("2d");
    b.font = "60px Calibri";
    b.fillText("Test", 40, 70);
}
/*--------------Add gradient---------------*/
function function4() {
    var a = document.getElementById("draw2");
    var b = a.getContext("2d");
    var gradient = b.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "yellow");
    b.fillStyle = gradient;
    b.fillRect(20, 20, 150, 100);
}