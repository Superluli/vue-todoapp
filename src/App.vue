<template>
  <div id="app">
    <Header/>
    <Todos v-bind:todos="todosFakeData" v-on:del-todo="deleteTodo"/>
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

function deleteTodo(id){
  this.todosFakeData = this.todosFakeData.filter(todo => todo.id != id)
}

function addTodo(data){
  this.todosFakeData.push({
    id: this.nextId,
    title: data,
    completed: false
  });
  this.nextId ++
  // alert(this.todosFakeData)
}

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
  }, 
  methods: {
    deleteTodo,
    addTodo
  },
  data() {
    return {
      nextId: 4,
      todosFakeData:[
        {
          id: 1,
          title: "todo1",
          completed: false
        },
        {
          id: 2,
          title: "todo2",
          completed: true
        },
        {
          id: 3,
          title: "todo3",
          completed: false
        }
      ]
    }
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
