// pin generate function
function pinGenerate(){
        var randomNum = Math.round(1000 + Math.random() * 9000);
        document.getElementById('randomPin').value = randomNum;  
        console.log(randomNum); 
}

// All button's function

function numberBtn(num){
    document.getElementById('display').value = document.getElementById('display').value + num;
}

function clearBtn(){
         document.getElementById('display').value = " ";
}

function clearBackBtn(){
    var callDisplay = document.getElementById('display').value;
    document.getElementById('display').value = callDisplay.substring(0, callDisplay.length - 1);
}

function submitBtn(){
    var randomPinValue = document.getElementById('randomPin').value;
    var displayValue = document.getElementById('display').value;
    
    if(randomPinValue == displayValue){
       document.getElementById('match').style.display = "block";
       document.getElementById('noMatch').style.display = "none"; 
    }
    else{
       document.getElementById('match').style.display = "none";
       document.getElementById('noMatch').style.display = "block";
    }
    threeTry = document.getElementById("threeTry").innerText--;
    threeTryNumber = parseInt(threeTry);
    document.getElementById('threeTry').value = threeTryNumber;
    if(threeTryNumber == !0){
        document.getElementById('match').style.display = "none";
        document.getElementById('noMatch').style.display = "none";
        document.getElementById('tryAgain').style.display = "block";
        document.getElementById('submit').disabled = true;
    }
 }

