<template>
  <div>
    <div
      v-if="!success"
      class="contact"
    >
      <h1 class="header">Contact Me</h1>
      <form
        class="form"
        ref="form"
        @submit.prevent="sendEmail"
      >
        <label>Name</label>
        <input
          v-model="name"
          maxlength="50"
          name="user_name"
          type="text"
        >
        <span
          :class="{ invisible: !showNameErr, errorMessage: true }"
        >
          Please enter a name
        </span>
        <label>Email</label>
        <input
          v-model="email"
          maxlength="50"
          name="user_email"
          type="text"
        >
        <span
          :class="{ invisible: !showEmailErr, errorMessage: true }"
        >
          Please enter a valid email address
        </span>
        <label>Message</label>
        <textarea
          v-model="message"
          maxlength="200"
          name="message"
        ></textarea>
        <span
          :class="{ invisible: !showMessageErr, errorMessage: true }"
        >
          Please enter a message
        </span>
        <input type="submit" value="Send">
      </form>
    </div>
    <div v-else>
      <h1 class="header">Thanks!</h1>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      email: '',
      message: '',
      name: '',
      showEmailErr: false,
      showMessageErr: false,
      showNameErr: false,
      success: false,
    };
  },

  methods: {
    sendEmail() {
      if (!this.name) {
        this.showNameErr = true;
      }

      if (!this.isValidEmail) {
        this.showEmailErr = true;
      }

      if (!this.message) {
        this.showMessageErr = true;
      }

      if (!this.name || !this.isValidEmail || !this.message) {
        return;
      }

      emailjs
        .sendForm('service_hibrb5q', 'template_yise02r', this.$refs.form, {
          publicKey: 'scPUUaLFPYnDb99n9',
        })
        .then(
          () => {
            this.success = true;
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },

  computed: {
    isValidEmail() {
      const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;
      return emailRegex.test(this.email);
    }
  },
};
</script>

<style>
.contact {
  min-height: 100vh;
  align-items: center;
}

.errorMessage {
  color: red;
  font-size: 0.75em;
  height: 20px;
  width: 200px;
}

.form {
  display: grid;
  margin: auto;
  max-width: 500px;
}

.form textarea {
  height: 100px;
  resize: none;
}

.form input:last-child {
  height: 30px;
}

.form input[type=submit] {
  padding:5px 15px; 
  background:#ccc; 
  border:0 none;
  cursor:pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px; 
}

.header {
  margin-top: 25px;
  text-align: center;
}

.invisible {
  visibility: hidden;
}
</style>