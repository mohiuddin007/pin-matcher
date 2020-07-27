// pin generate function
function pinGenerate(){
        var randomNum = Math.round( Math.random() * 10000);
        document.getElementById('randomPin').value = randomNum;   
}

// every button function

function numberBtn(num){
    document.getElementById('display').value = document.getElementById('display').value+num;
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
        var pinMatch = document.getElementById('match');
        pinMatch.style.display = "block";
        var pinNoMatch = document.getElementById('noMatch');
        pinNoMatch.style.display = "none";
    }
    else{
        var pinMatch = document.getElementById('match');
        pinMatch.style.display = "none";
        var pinNoMatch = document.getElementById('noMatch');
        pinNoMatch.style.display = "block";
    }
}