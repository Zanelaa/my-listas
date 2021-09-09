<template>
  <section>
    <cima :valor="titulo"/>
    <div class="container">
    <div class="input-group">
      <h2>Altere aqui o título da sua lista</h2>
      <input v-model="titulo" type="text" />
      <br>
      <p>---------------------------------------------------------------------------------------------------------</p>
      <br>
      <h3>{{titulo}}</h3>
      <input @keyup.enter="adtarefa" v-model="novatarefa" type="text" />
      <span class="input-group-btn">
        <button @click="adtarefa" class="btn btn-primary">Adicionar</button>
      </span>
    </div>
    <listartarefas :tarefas="tarefas"/>
    <p>---------------------------------------------------------------------------------------------------------</p>
      <h2>Altere aqui o título do seu rodapé</h2>
      <input v-model="rodape" type="text" />
  </div>
  <rodape :valorrodape="rodape"/>
  </section>
</template>

<script>
import rodape from "@/components/rodape";
import Cima from './components/cima.vue';
import Listartarefas from './components/listartarefas.vue';
export default {
  name: "App",
  components:{Cima, rodape, Listartarefas,},
  data() {
    return {
      titulo: "Farefas do dia",
      rodape: "meu rodape",
      novatarefa: "",
      tarefas: [
        { titulo: "estudar", checked: false },
        { titulo: "dormir", checked: true },
        { titulo: "lavar a louça", checked: false },
        { titulo: "dar banho no doguinho", checked: true },
        { titulo: "estudar devono", checked: false },
        { titulo: "ir para a academia", checked: true },
      ],
    };
  },
  methods: {
    adtarefa() {
      this.tarefas.push({
        titulo: this.novatarefa,
        checked: false,
      });
      this.novatarefa='';
    }
  }
};
</script>

<style>
.container {
  width: 45%;
  margin: 80px auto 40px auto;
}
ul li {
  list-style: none;
}
.removed {
  color: gray; 
}
.removed label {
  text-decoration: line-through;
}
h3 {
  text-align: center;
  font-weight: bolder;
  text-decoration: underline  gray;
}
h2 {
  text-align: center;
  font-weight: bolder;
  text-decoration: underline burlywood;
}
</style>
