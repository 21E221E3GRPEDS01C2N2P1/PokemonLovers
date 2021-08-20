<template>
	<div class="d-flex justify-content-center">
    <div v-if="showScore">
        <b-card title="Results" style="max-width: 40rem;">
			<h1>You Scored {{score}} of {{quiz.questions.length}}</h1>
			<div v-if="score === 0">
				<img src="../assets/sad_pikachu.jpeg" alt="Sad Pikachu" class="img-quiz" >
				<br/>
				<p>Oh no! But don't worry, even great Pokémon trainers lose a battle every once in a while, and there will be plenty of other chances to prove you can still be the very best.</p>
			</div>
			<div v-else>
				<img src="../assets/coins.png" alt="Moedas" class="img-quiz2">
				<br/>
				<h2 style="text-align: center;">Congrats! You get {{tokens}} tokens!</h2>
				<br/>
			</div>
			<button @click="$router.push('Dashboard')" class="quiz-btn w-50 btn poke-secondary">Go Back to My Dashboard</button>
        </b-card>
    </div>
    <div class="card-q" v-else>
    <span v-if="!startQuiz">
         <b-card
         img-src="https://uploads.jovemnerd.com.br/wp-content/uploads/2021/08/pokemon-unite-data-de-lancamento-mobile.jpg" img-alt="Image" img-top title="PokéQuiz" style="max-width: 20rem;" class="mb-2">
        <b-card-text>
			Are you a true Pokémon master? Time to find out! In this quiz, you have 10 seconds to answer each question, and for each one you get right, you get 10 tokens that can be exchanged for Pokémons to form your team.
			Are you ready to show all your Pokémon knowledge?
        </b-card-text>
      <button @click="startQuizFunc()" class="quiz-btn w-50 btn poke-secondary">Start Quiz</button>
    </b-card>
    </span>
    <span v-else>
    <b-card title="PokéQuiz" style="max-width: 20rem;" class="mb-2">
   <b-card-text>
      Question No.{{currentQuestion + 1}} of {{quiz.questions.length}}
    </b-card-text>
    <br>
   <b-progress variant="warning" :max="10" :value="countDown" height="4px"></b-progress>
  
     <b-card-text>
      <span style="font-size: 40px;"><strong>{{countDown}} </strong></span>
    </b-card-text>
    <b-card-text>
      {{quiz.questions[currentQuestion].questionText}}
    </b-card-text>
    <div class="answer-section">
	<button :key="index" v-for="(option, index) in quiz.questions[currentQuestion].answerOptions" @click="handleAnswerClick(option.isCorrect)" class="ans-option-btn btn poke-secondary">{{option.answerText}}</button>
    </div>
  </b-card>
    </span>
  </div>
  </div>
</template>

<script>
import mocktest from "../scripts/mocktest.js";

export default {
  name: 'MockTest',
  components: {},
  data(){
        return {
            currentQuestion: 0,
            showScore: false,
			showTokens: false,
            score:0,
			tokens:0,
            countDown : 10,
            timer:null,
            startQuiz: false,
			quiz: mocktest,
        }
    },
    methods:{
        startQuizFunc(){
            this.startQuiz = true
            this.countDownTimer()
        },
        handleAnswerClick(isCorrect){
            clearTimeout(this.timer);
            let nextQuestion = this.currentQuestion + 1;
            if(isCorrect){
                this.score = this.score + 1;
				this.tokens = this.score * 10;
            }
            if(nextQuestion < this.quiz.questions.length){
            this.currentQuestion = nextQuestion;
            this.countDown = 10;
            this.countDownTimer();
            }
            else{
                this.showScore = true;
				this.showTokens = true;
            }
        },
        countDownTimer() {
                if(this.countDown > 0) {
                    this.timer = setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
                else{
                    this.handleAnswerClick(false)
                }
            }
    },
}



</script>