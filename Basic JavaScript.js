var count = 0;

function tickUp() {
    count++;
    document.getElementById("counter").textContent = count;
}

function tickDown() {
    count--;
    document.getElementById("counter").textContent = count;
}

function runForLoop() {
    for (var i = 0; i < count; i++) {
        document.getElementById("forLoopResult").textContent = i + 1;
    }
}

function showOddNumbers() {
    var i = 0;
    var oddNumbers = [];
    while (i <= count) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
        i++;
    }
    document.getElementById("oddNumberResult").textContent = oddNumbers.join(", ");
}

function addMultiplesToArray() {
    var multiples = [];
    for (var i = 5; i <= count; i += 5) {
        multiples.push(i);
    }
    console.log(multiples.reverse());
}

function car (cType, cMPG, cColor) {
    this.cType = cType;
    this.cMPG = cMPG;
    this.cColor = cColor;
}

function printCarObject() {
    var cType = document.getElementById("carType").value;
    var cMPG = document.getElementById("carMPG").value;
    var cColor = document.getElementById("carColor").value;
    var myCar = new car(cType, cMPG, cColor);
    console.log(myCar);
}

function loadCar(num) {
    let car1 = new car(carObject1.cType, carObject1.cMPG, carObject1.cColor);
    let car2 = new car(carObject2.cType, carObject2.cMPG, carObject2.cColor);
    let car3 = new car(carObject3.cType, carObject3.cMPG, carObject3.cColor);
    let carList = [car1, car2, car3];
    console.log(carList[num - 1]);
}

function changeColor(num) {
    if (num === 1) {
        document.getElementById("styleParagraph").style.color = "red";
    }
    else if (num === 2) {
        document.getElementById("styleParagraph").style.color = "green";
    }
    else if (num === 3) {
        document.getElementById("styleParagraph").style.color = "blue";
    }
    else {
        document.getElementById("styleParagraph").style.color = "black";
        console.log("Invalid color choice. Please select 1, 2, or 3.");
    }
}
