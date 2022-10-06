function vowelCheck(x) {
    var input = x.toLowerCase();
    if (
        input === "a" ||
        input === "e" ||
        input === "i" ||
        input === "o" ||
        input === "u"
    ) {
        console.log("This character is a vowel.");
    } else {
        console.log("This character is not a vowel sadly.");
    }
}
    vowelCheck("f");
    vowelCheck("e");