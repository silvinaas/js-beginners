function repeatLetItBe(veces) {
    let string = "";
    for (let i = 0; i < veces; i++) {
        string = string + "let it be, ";
    }
    return string;
}


function sing() {
    let output = "";

    output = output + repeatLetItBe(4) ;

    output = output + "whisper words of wisdom, " ;
    output = output + repeatLetItBe(5) ;


    output = output + "there will be an answer, let it be";

    return output;
}

//Your code above ^^^

console.log(sing());