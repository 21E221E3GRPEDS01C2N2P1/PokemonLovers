<template>
    <div id="contact-form" class="form-signin py-5">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                  <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <form class="col-8 mx-auto" action="" @submit.prevent="onFormSubmit" method="POST">
                        <h1 class="h3 mb-3 fw-normal alignment">Get In Touch</h1>
                        <p class="alignment">For all enquiries, please email us using the form below:</p>
                            <div class="form-floating form-spacing">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your name" value required autofocus v-model="message.name">
                                <label for="email">Name</label>
                            </div>
                            <div class="form-floating form-spacing">
                                <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" value required autofocus v-model="message.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating form-spacing">
                                <b-form-textarea id="message" name="story" rows="6" max-rows="10" cols="15" v-model="message.message" placeholder="Think something? Say something">
                                </b-form-textarea>
                                <label for="floatingInput">Message</label>
                            </div>
                            <div class="row form-spacing2">
                              <div class="col-md-6">
                                <button class="btn btn-lg poke-secondary enter-btn" type="submit">Send</button>
                              </div>
                              <div class="col-md-6">
                                <button class="btn btn-lg poke-primary enter-btn" type="reset">Clear</button>
                              </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'ContactUs',
  components: {
  },
  data() {
            return {
                message: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('message').add(this.message).then(() => {
                    alert("Message successfully sent!");
                    this.message.name = ''
                    this.message.email = ''
                    this.message.message = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
}
</script>