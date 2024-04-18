// console.log('Hola JS');
// console.error('Esto es un error');
// console.info();
// console.warn();
let edad = 17;
// if (edad >= 18) {
//   console.log("Es mayor de edad");
// } else {
//   console.log("Es menor de edad");
// }

// if (edad >= 1 && edad < 11) {
//   console.log("entre 1 y 10 años");
// } else if (edad >= 11 && edad < 18) {
//   console.log("entre 11 y 18");
// } else if (edad >= 18 && edad < 51) {
//   console.log("entre 18 y 51");
// } else {
//   console.log("Mucho mayor");
// }

let dia = new Date().getDay();
console.log(dia);
switch (dia) {
  case 1:
    console.log("Hoy es lunes 😊");
    break;
  case 2:
    console.log("Hoy es Martes 😊");
    break;
  case 3:
    console.log("Hoy es Miercoles 😊");
    break;
  case 4:
    console.log("Hoy es Jueves 😊");
    break;
  case 5:
    console.log("Hoy es Viernes 😊");
    break;
  case 6:
    console.log("Hoy es Sabado 😊");
    break;
  case 7:
    console.log("Hoy es Domingo 😊");
    break;
}
