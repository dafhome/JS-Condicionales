let edad = parseInt(prompt("¿Cuantos años tienes?"));

if (edad > 105){
    document.write(`<h3>Lo siento mucho pero no pueden entrar mayores de ${edad}</h3>`);
    var regalo = "Por esto te doy un regalo para ir al cine"
    document.write(regalo);
}

else if (edad === 18 ){
    let DNI = prompt("¿Estas seguro? Enseñame el DNI. Respuesta valida: si/no");
    if (DNI=="si"){
        document.write("¡Por los pelos! Puedes pasar.");
    }
    else{
        document.write("Sin DNI no puedes pasar.");
    }
}

else if (edad > 18){
    document.write("¡Genial! Puedes pasar, disfruta de la noche.");
}

else {
    document.write("Lo siento, no puedes pasar si eres menor de edad.");
}

