<template>
  <h1>Ola Vue</h1>
  <p>Meu nome é {{ nome }} e trabalho como {{ profissão }}</p>
</template>

<script>
export default {
  name: 'PrimeiroComponente',
  data () {
    return {
      nome: 'Paulier',
      profissão: 'Técnico'
    }
  }
}
</script>
