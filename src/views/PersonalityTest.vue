<template>
    <div id="app" v-cloak>
        <div class="container container-fluid">
            <div class="row col-8 mx-auto">
                <span v-if="!startQuiz">
                    <h1>Quiz: Which League Do You Belong To?</h1>
                    <p>In order to join Pokémon Lovers, test your Pokémon knowledge and start collecting as many Pokémon as you want, you must first take the test to find out to which team you belong: Team Valor, Team Instinct or Team Mystic?</p>
                    <p>Each team has its own particularities, which one suits you best? Find out now!</p>
                    <button @click="startQuizFunc()" class="quiz-info-button w-50 btn btn-lg poke-secondary" type="submit">Take quiz!</button>
                </span>
                <span v-else>
                    <h1>{{ quiz.title }}</h1>
                    <div v-for="(question, index) in quiz.questions" v-bind:key="question.id">
                        <div v-show="index === questionIndex">
                            <h3>{{ question.text }}</h3>
                            <ol>
                                <li v-for="response in question.responses" v-bind:key="response.value">
                                    <label>
                                        <input type="radio" v-bind:value="response.value" v-bind:name="index" v-model="userResponses[index]"> {{response.text}}
                                    </label>
                                </li>
                            </ol>
                            <button class="qbutton w-40 btn btn-lg poke-primary" v-if="questionIndex > 0" v-on:click="prev">prev</button>
                            <button class="qbutton w-40 btn btn-lg poke-secondary" v-on:click="next">next</button>
                        </div>
                    </div>
                    <div v-if="questionIndex === quiz.questions.length">
                        <h2>Your Results</h2>
                        <p>Congrats! you are:</p>
                        <h3 style="text-align: center">{{ score() }}</h3>
                        <div v-if="score() === 'Team Mystic'">
                            <img class="team-badge" src="../assets/team-mystic.jpeg">
                            <p>Team Mystic relies on analyzing every situation. Mystic's members believe that Pokémon have immeasurable wisdom and are interested in learning more about why Pokémon experience evolution. Team Mystic is most interested in evolution; beyond that, the members of this faction are cool to a point of intimidation. If you're interested in the science behind what makes Pokémon tick — and are convinced that keeping calm is all it takes for success — choose Team Mystic. Mystic is represented by Articuno, the icy legendary.</p>
                        </div>
                        <div v-if="score() === 'Team Valor'">
                            <img class="team-badge" src="../assets/team-valor.jpg">
                            <p>Team Valor relies on strength in battle. Valor's members believe that Pokémon are stronger and more warmhearted than humans and are interested in enhancing their natural power. Team Valor's M.O. is very much in line with what Pokémon trainers have been taught from the get-go: To be the very best Pokémon master, you've got to train for it. Also, if you like the fire bird legendary Moltres, that's another reason to go with Valor; Moltres is its mascot.</p>
                        </div>
                        <div v-if="score() === 'Team Instinct'">
                            <img class="team-badge" src="../assets/team-instinct.jpg">
                            <p>Team Instinct relies on a trainer's instincts. Instinct's members believe that Pokémon have excellent intuition and are interested in learning more about its connection to the egg hatching process. If you feel that Pokémon are innately talented, and that success in battle can be chalked up to trusting your gut, Instinct is probably the way to go. Team Instinct's mascot is the legendary bird Zapdos.</p>
                        </div>
                        <button @click="redirect()" class="quiz-info-button w-50 btn btn-lg poke-secondary" type="submit">Log In to Pokémon Lovers</button>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import personalitytest from "../scripts/personalitytest.js";

export default {
  name: 'PersonalityTest',
  components: {},
    data: function() {
        return{
            quiz: personalitytest,
            questionIndex: 0,
            startQuiz: false,
            userResponses: Array(),
            /*form: {
                team: ""
            },*/
        }
    },
    methods:{
            startQuizFunc(){
                this.startQuiz = true;
            },
            next: function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            },
            redirect() {
                this.$router.push('Login');
            },
            /*openStorage () {
                return JSON.parse(localStorage.getItem('form'))
            },
            saveStorage (form) {
                localStorage.setItem('form', JSON.stringify(form))
            },
            updateForm (input, value) {
                this.form[input] = value

                let storedForm = this.openStorage()
                if (!storedForm) storedForm = {}
                storedForm[input] = value
                this.saveStorage(storedForm)
            }
        },
        created () {
            const storedForm = this.openStorage()
                if (storedForm) {
                    this.form = {
                        ...this.form,
                        ...storedForm
                    }
                }
        }*/
        /*watch: {
            input: function () {
                if (isLocalStorage()) {
                    localStorage.setItem('storedData', form.team)
                    console.log(form.team)
                }
        }
    }*/
    }   
}
</script>