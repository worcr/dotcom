<template lang="pug">
  #home
    section.hero
      .wrapper
        img.logo(src="/img/worcr-logo-letters.svg")
        p.motto Next-gen background job processing
    section.highlights
      .wrapper
        .highlight
          h2 Reliable
          p Worcr uses PostgreSQL database for persistent storage and Redis for cache and speed. RAM limits no more.
        .highlight
          h2 Polyglot
          p Worcr itself is written in Crystal — a fast, statically-typed language on top of LLVM. However, workers can perform jobs in any language of your choice.
        .highlight
          h2 Feature-rich
          p Worcr has all functionality you're used to — scheduled jobs, limits, expiration and so on. It also brings it's own features to the table, like tags and checkpoints.
    section.features
      .wrapper
        .feature
          h3 Dumb workers
          p In Worcr, workers are dumb executors which wait for a job to come. They don't care about other workers, limits, expirations and so on. All they do is performing jobs assigned to them. Worcr supports both socket and serverless workers.
        .feature
          h3 Interruptible jobs
          p Jobs can have checkpoints updated during the execution, which would allow them to re-run from certain point in case of unexpected failure. For example, an e-mail sender would continue from certain user ID. Jobs also can have progress to display in UI.
        .feature
          h3 Weights
          p Do you find youself creating more and more queues like "urgent" and "even more urgent"? The whole concept of queues scales badly, that's why there are no any queues in Worcr. Instead, every job has its own weight. Those which have bigger weight are performed earlier.
        .feature
          h3 Tags
          p Tags can be applied both to jobs and workers. Tag combinations modify weights, affect limits, retries and expirations. For example, jobs with "premium" tag would have a higher weight for workers tagged "premium" too. Or jobs with "stripe" tag would have an overall limit of 1000 calls per minute.
        .feature
          h3 Embedded functions
          p In Worcr, you can create dynamic limits, retries, expirations and tag modifiers in embeddable languages like Javascript and Lua. This code would be run within Worcr itself and affect the behavior accordingly.
    section.comparison-table
      .wrapper
        .table-wrapper
          table
            thead
              tr
                th
                th
                  span OSS
                th
                  span Pro
                th
                  span Ent
            tbody
              tr
                td
                  .title Jobs enqueuing
                  .description The main function of any background job processing software
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Jobs scheduling
                  .description Ability to delay job execution by an arbitrary amount of time
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
              tr
                td
                  .title Jobs timeout
                  .description Constant or programmable job timeouts
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Language-agnostic socket workers
                  .description Jobs can be performed in any language
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Weighted jobs
                  .description Every job has weight instead of queue
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Web UI
                  .description Official web client shipped in a separate repository
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title REST API
                  .description REST API wrapper to query statistics and perform common tasks
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title GraphQL API
                  .description GraphQL server for modern businesses
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Webhooks
                  .description Real-time notifications of events hapenning in Worcr
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Multi-threading
                  .description Single Worcr instance utilizing multiple cores
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Clustering
                  .description Running multiple Worcr nodes for enhanced reliability and performance
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Tags
                  .description Job and worker tags to create interaction rules and simplify search
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Retries
                  .description Definitions of a job's behavior in case of failure
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Expiration
                  .description An ability to specify time when a job becomes expired
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Job limits
                  .description Window, bucket and concurrency limits based on tags and arguments
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Rate limits
                  .description Rate limiting for third-party services
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Lambda workers
                  .description Use serverless workers to perform jobs
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title CRON jobs
                  .description Jobs scheduled in crontab notation and executed automatically
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Checkpoints
                  .description Job milestones to track and re-run from
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Progress
                  .description Job progress to display in UI
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Logging
                  .description Job logs for further analysis, stored in one place
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Multi-tenancy
                  .description An ability to distribute jobs evenly based on their arguments
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Authorization
                  .description Restricting access requiring a user or worker to authenticate
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Redis cluster support
                  .description Parallelize processing with multiple Redis nodes
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Improved performance
                  .description Multiple layers of Redis caching for superior speed
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.cross(src="/img/ballot_x.svg")
                td
                  img.checkmark(src="/img/heavy_check_mark.svg")
              tr
                td
                  .title Workers limit
                td
                  span.infinity ∞
                td
                  span.infinity ∞
                td
                  span.infinity ∞
              tr
                td
                  .title Support
                td GitHub
                td
                  | GitHub,&nbsp;
                  a(href="https://twist.com") Twist
                td
                  | GitHub,&nbsp;
                  a(href="https://twist.com") Twist
              tr
                td
                  .title License
                td
                  a(href="https://opensource.org/licenses/LGPL-3.0") LGPL
                td
                  abbr(title="Commerical") COM
                td
                  abbr(title="Commerical") COM
              tr
                td
                  .title Price/Month
                td Free
                td
                  span.old-price $250/mo
                  button.purchase-button(role="link" @click="redirectToMonthlyCheckout") $50/mo
                td
                  abbr(title="To Be Announced") TBA
              tr
                td
                  .title Price/Year
                td Free
                td
                  span.old-price $2500/yr
                  button.purchase-button(role="link" @click="redirectToYearlyCheckout") $500/yr
                td
                  abbr(title="To Be Announced") TBA
        .early-access
          | Worcr is currently in&nbsp;
          b early development
          |  stage. You can purchase the license now to support its development and have reduced license price&nbsp;
          b unless explicitly cancelled
          | .
    section.socials
      .wrapper
        a(href="https://github.com/worcr") GitHub
        a(href="https://gitter.com/worcr") Gitter
        a(href="https://twitter.com/getworcr") Twitter
        span Fancy Software LLC &copy; 2019
