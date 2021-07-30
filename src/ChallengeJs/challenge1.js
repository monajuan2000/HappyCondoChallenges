const findLetters = text => {
    for (const i in text) {
        let letter = text.charAt(i)
        if (letter === letter.toUpperCase() && letter !== " ") {
            console.log(i);
            break;
        }
    }
}
findLetters("abaDa kEdabra");