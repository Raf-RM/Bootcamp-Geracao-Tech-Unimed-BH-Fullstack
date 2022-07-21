var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;


adicionar.addEventListener("click", function(){

    if (currentNumber < 16){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if (currentNumber >= 0) {
        var currentNumberTeste = document.getElementById("currentNumber");
        currentNumberTeste.style.color = 'gray';
    }

})    


subtrair.addEventListener("click",function(){
    if (currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    else {
        currentNumberWrapper.innerHTML = currentNumber;     
    }

    if(currentNumber < 0){
        var currentNumberTeste = document.getElementById("currentNumber");
        currentNumberTeste.style.color = 'red';
    }
 
})