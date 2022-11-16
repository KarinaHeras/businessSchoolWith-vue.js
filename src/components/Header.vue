<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{name: 'aMain'}">
            {{sitename}}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right info">
        <button type="button"
                class="btn btn-default btn-lg"
                v-on:click="showStudentReport">
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
