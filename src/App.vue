<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list dense>

      <router-link v-bind:to="{ name: 'home', params: {} }" class="side_bar_link">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-bind:to="{ name: 'about', params: {} }" class="side_bar_link">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    color="indigo"
    dark
    app
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-bind:to="{ name: 'AddMovie' }">Add Movie</v-btn>
  </v-toolbar-items>
  </v-app-bar>

  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
    <v-row>
        <v-col>
          <div id="app">
            <router-view/>
          </div>
        </v-col>
      </v-row>
      <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
    </v-container>
  </v-content>

  <v-footer
    color="indigo"
    app
  >
    <span class="white--text">&copy; 2020</span>
  </v-footer>

</v-app>
</template>

<script>
import './assets/css/main.css';

export default {
  name: 'App',

  data: () => ({
    drawer: null,
  }),

  props: {
    source: String,
  },
};
</script>
