<template>
  <div>
    <my-header></my-header>
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="student" v-bind:src="student.image" />
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
      <h3>{{student.name}}</h3>
        <h5>{{student.courses}}</h5>
        <p v-html="student.description"></p>
        <p class="age">{{student.age}}</p>
        <button @click="edit">
          Edit student
        </button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from './Header.vue'
  export default {
    components: { MyHeader },
    data() {
      return {
        student:''
      }
    },
    methods: {
      edit() {
        this.$route.push({name:'Edit'})
      }
    },
    created: function () {
      axios.get('/static/students.json')
        .then((response) => {
          this.student = response.data.students.filter(data => data.id == this.$route.params.id)[0]
          this.student.image = '/' + this.student.image;
        })
    }
  }
</script>