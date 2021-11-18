let n = prompt("De quel nombre veux-tu calculer la factorielle ?");
function factorial(n) {
    if (n == 0 || n == 1 ) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
answer = factorial(n);
console.log(`La factorielle de ${n} est : ${answer}`);