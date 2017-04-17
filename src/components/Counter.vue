<template>
  <div>
    <h3>Dashboard</h3>
    <h4>Count: {{this.$store.state.counts.count.count}}</h4>
    <button class="btn btn-primary" @click="incCount()">Increment Count</button>
  </div>
</template>

<script>
export default {
  methods: {
    incCount() {
      this.$store.dispatch('incCount', this.$store.state.counts.count.count)
    }
  },
  mounted() {
    this.$store.dispatch('getCount')
  }
}
</script>
