let stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let pyramid = function (stage) {
    for (let n = 1; n <= stage; n++) {
        let p = "";

    for (let i = 1; i <= stage - n; i++) {
        p += " ";
    }

    for (let x = 1; x <= n; x++) {
        p += "#";
    }

    console.log(p);
    }
};
console.log(pyramid(stage));