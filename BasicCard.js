module.exports = FlashCard; 

function FlashCard (front, back) {
    this.front = front;
    this.back = back
}


FlashCard.prototype.showFront = function(){
    console.log(this.front);
}



FlashCard.prototype.showBack = function(){
    console.log(this.back);
}
