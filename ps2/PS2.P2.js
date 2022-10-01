// Write a generator that is initialized with a sentence and that emits each word of the sentence in turn

function* everyWord(sentence) {
    let sentArr = sentence.split(" ");
    yield* sentArr;

}

let sent = "All I know is something like a bird within her sang"
for (const word of everyWord(sent)) {
    console.log(word)
}
