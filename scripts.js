 var data  = [
            {id:'Q-101', title:'What is India\'s capital', type:'radiogroup', options:['Delhi','Mumbai','Kolkatta','Pune'],answer:'Delhi'},
            {id:'Q-103', title:"Grand Central Terminal, Park Avenue, New York is the world's", type:'radiogroup', answer:'largest railway station', options:['largest railway station','highest railway station','longest railway station','None of the above']},
            {id:'Q-103', title:'Entomology is the science that studies', type:'dropdown', answer:'largest railway station',
            options:['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks']}
        ]
var questionObjects  = data.map(question=>new Question(question.id,question.title,question.type,question.options,question.answer))
var quiz = new Quiz(questionObjects);
document.getElementById('next').addEventListener("click", function(){
    quiz.next();
});
document.getElementById('previous').addEventListener("click", function(){
    quiz.previous();
});

       