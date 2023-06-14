<template>
  <div id="app">
    <main>
      <div class="section columns is-fullheight is-centered">
        <div class="column is-4"></div>
        <div id="main" class="column box has-text-centered">
          <h2>Digite o Email para sua nova conta</h2>
          <div>
            <input v-model="mail" id="email" type="email" required />
          </div>
          <div>
          <span id="errorMessage"></span>
          </div>
          <div>
          <input id="password" @click.prevent="createPass(mail)" type="button" value="Criar">
          </div>
        </div>
        <div class="column is-4"></div>
      </div>
    </main>
  </div>
</template>

<script >
export default {
  name: "HomeSite",
  data() {
    return {
      mail: "",
    };
  },
  methods: {
    createPass(){
      //
      // axios.post('localhost:3030', data){
      //   .then((response) => {
      //
      //   })
      //   .catch((error){
      //
      //   });
      // }
    }
  },
};
</script>

<style scoped></style>