<template>
  <v-card max-width="1920" class="mx-auto">
    <v-main>
      <v-container fluid>
        <v-row>
          <template v-if="loading">
            <v-col v-for="index in 12" :key="index" cols="12" sm="6">
              <v-skeleton-loader type="image, article" />
            </v-col>
          </template>

          <template v-if="!loading">
            <v-col v-for="character in characters" :key="character.id" cols="12" sm="6">
              <CardItem :character="character" />
            </v-col>
          </template>
        </v-row>
      </v-container>

      <v-col>
        <v-pagination
          v-model="currentPage"
          :length="pagesCount"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
          @click="navigateCharacters"
        />
      </v-col>
    </v-main>
  </v-card>
</template>

<script lang="ts">
import CardItem from './CardItem.vue'
import store from '../store'

export default {
  components: {
    CardItem
  },
  data() {
    return {
      currentPage: store.getters.pagination.currentPage
    }
  },
  computed: {
    loading() {
      return store.getters.loadingCharacters
    },
    characters() {
      return store.state.pagination.items
    },
    pagesCount() {
      return Math.ceil(store.state.characters.length / store.state.pagination.pageSize)
    }
  },
  beforeMount() {
    store.dispatch('getCharacters')
  },
  methods: {
    navigateCharacters() {
      store.commit('navigateCharacters', this.$data.currentPage)
    }
  }
}
</script>
