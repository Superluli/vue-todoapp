<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="title" v-model="title">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>

function addTodo(e){
    e.preventDefault()
    this.$emit('add-todo', this.title)
    this.title = ''
}

export default {
  name: 'AddTodo',
  methods: {
    addTodo
  },
  data() {
    return {
        title: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
