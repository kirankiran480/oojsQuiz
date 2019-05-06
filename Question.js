function Question(id,title,type,options,answer){
    this.id = id;
    this.title = title;
    this.type = type;
    this.options = options;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(userChoice)
{
    return userChoice == this.answer;
}