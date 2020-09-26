<template>
    <div id="testapp">
        <div>
          <h1>1. component local data version</h1>
          <div>
              <div v-for="item in list" v-bind:key="item" v-bind:class="{'chosen': item === list[index]}">
                {{ item }}
              </div>
              <br>
              number {{ list[index] }} from the list is chosen, its
              computed value (doubled): {{ doubleVal }}
          </div>
          <div>
              <button v-on:click="next">next</button>
          </div>
        </div>
        <div>
          <h1>2. Vuex version</h1>  
          <div>
              <div v-for="item in $store.state.list" v-bind:key="item" v-bind:class="{'chosen': item === list[$store.state.index]}">
                {{ item }}
              </div>
              <br>
              number {{ $store.state.list[$store.state.index] }} from the list is chosen, its
              computed value (doubled): {{ $store.state.list[$store.state.index]*2 }}
          </div>
          <div>
              <button v-on:click="$store.dispatch('next')">next</button>
          </div>
        </div>
        

        <VuexStateMonitor/>
    </div>
</template>

<script>

// import store from '@/store'
import VuexStateMonitor from '@/components/vuexStateMonitor/VuexStateMonitor'

export default {
  name: 'TestApp',
  components: {
    VuexStateMonitor
  }, 
  methods: {
    next: function() {
        this.index ++;
    }
  },
  computed: {
    doubleVal: function() {
        return this.list[this.index]*2
    } 
  },
  watch: {
    index: {
        immediate: false,
        handler: function(){
            console.log("index changed")
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
    console.log(this.$store.state)
  }
}

</script>

<style>

.chosen {
  color: red;
}

</style>
