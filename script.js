//Question nesnesi
function Question(text,choices,answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
//Question prototype
Question.prototype.checkAnswer=function (answer) {
    return this.answer==answer;
}
//Quiz constructor
function Quiz(questions) {
    this.questions=questions;
    this.score=0;//başlangıçtaki score
    this.questionIndex=0;//başlangıçtaki soru indeksi
}

//Quiz Prototype
//Soru indeksine göre soru gönderilir.
Quiz.prototype.getQuestion=function() {
    return this.questions[this.questionIndex];
}

//Quizin bitip bitmediğinin kontrolü
Quiz.prototype.isFinish=function () {
    return this.questions.length==this.questionIndex;
}

//Tahminler
Quiz.prototype.guess=function (answer) {
    var question=this.getQuestion()
    if(question.checkAnswer(answer)){
        this.score++;
    }
        this.questionIndex++;
}

var q1 = new Question("What is the best programming ?",["C#","JavaScript","Pyhton","Asp.net"],"JavaScript");

var q2 = new Question("What is the most popular language ?",["C#","Visual Basic","Nodejs","JavaScript"],"JavaScript");

var q3 = new Question("What is the best modern programming language ?",["C#","JavaScript","Pyhton","Asp.net"],"JavaScript");

questions=[q1,q2,q3];

//Start Quiz

var quiz=new Quiz(questions);
loadQuestion();
/*console.log(quiz.isFinish());
console.log(quiz.getQuestion());
quiz.guess("JavaScript");
console.log(quiz.getQuestion());
quiz.guess("Nodejs");
console.log(quiz.getQuestion());
quiz.guess("C#");
console.log(quiz.score);
console.log(quiz.isFinish());*/

//Sorular ve seçenekler ekrana yazdırılır.

function loadQuestion() {
    if(quiz.isFinish()){
        showScore();
    }else{
        var question=quiz.getQuestion();
        var choices=question.choices;
        console.log(choices);
        document.querySelector('#question').textContent=question.text;

        for(var i=0;i<choices.length;i++){
            console.log[choices];
            var element=document.querySelector('#choice'+i);
            element.innerHTML=choices[i];
            guess('btn'+i,choices[i]);
        }
        showProgress();
    }
}
//cevaplama
function guess(id,guess) {
    var btn=document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestion();
    }

}

//Score bilgilerinin ekrana yazdırılması
function showScore() {
    var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML=html;
}

//totaldeki soru sayısı ve cevaplanma sonucu ilerlemenin gösterilmesi
function showProgress() {
    var totalQuestion=quiz.questions.length;
    var questionNumber=quiz.questionIndex +1;
    document.querySelector('#progress').innerHTML='Question'+questionNumber+'of'+totalQuestion;
}