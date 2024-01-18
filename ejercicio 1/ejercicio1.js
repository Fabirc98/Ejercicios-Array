// Vector de estudiantes
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

// Solicitar al usuario que ingrese un nombre
let userInput = prompt("Ingrese un nombre:");

// Verificar si el nombre ingresado se encuentra en el vector
if (students.includes(userInput)) {
    alert("El nombre se encuentra en el vector.");
} else {
    alert("El nombre no se encuentra en el vector.");
}