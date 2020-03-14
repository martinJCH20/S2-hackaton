function countvocales(valor){
    const pattern = new RegExp('^[A-Z]+$', 'i'); //Solo letras
    if(pattern.test(valor)){
        let count=0
        for(let i of valor.split("")){
            if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
                count += 1;
            }
        }
        console.log(`Ejercicio 4: Contidad de vocales -> ${count}`);
    }else{
        console.log(`Ejercicio 4: No se permite vacíos, ni números, ni caractéres especiales`);
    }
}

countvocales('Mundial');

function addMiles(number){
    const pattern = new RegExp('^[0-9]*\.?[0-9]*$'); //solo número o números decimales
    if(pattern.test(number)){
        console.log(`Ejercicio 5: ${new Intl.NumberFormat().format(number)}`);
    }else{
        console.log(`Ejercicio 5: No se permite vacíos, ni letras, ni caractéres especiales`);
    }
}

addMiles(109990.3);
