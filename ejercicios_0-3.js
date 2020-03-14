
//Ejercico 0
function convertirMayuscula(valor){
    if(valor.trim() == ""){
        console.log("Este valor no puede ser vacío");
    }else{
        console.log(`Ejercicio 0: ${valor.toUpperCase()}`);
    }
}

convertirMayuscula("Martín");

//Ejercicio 1
let paises = ['Rusia','Perú','Holanda', 'Suecia'];

function longword(palabra){
    let eval="";
    for(let i of palabra){
        if(eval == "")
            eval = i;
        else{
            if(i.length > eval.length){
                eval = i;
            }
        }
    }    
    console.log(`Ejercicio 1: ${eval}`);
}

longword(paises);

//Ejercicio 2
let numbers = [2,10,55,100,1];
let result = "";
let cabecera = "";
let counStringEval = 0;
let counString = 0;
function parImpar(valor){
    if(cabecera == ""){
        counString = valor.length;    
        cabecera = 'Ejercicio 2:';
        for(let x of valor){    
            counStringEval += 1;    
            parImpar(x);
        }
    }else{
                if(valor % 2 === 0){
                    result = `${result}${valor} es par, `
                }
                else{
                    result = `${result}${valor} es impar, `
                }
    }
    if(counStringEval === counString){
        console.log(`${cabecera} ${result.slice(0,-2)}`);
    }
}

parImpar(numbers);

//Ejercicio 3
let paises2 = ['Rusia','Perú','Holanda', 'Suecia'];

function shortword(palabra){
    let eval="";
    for(let i of palabra){
        if(eval == "")
            eval = i;
        else{
            if(i.length < eval.length){
                eval = i;
            }
        }
    }    
    console.log(`Ejercicio 3: ${eval}`);
}

shortword(paises2);