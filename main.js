function numberAction(a, b) {
    let sum = a + b;
    let subtract = a - b;
    let multiply = a * b;

    if (sum < 0 || subtract < 0 || multiply < 0) {
        console.log("Wynik jest nieprawidłowy");
    } else {
        console.log("Wynik dodawania wynosi " + sum);
        console.log("Wynik odejmowania wynosi " + subtract);
        console.log("Wynik dodawania wynosi " + multiply);
    }
}

numberAction(2, 5);
numberAction(20, 5);
