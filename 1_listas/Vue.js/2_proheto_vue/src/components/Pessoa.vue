<template>
<div>
<h2>O nome da pessoa é: {{ name }}</h2>
<p>Estoutrabalhando no momento{{  }}</p>
<p>Utilizo as tecnologias{{  }}</p>
<Info/>
</div>
</template>
<script>
import Info from './Info.vue'
export default {
  name: 'PessoaRd',
  components: {
    Info
  },
  data () {
    return {
      name: 'Paulier'
    }
  }
}
</script>
