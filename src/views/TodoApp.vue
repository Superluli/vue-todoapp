<template>
  <div id="app">
    <Todos v-bind:todos="todosData" v-on:del-todo="deleteTodo"/>
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
import Todos from '@/components/todos/Todos.vue'
import AddTodo from '@/components/todos/AddTodo.vue'
import axios from 'axios'

function deleteTodo(id){
  this.todosData = this.todosData.filter(todo => todo.id != id)
}

function addTodo(data){
  this.todosData.push({
    id: this.nextId,
    title: data,
    completed: false
  });
  this.nextId ++
}

export default {
  name: 'TodoApp',
  components: {
    Todos,
    AddTodo
  }, 
  methods: {
    deleteTodo,
    addTodo
  },
  data() {
    return {
      nextId: 6,
      todosData:[]
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => this.todosData = response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
