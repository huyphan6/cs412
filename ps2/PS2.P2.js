// Write a generator that is initialized with a sentence and that emits each word of the sentence in turn

function* sentenceGenerator(sentence) {
    let words = sentence.split(" ");
    for (const word of words) {
        yield word;
    }
}

let sent = "All I know is something like a bird within her sang"
let i = sent.split(" ").length

while (i -- > 0){
    console.log(sentenceGenerator(sent).next().value)
}