</template>

<script>
  const stripe = window.Stripe(process.env.VUE_APP_STRIPE_KEY, {
    betas: ['checkout_beta_4']
  })

  const redirectToCheckout = (plan) => {
    stripe.redirectToCheckout({
      items: [{
        plan: plan, quantity: 1
      }],
      successUrl: process.env.VUE_APP_URL + '/thanks',
      cancelUrl: process.env.VUE_APP_URL + '/cancelled'
    }).then(function (result) {
      if (result.error) {
        console.error(result.error.message)
      }
    })
  }

  export default {
    methods: {
      redirectToMonthlyCheckout () {
        redirectToCheckout(process.env.VUE_APP_PRO_MONTHLY_PLAN)
      },
      redirectToYearlyCheckout () {
        redirectToCheckout(process.env.VUE_APP_PRO_YEARLY_PLAN)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '@/assets/styles/variables.sass'
  @import '@/assets/styles/mixins.sass'

  section.hero
    .wrapper
      +center

      flex-direction: column

      @media (min-width: 768px)
        align-items: flex-start

    .logo
      max-width: 100%
      height: 6rem

    .motto
      +marker

      margin: 0
      margin-top: 0.5rem

      @media (max-width: 768px)
        font-size: 1.3rem
        text-align: center
        padding: 0.5rem

      @media (min-width: 768px)
        font-size: 1.6rem

  section.highlights
    color: white
    background-color: $color-main

    .wrapper
      display: grid
      grid-column-gap: 1rem
      grid-row-gap: 2rem
      grid-template-columns: repeat(3, 1fr)

      @media (max-width: 768px)
        grid-template-columns: 1fr

    .highlight
      h2, p
        margin: 0

      h2
        +marker

      p
        margin-top: 0.5rem
        font-size: 1.2rem

  section.features
    .feature
      &:not(:first-of-type)
        margin-top: 2rem

      h3
        +marker

        display: inline-block
        margin: 0
        font-size: 1.3rem

      p
        margin: 0
        margin-top: 0.5rem
        font-size: 1.1rem

  section.comparison-table
    .wrapper
      +center

      flex-direction: column

    .table-wrapper
      width: 100%
      overflow-x: auto

    table
      width: 100%
      border-collapse: collapse

      img.checkmark
        height: 1rem
        filter: invert(30%) sepia(23%) saturate(4211%) hue-rotate(338deg) brightness(95%) contrast(95%)

      img.cross
        height: 1rem
        opacity: 0.15

      .infinity
        font-size: 1.4rem
        line-height: 1

      td
        padding: 1rem

        &:not(:first-child)
          font-size: 1.1rem

      thead th, tr td:not(:first-child)
        text-align: center

      th:not(:first-child)
        padding-bottom: 1rem

        span
          +marker

          font-size: 1.3rem

      tr
        .title
          color: $color-main
          font-weight: bold
          font-size: 1.2rem
          text-transform: uppercase

        .description
          margin: 0
          margin-top: 0.2rem
          opacity: 0.8

      tbody tr:nth-child(2n + 1)
        background-color: rgba(0, 0, 0, 0.025)

      .old-price
        background-image: linear-gradient(transparent 40%, $color-alternative 40%, $color-alternative 70%, transparent 70%)

        &:before, &:after
          content: '\00a0'

      .purchase-button
        display: block
        margin-top: 0.25rem
        padding: 0.4rem 0.8rem

        color: white
        font-weight: bold
        font-size: 1.1rem

        background-color: $color-main
        border: none
        cursor: pointer

        transition: all 100ms ease-out

        &:hover
          transform: translateY(-1px)

    .early-access
      margin-top: 2rem
      padding: 1rem
      font-size: 1.2rem
      text-align: center
      border: 5px solid $color-alternative

  section.socials
    .wrapper
      +center

      > *:not(:first-child)
        @media (max-width: 768px)
          margin-top: 1rem

        @media (min-width: 768px)
          margin-left: 1rem

      @media (max-width: 768px)
        flex-direction: column

    a
      display: block
</style>
