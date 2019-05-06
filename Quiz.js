function Quiz(quizData) {
    this.quizData = quizData;
    this.score = 0;
    this.questionIndex = 0;
    this.populate();
}

Quiz.prototype.populate = function(){
    var question = this.quizData[this.questionIndex];
   var questionContainer = document.getElementById('question');
   var optionsContainer = document.getElementById('options');
   questionContainer.innerHTML = question.title;
   optionsContainer.innerHTML = this.generateOptions(question.type,question.options);
}

Quiz.prototype.generateOptions =  function(questionType,options)
{
    var htmlString = '';
    if(questionType=='radiogroup')
    {
        options.forEach(option => {
            htmlString = htmlString+'<input type="radio" name="option" value='+option+'>'+option+'<br>'
         })
    }
    else if(questionType=='dropdown')
    {
        htmlString = '<select>';
        options.forEach(option => {
            htmlString = htmlString+
            '<option name="option" value="'+option+'">'+option+'</option>'
        })
        htmlString = htmlString+'<select>'
    }     
    return htmlString;
}
Quiz.prototype.next = function(){
    this.questionIndex = this.questionIndex+1;
    this.populate();
}

Quiz.prototype.previous = function(){
    this.questionIndex = this.questionIndex-1;
    this.populate();
}

Quiz.prototype.getQuestionBasedOnIndex = function(){
     var questionData = this.quizData[this.questionIndex];
     return  new Question(questionData.id,questionData.title,questionData.type,questionData.options,questionData.answer);
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.quizData.length;
}

