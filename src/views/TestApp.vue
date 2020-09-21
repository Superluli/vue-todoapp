<template>
    <div id="testapp">
        <div>
            items : {{ list }} 
            <br>
            {{ list[index] }} is chosen
        </div>
        <div>
            <button v-on:click="next">next</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestApp',
  components: {
  }, 
  methods: {
    next() {
        this.index ++;
    }
  },
  watch: {
    index: {
        immediate: false,
        handler(){
            alert("index changed")
        }
    }
  },
  data() {
    return {
        index: 0,
        list: [1,2,3,4,5]
    }
  },
  created() {
    
  }
}

</script>

<style>

</style>
