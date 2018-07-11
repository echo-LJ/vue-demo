<template>
  <div
          class="cyan"
          @click="register">
          Register
        </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        // this.$store.dispatch('setToken', response.data.token)
        // this.$store.dispatch('setUser', response.data.user)
        // this.$router.push({
        //   name: 'songs'
        // })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
