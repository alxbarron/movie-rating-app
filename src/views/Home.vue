<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col sm="4" v-for="movie in movies" :key="movie._id">
        <v-card outlined tile class="text-left">
          <v-card-title class="headline">
              {{movie.name}}
          </v-card-title>
          <v-card-subtitle class="grey--text">
              {{movie.release_year}} · {{movie.genre}} · 3h 3m
          </v-card-subtitle>
          <v-card-text class="text--left">
            {{movie.description}}
          </v-card-text>
          <v-card-actions>
            <v-btn text color="purple">Rate this movie</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return { movies: [] };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/movies',
      }).then((response) => {
        this.movies = response.data.movies;
      }).catch(() => {

      });
    },
    reply() {
      this.message = this.flag ? 'I\'m doing great. Thank You!' : 'Hello there, how are you today?';
      this.btnTxt = this.flag ? 'Greet' : 'Reply';
      this.flag = !this.flag;
    },
  },
  components: { },
};
</script>
