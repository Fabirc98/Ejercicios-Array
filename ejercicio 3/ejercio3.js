// Frase dada
let phrase = 'La programación web es fundamental para el progreso';

// Separar la frase en palabras usando el método split
let words = phrase.split(' ');

// Filtrar las palabras con más de 3 letras
let wordsWithMoreThan3Letters = words.filter(function(word) {
    return word.length > 3;
});

// Mostrar el array resultante en la consola
alert(wordsWithMoreThan3Letters);