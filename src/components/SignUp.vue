<template>
  <div class="container">
    <div class="img">
      <img src="../assets/images/rest-logo.jpg" alt="rest-logo">
    </div>
    <div class="text-content">
      <h1>Sign Up</h1>
    </div>
    <div class="form">
        <input type="text" v-model="name" :placeholder="placeholder">
        <input type="text" v-model="email" :placeholder="placeholder_2">
        <input type="password" v-model="password" :placeholder="placeholder_3">
        <button class="btn" v-on:click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "SignUp",
  data() {
    return {
      placeholder: 'Enter Name',
      placeholder_2: 'Enter Email',
      placeholder_3: 'Enter Password',
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
      async signUp() {
        let result = await axios.post('http://localhost:3000/users', {
          email: this.email,
          name: this.name,
          password: this.password
        });

        console.warn(result)
        if(result.status==201) {
          localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({name: 'vHome'})
        }
      }
    }
}
</script>

<style scoped>
  .img img {
    width: 100px;
  }
  .form input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
  }
  .btn {
    width: 320px;
    height: 40px;
    background: skyblue;
    border: 1px solid skyblue;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
</style>