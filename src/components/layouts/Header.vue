<template>
    <div>
        <h1>Vue Playground</h1>
        <div id="nav">
          <router-link to="/">TodoApp</router-link> |
          <router-link to="/testapp">TestApp</router-link> |
          <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header'
}

</script>

<style>
</style>
