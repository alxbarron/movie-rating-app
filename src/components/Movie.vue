<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="6">
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
import axios from 'axios';

export default {
  name: 'Movie',
  data() {
    return { movie: [] };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async fetchMovie() {
      return axios({
        method: 'get',
        url: `http://localhost:8081/movies/${this.$route.params.id}`,
      }).then((response) => {
        this.movie = response.data;
      }).catch(() => {

      });
    },
  },
};
</script>
