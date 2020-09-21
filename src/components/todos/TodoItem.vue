<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
        <input type="checkbox" v-on:change="markComplete"/>
        {{ todo.title }}
        <button class="del" v-on:click="$emit('del-todo')">x</button>
    </div>
    
</template>

<script>

function markComplete(){
    this.todo.completed = !this.todo.completed; 
}

export default {
  name: 'TodoItem',
  props: ["todo"],
  methods: {
    markComplete
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo-item{
        background: #f4f4f4f4;
        padding: 10px;
        border-bottom:1px #ccc dotted;
    }
    .is-complete{
        text-decoration: line-through;
    }
    .del{
        background-color: red;
    }
</style>
