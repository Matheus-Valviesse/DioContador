var corruntNumberWrapper = document.getElementById('currentNumber');
var corruntNumber = 0;
var addV = true;
var SubV = true;
corruntNumberWrapper.style.color = 'white';


function compararEcor(){
    if(corruntNumber < 0){
        corruntNumberWrapper.style.color = 'red';
    }else if (corruntNumber > 0){
        corruntNumberWrapper.style.color = 'green';
    }else{
        corruntNumberWrapper.style.color = 'White';
    }

    if( corruntNumber >= 10){
        addV = false;
    }else{
        addV = true;
    }

    if( corruntNumber <= -10){
        SubV = false;
    }else{
        SubV = true;
    }

    

}

function increment(){
    if( addV == true){
        corruntNumber = corruntNumber + 1;
        corruntNumberWrapper.innerHTML = corruntNumber;
        compararEcor();
    }
}

function decrement(){
    if( SubV == true){
        corruntNumber = corruntNumber - 1;
        corruntNumberWrapper.innerHTML = corruntNumber;
        compararEcor();
    }
}
