<template>
  <div class="container">
    <p><router-link class="sublinhado" to="/">Home</router-link> &#8250; <router-link class="sublinhado" to="/faq">F.A.Qs</router-link></p>
          <div class="accordion faq" role="tablist">
          <h1 class="alignment h1 mb-3">F.A.Qs</h1>
          <p class="alignment">If you have any doubts pertaining Pokémon Lovers, check out these usual questions. If you wish further information, <router-link to="/contactus">send us a message</router-link></p>
          <br/>
          <b-card no-body class="mb-1 card-faq">
              <b-card-header header-tag="header" class="p-1 faq-area" role="tab">
                  <b-button block v-b-toggle.accordion-1 class="faq-area">How do I get access?
                      <span class="when-opened faq-icon">
                        <font-awesome-icon icon="chevron-up" />
                      </span>
                      <span class="when-closed faq-icon">
                        <font-awesome-icon icon="chevron-down" />
                      </span>
                  </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                  <b-card-body class="faq-bg">
                      <b-card-text>It's fairly simple and quick. To get started, you must first <router-link to="/signup">create an account</router-link> by filling the form with the required information. You'll be redirected to a quiz soon after, in order to find out to which team you belong to, among Teams Mystic, Valor and Instinct. From this moment on, whenever you want to have access to Pokemon Lovers, all you have to do is <router-link to="/login">sign in</router-link> in order to enjoy all of the site's contents.</b-card-text>
                  </b-card-body>
              </b-collapse>
          </b-card>
      <br/>
      <b-card no-body class="mb-1 card-faq">
        <b-card-header header-tag="header" class="p-1 faq-area" role="tab">
          <b-button block v-b-toggle.accordion-2 class="faq-area">Are the contents in the website 100% free?
            <span class="when-opened faq-icon">
              <font-awesome-icon icon="chevron-up" />
            </span>
            <span class="when-closed faq-icon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body class="faq-bg">
            <b-card-text>Yes! Pokemon Lovers is 100% free, and no credit card information is required at sign up, but if you enjoy its contents and want to show your support by <a href="https://www.suipa.org.br/index.asp?pg=doacoes.asp" target="_blank">making a donation</a>, it'll be greatly appreciated.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <br/>
      <b-card no-body class="mb-1 card-faq">
        <b-card-header header-tag="header" class="p-1 faq-area" role="tab">
          <b-button block v-b-toggle.accordion-3 class="faq-area">What does Pokémon Lovers offer?
            <span class="when-opened faq-icon">
              <font-awesome-icon icon="chevron-up" />
            </span>
            <span class="when-closed faq-icon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body class="faq-bg">
            <b-card-text>Pokémon Lovers is a place where you can test your knowledge about the Pokémon world. According to the number of right answers you get in each quiz, you will be rewarded with a certain amount of tokens, depending on the difficulty level of the quiz: the harder the quiz, the more tokens you get per right answer. Your tokens can later be exchanged for Pokémons so you can make your team.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
        <br/>
          <b-card no-body class="mb-1 card-faq">
        <b-card-header header-tag="header" class="p-1 faq-area" role="tab">
          <b-button block v-b-toggle.accordion-4 class="faq-area">Can I login with Google?
            <span class="when-opened faq-icon">
              <font-awesome-icon icon="chevron-up" />
            </span>
            <span class="when-closed faq-icon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body class="faq-bg">
            <b-card-text>Yes! Login with your Google account by selecting the option "Sign in with Google" in the <router-link to="/login">sign in page</router-link>.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
          <br/>
          <b-card no-body class="mb-1 card-faq">
        <b-card-header header-tag="header" class="p-1 faq-area" role="tab">
          <b-button block v-b-toggle.accordion-5 class="faq-area">I forgot my password. What should I do?
            <span class="when-opened faq-icon">
              <font-awesome-icon icon="chevron-up" />
            </span>
            <span class="when-closed faq-icon">
              <font-awesome-icon icon="chevron-down" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body class="faq-bg">
            <b-card-text>In case you have forgotten your password, don't worry: just click the option "Forgot your password?" right at the bottom of the <router-link to="/login">sign in page</router-link>. You will be redirected to another page, in which you must input the e-mail account you used to register at Pokémon Lovers, and an e-mail with instructions to reset your password will be sent to you. Furthermore, remember to check your spam box in case you don't get the reset e-mail a few minutes after your request.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Faq',
  components: {
  },
    data() {
      return {
          
        text1: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
}
</script>