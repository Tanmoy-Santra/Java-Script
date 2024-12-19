function String_uppr(e) {
    return e
        .split(" ") // Split the sentence into words
        .map(element => element[0].toUpperCase() + element.slice(1)) // Capitalize each word
        .join(" "); // Join the words back into a sentence
}

console.log(String_uppr('i am a boy')); // Output: "I Am A Boy"
