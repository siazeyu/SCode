<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {test} from "@/api/test";
export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  created: function() {
    test().then(res => {
      console.log(res)
    }).catch(err => {
      console.log("err ==> " + err)
    })
    console.log("component created");
  }
}
</script>
