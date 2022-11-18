<template>
  <div>
    <my-header :studentItemCount="studentItemCount"></my-header>
    <main>
      <div v-for="student in sortedStudents">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="studentImg" v-bind:src="student.image"  width="250" style=" border-radius: 10px">
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <router-link tag="h1" :to="{ name : 'Id', params: {id: student.id}}">{{student.courses}}</router-link>
              <h3  v-html="student.name"></h3>
            <p v-html="student.description"></p>
            <p class="age">
              {{student.age | formatAge}} años
            </p>
            <button class=" btn btn-primary btn-lg"
                    v-on:click="addToInfo(student)"
                    v-if="canaddToInfo(student)"
                      style="background-color: #94D5CA;">
              Add Fouls
            </button>
            <button disabled="disabled" class=" btn btn-primary btn-lg"
                    v-else>
             Add Fouls
            </button>
            <span class="inventory-message"
                  v-if="student.availableFaults - infoCount(student.id) === 0">
              All Fouls!
            </span>
            <span class="inventory-message"
                  v-else-if="student.availableFaults - infoCount(student.id) < 5">
              Contact {{student.availableFaults - infoCount(student.id)}}  the student!
            </span>
            <span class="inventory-message"
                  v-else>
              Report Now!
            </span>
            <div class="rating">
              <span v-bind:class="{'rating-active' :checkRating(n, student)}"
                    v-for="n in 5">

              </span>
            </div>
          </div><!-- end of col-md-6-->
        </div><!-- end of row-->
        <hr  style="border-top: 10px solid #eee;" />
      </div><!-- end of v-for-->
    </main>
  </div>
</template>
<script>
  import MyHeader from './Header.vue';
  export default {
    name: 'amain',
    data() {
      return {
        students: {},
        info: []
      };
    },
    components: { MyHeader },
    methods: {
      checkRating(n, mystudent) {
        return mystudent.rating - n >= 0;
      },
      addToInfo(astudent) {
        this.info.push(astudent.id);
      },
      canaddToInfo(astudent) {
        return (
          astudent.availableFaults > this.infoCount(astudent.id)
        );
      },
      infoCount(id) {
        let count = 0;
        for (var i = 0; i < this.info.length; i++) {
          if (this.info[i] === id) {
            count++;
          }
        }
        return count;
      }
    },
    computed: {
      studentItemCount() {
        return this.info.length || '';
      },
      sortedStudents() {
        if (this.students.length > 0) {
          let studentsArray = this.students.slice(0);
          function compare(a, b) {
            if (a.courses.toLowerCase() < b.courses.toLowerCase())
              return -1;
            if (a.courses.toLowerCase() > b.courses.toLowerCase())
              return 1;
            return 0;
          }
          return studentsArray.sort(compare);
        }
      }
    },
    filters: {
      formatAge: function (age) {
                const today = new Date();
                const day = today.getFullYear();
                let actualAge = day - age;/*this.student.year*/
                return actualAge;
            }
    },
    created: function () {
      axios.get('/static/students.json').then(response => {
        this.students = response.data.students;
      });
    }
  }
</script>
