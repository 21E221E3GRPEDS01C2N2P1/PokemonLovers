<template>
    <div id="quiz-info">
        <div class="container container-fluid">
            <div class="row col-8 mx-auto">
                <h1>Quiz: Which League Do You Belong To?</h1>
                <p>In order to join Pokémon Lovers, test your Pokémon knowledge and start collecting as many Pokémon as you want, you must first take the test to find out to which team you belong: Team Valor, Team Instinct or Team Mystic?</p>
                <p>Each team has its own particularities, which one suits you best? Find out now!</p>
                <button @click="$router.push('personalitytest')" class="quiz-info-button w-50 btn btn-lg poke-secondary" type="submit">Take quiz!</button>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
  name: 'PreTest',
  components: {
  }
}
</script>