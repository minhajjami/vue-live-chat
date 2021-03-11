<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
     <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignUp from "../composables/useSignUp";
export default {
  setup(props,context) {
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    // useSignup
    const { error, signup } = useSignUp()
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }      
    }
    return { displayName, email, password, handleSubmit,error }
  }
};
</script>

<style>
</style>