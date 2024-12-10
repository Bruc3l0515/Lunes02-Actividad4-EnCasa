let nombre = 'Facundo';
console.log(`Hola, me llamo ${nombre}`);
let suma = 10 + 4;
console.log(`La suma de 10+4 es: ${suma}`);
let mayor = 10;
console.log(mayor > 5 && "Es mayor a 5");
let menor = 5;
console.log(menor < 2 && "Es menor a 2");
let nombre2 = 'Francisco';
nombre2 = 'Pablo';
console.log(`Mi nombre es ${nombre2}`);
const nombre3 = 'Lorenzo';
console.log(`Mi nombre es ${nombre3}`);
let mayorDeEdad = 20;
console.log(mayorDeEdad > 18 && "Es mayor de edad");
let nombre4 = "carlos";
console.log(typeof nombre4);
const animales = ["chancho", "vaca", "gallina", "oveja", "cordero", "mula", "guanaco", "burro", "caballo"];
let animal = animales[3];
console.log(animal);
let resto = 7 % 3;
console.log(`El resto de la division entre 7 y 3 es: ${resto}`)
let nada = null;
console.log(nada);
const operacion = prompt(`Inserte el simbolo de la operación que quiera hacer (+,-,*,/)`);
const num1 = parseFloat(prompt(`Inserte el primer numero`));
const num2 = parseFloat(prompt(`Inserte el segundo numero`));
switch(operacion) {
  case "+":
    console.log(`El resultado de la suma es ${num1 + num2}`);
    break;
  
  case "-":
    console.log(`El resultado de la resta es ${num1 - num2}`);
    break;

  case "*":
    console.log(`El resultado de la multiplicación es ${num1 * num2}`);
    break;
  
  case "/":
    console.log(`El resultado de la división es ${num1 / num2}`);
    break;
  
  if (num2 !== 0) {
    console.log(`No se pudo concretar la operación (división de "0")`);
  } else {
    console.log(`Operación no valida`);
  };

  default: console.log(`Operación no valida`);
};













/*Este es un comentario donde explico el codigo, y el codigo
  tiene la funcion de experimentar y poder ver los principios
  basicos de JS*/


