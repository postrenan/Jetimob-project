<template>
  <div id="app">
    <section class="columns is-vcentered section" id="forms-section">
      <div class="column has-text-centered title" id="titleForm">
        <h2>
          <strong
            >Quando o assunto é segurança, aqui você encontra tudo o que
            precisa.</strong
          >
        </h2>
      </div>
      <div class="column has-text-centered" id="formBox">
        <form id="myForm" class="box">
          <p>Solicite um contato</p>
          <div class="field">
            <label class="required-field" for="firstName">Nome<br /></label>
            <input v-model="name" type="text" name="name" id="firstName" />
          </div>
          <div class="field">
            <label class="required-field" for="phone">Telefone<br /></label>
            <input v-model="phone" type="number" name="phone" id="phone" />
          </div>
          <div class="field">
            <label class="required-field" for="email"
              >Endereço de E-mail <br
            /></label>
            <input v-model="mail" type="email" name="email" id="email" />
          </div>
          <div class="field">
            <label class="required-field" for="textarea">Mensagem:<br /></label>
            <textarea v-model="msg" type="text" name="textarea" id="textarea"></textarea>
          </div>
          <div>
            <span id="errorMessage"></span>
          </div>
          <div class="column has-text-centered">
            <input
              class="button is-success"
              @click.prevent="sendForm(name, phone, mail, msg)"
              type="button"
              value="Enviar"
            />
          </div>
        </form>
      </div>
    </section>
    <section
      class="section columns is-vcentered is-centered is-gapless"
      id="CareSection"
    >
      <div class="column has-text-centered" id="columImage">
        <img src="" id="imageCare" alt="" />
      </div>
      <div class="column">
        <h2 class="title has-text-centered">O cuidado que você merece</h2>
        <p class="has-text-justified">
          Há mais de <strong>25 ANOS </strong>cuidar da sua segurança é a nossa
          missão. Para minimizar riscos e evitar surpresas desagradáveis, você
          precisa ter a estratégia correta, e para isso estamos aqui.Venha fazer
          parte da família <strong>Strong Security</strong> você também!
        </p>
        <div class="column has-text-centered">
          <button class="button is-success">Conheça a PRS</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns has-text-centered is-mobile is-centered">
        <div class="column"></div>
        <div class="column" id="sectionPreve">
          <p class="title">A melhor estratégia de segurança é a prevenção</p>
          <p>
            Se você possui alguma dúvida relacionada a segurança, nossa equipe
            está à disposição para te ajudar.
          </p>
          <button class="button is-warning">Saiba mais</button>
        </div>
        <div class="column"></div>
      </div>
    </section>
    <section class="section" id="Services">
      <p class="column has-text-centered title">Nossos serviços</p>
      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-solid fa-building"></i>
            <p class="title">Portaria remota</p>
            <p class="subtitle">
              Ideal para quem busca alternativas com custos mais acessíveis e
              aumento da segurança com base em tecnologia!
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-sharp fa-solid fa-building-lock"></i>
            <p class="title">Condomínio autônomo</p>
            <p class="subtitle">
              O seu condomínio direto na palma da sua mão, muito mais autonomia
              na sua vida.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-solid fa-bell"></i>
            <p class="title">Monitoramento 24 horas</p>
            <p class="subtitle">
              Seu patrimônio sob vigilância em tempo integral
            </p>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-solid fa-person-military-pointing"></i>
            <p class="title">Vigia portaria e limpeza</p>
            <p class="subtitle">
              Profissionais cuidadosamente selecionados e altamente treinados.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-sharp fa-solid fa-shield-halved"></i>
            <p class="title">Sistemas de segurança</p>
            <p class="subtitle">
              Câmeras, alarmes, cercas elétricas e tudo mais o que você precisar
              para sua segurança.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <i class="fa-sharp fa-solid fa-truck"></i>
            <p class="title">Rastreamento veicular</p>
            <p class="subtitle">
              Sua frota muito mais segura, com controle direto na palma da sua
              mão.
            </p>
          </article>
        </div>
      </div>
      <div class="column has-text-centered">
        <button class="button is-success">Saiba mais</button>
      </div>
    </section>
    <section class="section">
      <p id="textLocation" class="column has-text-centered">
        Localizada em Santa Maria / RS. Na rua Cel. Niederauer, 404 e filial no
        bairro Camobi. Cuidamos da segurança de lares e empresas, totalizando
        mais de 12 mil sistemas de segurança instalados.
      </p>
      <div class="column has-text-centered">
        <iframe
          width="775"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=775&amp;height=400&amp;hl=en&amp;q=rua%20Cel.%20Niederauer%20santa%20maria+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe
        ><a href="https://maps-generator.com/">Maps Generator</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeSite",
  data() {
    return {
      name: "",
      phone: "",
      mail: "",
      msg: "",
    };
  },
  methods: {
    sendForm(){
      if()
    }
  },
};
</script>

<style scoped></style>
