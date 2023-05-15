// BÀI 1

document.getElementById("btn1").onclick = function() {
    var workingday = +document.getElementById("workingday").value;
    var output1 = document.getElementById("result1");
    
    if (Number.isNaN(workingday) == true  || workingday < 0) {
        alert("DỮ liệu nhập vào không hợp lệ !");
        return;
    }

    var salary = workingday * 100000;
    output1.innerHTML = salary + " VND";
}

// BÀI 2

document.getElementById("btn2").onclick = function(){

    var output2 = document.getElementById("result2");

    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var number4 = +document.getElementById("number4").value;
    var number5 = +document.getElementById("number5").value;

    var average = (number1 + number2 + number3 + number4 + number5) / 5;
    output2.innerHTML = average;
}

// BÀI 3

document.getElementById("btn3").onclick = function() {
    var money = +document.getElementById("money").value;
    var output3 = document.getElementById("result3");
    
    if (money < 0) {
        alert("DỮ liệu nhập vào không hợp lệ !");
        return;
    }

    var vnd = money * 23500
    output3.innerHTML = vnd + " VND"
}

// BÀI 4

document.getElementById("btn4").onclick = function() {
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;

    var output4 = document.getElementById("result4");
    
    if (length < 0 || width < 0) {
        alert("DỮ liệu nhập vào không hợp lệ !");
        return;
    }

    var dt = length * width;
    var cv = (length + width) * 2;
    output4.innerHTML = "Diện tích: " + dt + " -" + " Chu vi: "+cv; 

}

//BÀI 5
document.getElementById("btn5").onclick = function() {
        var numberA = +document.getElementById("numberA").value;
    
        var output5 = document.getElementById("result5");
        
        if (numberA > 99) {
            alert("DỮ liệu nhập vào không hợp lệ !");
            return;
        }
        var sum = numberA % 10 +  Math.floor(numberA / 10);
    
        output5.innerHTML = sum; 
}