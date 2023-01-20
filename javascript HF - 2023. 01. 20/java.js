function MegSzerk(){

    befogo1 = parseFloat(document.getElementById("befogo1").value) ;
    befogo2 = parseFloat(document.getElementById("befogo2").value);
    atfogo = parseFloat(document.getElementById("atfogo").value);    

    if(Math.pow(befogo1,2) + Math.pow(befogo2,2) == Math.pow(atfogo,2)){ 
        alert("A háromszög megszerkeszthető!");
    }
    else{
        alert("A háromszög NEM szerkeszthető meg!");
    }

}

function RandomNum(){

    randomNum1 = Math.floor(Math.random() * 10) + 100 ;
    randomNum2 = Math.floor(Math.random() * 10) + 100 ;
    randomNum3 = Math.floor(Math.random() * 10) + 100 ;

    parseFloat(document.getElementById("befogo1").value) = randomNum1;
    parseFloat(document.getElementById("befogo2").value) = randomNum2;
    parseFloat(document.getElementById("atfogo").value) = randomNum3;

}

function Atfogo(){

}