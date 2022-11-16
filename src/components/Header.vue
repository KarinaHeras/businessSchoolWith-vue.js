<template>
  <header style="margin: 24px; width: 95%;">
    <div class="navbar bg-success p-4 text-dark bg-opacity-10">
      <div class="navbar-header">
        <h1  style="margin-left: 33px;">
          <router-link :to="{name: 'aMain'}">
            {{sitename}}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right info">
        <button type="button"
                class="btn btn-default btn-lg"
                v-on:click="showStudentReport"
                style="background-color: #d9edf7; 
                width: 154px;
                font-size: 14px;
                margin-top: 15px;
                margin-right: 84px;">
          <span class="glyphicon glyphicon-user">
            {{studentItemCount}}
          </span>
          Student Report
        </button>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'my-header',
    data() {
      return {
        sitename:"Business School",
      }
    },
    props: ['studentItemCount'],
    methods: {
      showStudentReport() {
        this.$router.push({ name: 'Form' });
      }
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
</style>
