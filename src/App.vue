<template lang="pug">
  #app
    router-view
</template>

<style src="normalize.css/normalize.css"></style>

<style lang="sass">
  @import '@/assets/styles/index.sass'
  @import '@/assets/styles/variables.sass'

  html, body
    margin: 0
    padding: 0

  body
    font-family: 'Source Sans Pro', sans-serif

  a
    color: $color-main
</style>
