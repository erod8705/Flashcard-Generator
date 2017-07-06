module.exports = ClozeCard; 

function ClozeCard (fullText, partial, cloze) {
    this.fullText = fullText; //full sentence on the card
    this.partial = partial; //partial flashcard text which remains after deletion
    this.cloze = cloze; //deleted portion of flashcard text
       
       if (fullText.match(cloze) == null) throw "I'm an error!"
}

var firstPresidentCloze = new ClozeCard ("Sam Houston was the first president of Texas.", ".... was the first president of Texas.", "Sam Houston")

ClozeCard.prototype.showCloze = function() {
console.log(this.cloze);
}

firstPresidentCloze.showCloze();

ClozeCard.prototype.showPartial = function () {
    console.log(this.partial);
}

firstPresidentCloze.showPartial();

ClozeCard.prototype.showFullText = function() {
    console.log(this.fullText);
}

firstPresidentCloze.showFullText();



