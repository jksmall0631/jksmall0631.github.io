<template>
  <div class="contact">
    <h1 class="header">Contact Me</h1>
    <form
      class="form"
      ref="form"
      @submit.prevent="sendEmail"
    >
      <label>Name</label>
      <input type="text" name="user_name">
      <label>Email</label>
      <input type="email" name="user_email">
      <label>Message</label>
      <textarea name="message"></textarea>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_hibrb5q', 'template_yise02r', this.$refs.form, {
          publicKey: 'scPUUaLFPYnDb99n9',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>

<style>
.contact {
  min-height: 100vh;
  align-items: center;
}

.form {
  display: grid;
  margin: auto;
  max-width: 500px;
}

.form input, .form textarea {
  margin-bottom: 15px;
}

.form textarea {
  height: 100px;
  resize: none;
}

.form input:last-child {
  height: 30px;
}

.header {
  margin-top: 25px;
  text-align: center;
}
</style>