var inquirer = require('inquirer');

function Programmer (name, position, age, language){
    this.name = name; 
    this.position = position; 
    this.age = age; 
    this.language = language;

    this.printInfo = function(){
        console.log("Name: "+this.name+"\nPosition: "+this.position+"\nAge: " +this.age+"\nLanguage: "+this.langauge);
    }
}

inquirer.prompt([{
    //response that's to be given
    name: "name",
    message: "What is your name?"

}, {
    name: "position",
    message: "What is your position?"
}, {
    name: "age",
    message: "How old are you?"
}, {
    name: "language",
    message: "What is your favorite programming language?"
}]).then(function(answers){
    var newGal = new Programmer(answers.name, answers.position, answers.position, answers.langauge);
    newGal.printInfo();
})