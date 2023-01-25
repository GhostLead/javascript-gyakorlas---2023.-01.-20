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

function RandomNumber(min, max) {
    random_num_befogo_1 = Math.round(Math.random() * (max - min) + min); 
    random_num_befogo_2 = Math.round(Math.random() * (max - min) + min);
    random_num_atfogo = Math.round(Math.random() * (max - min) + min);
    document.getElementById("befogo1").value = random_num_befogo_1;
    document.getElementById("befogo2").value = random_num_befogo_2;
    document.getElementById("atfogo").value = random_num_atfogo;
}

function Atfogo(){

    befogo1 = parseFloat(document.getElementById("befogo1").value) ;
    befogo2 = parseFloat(document.getElementById("befogo2").value);
    atfogo = Math.sqrt(Math.pow(befogo1,2) + Math.pow(befogo2,2));
    document.getElementById("atfogo").value = atfogo;
    
}