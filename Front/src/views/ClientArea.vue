<template>
  <div id="app">
    <div class="section columns is-fullheight is-centered">
      <div class="column is-4"></div>
      <div id="main" class="column box has-text-centered">
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input v-model="email" id="email" type="email" value="seuemail@gmail.com"/>
        </div>
        <div>
          <label>Senha</label>
          <input v-model="pwd" type="password" id="password"/>
        </div>
        <div>
          <span id="loginError"></span>
        </div>
        <div>
          <button @click.prevent="login(email, pwd)">Logar</button>
        </div>
        <div>
          <br />
          <router-link to="/CreateAccount">Criar uma conta</router-link>
        </div>
      </div>
      <div class="column is-4"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ClientArea",
  data() {
    return {
      email: "",
      pwd: "",
    };
  },
  methods: {
    login(email: string, pwd: string){
      console.log(`${email} e ${pwd}`);
    },
  },
};
</script>

<style scoped>
.section {
  height: 55rem;
}
.box {
  margin-top: 15rem;
  height: 10rem;
}
</style>
