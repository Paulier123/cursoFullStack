<template>
    <h1>Meu nome é:{{ nome }}</h1>
</template>

<script>
export default {
  data () {
    return {
      nome: 'Ainda não sei'
    }
  },
  created () { setTimeout(() => { this.nome = 'Paulier' }, 100000) },
  mounted () { setTimeout(() => { this.nome = 'Alessandro' }, 1000) }
}
</script>
