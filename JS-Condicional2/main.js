//He probado el bucle while para probar, se que es un poco diferente del ejercicio pero me resultaba curioso. 

let color = prompt("¡Elige un color! Ten en cuenta que no todos son validos.")

let respuesta = "";

while (color != "azul" && color != "verde" && color != "rojo" && color != "amarillo" && color != "violeta") {

    respuesta = "Vuelve a intentarlo."
    color = prompt(respuesta + "¡Elige otro color! Vamos a ver si tienes más suerte ahora.")

}

if (color == "azul") {
    respuesta = "¿Por qué el océano nunca está triste? ¡Porque siempre está en onda de buen humor con su color azul!";
}

else if (color == "verde") {
    respuesta = "¿Cómo se llama un esqueleto en el bosque? ¡Verde-muerto!";
}

else if (color == "rojo") {
    respuesta = "¿Por qué el tomate se puso rojo? ¡Porque vio la ensalada desnuda!";
}
else if (color == "amarillo") {
    respuesta = "¿Cuál es el color favorito de Pikachu? ¡Amarillo-noso!";
}
else /*(color == "violeta")*/ {
    respuesta = "¿Qué hace una abeja en un campo de flores violetas? ¡Buscar polen 'a la moda'!";
}



document.write(respuesta);

