<template lang="pug">
  #thanks
    section.thanks
      .wrapper
        h1 Thanks!
        p
          | Your support helps Worcr to release faster. Join the Worcr&nbsp;
          a(href="https://gitter.com/worcr") Gitter chat
          |  and follow&nbsp;
          a(href="https://twitter.com/getworcr") Twitter account
          |  to stay updated. Have questions? Drop an e-mail to mail@worcr.com.
</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>
  @import '@/assets/styles/variables.sass'
  @import '@/assets/styles/mixins.sass'

  section.thanks
    h1
      +marker

      display: inline-block
      margin: 0

    p
      font-size: 1.2rem
</style>
