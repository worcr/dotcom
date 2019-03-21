<template lang="pug">
  #cancelled
    section.cancelled
      .wrapper
        h1 Cancelled
        p Your payment has been cancelled. Have questions? Drop an e-mail to mail@worcr.com.
</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>
  @import '@/assets/styles/variables.sass'
  @import '@/assets/styles/mixins.sass'

  section.cancelled
    h1
      +marker($color-main)

      display: inline-block
      margin: 0

    p
      font-size: 1.2rem
</style>
