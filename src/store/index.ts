import { createStore } from 'vuex'

import { Character } from '../interfaces/Character'
import { marvelClient } from '../plugins/axios'

const store = createStore({
  state: {
    characters: [] as Character[],
    loading: {
      characters: false,
      comics: false
    },
    searchText: '',
    characterComics: '',
    pagination: {
      items: [] as Character[],
      currentPage: 1,
      pageSize: 6,
      pagesCount: 0
    }
  },
  getters: {
    loadingCharacters(state) {
      return state.loading.characters
    },
    loadingComics(state) {
      return state.loading.comics
    },
    characters(state) {
      return state.characters
    },
    characterComics(state) {
      return state.characters
    },
    pagination(state) {
      return state.pagination
    }
  },
  mutations: {
    setLoadingCharacters(state, loading) {
      state.loading.characters = loading
    },
    setLoadingComics(state, loading) {
      state.loading.comics = loading
    },
    setCharacters(state, data) {
      state.characters = data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        description: character.description,
        image: character.thumbnail.path + '.' + character.thumbnail.extension,
        comics: character.comics.items.map((comic: any) => comic.name)
      }))
    },
    navigateCharacters(state, currentPage) {
      const pageSize = state.pagination.pageSize
      state.pagination.items = state.characters.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    },
    updateCharacter(state, payload) {
      state.characters.forEach((item, index) => {
        if (item.id === payload.id) {
          state.characters[index].name = payload.name
          state.characters[index].image = payload.image
        }
      })
    },
    setCharacterComics(state, data) {
      state.characterComics = data.results
    }
  },
  actions: {
    async getCharacters(context) {
      try {
        context.commit('setLoadingCharacters', true)

        const {
          data: { data }
        } = await marvelClient.get('/characters', { params: { limit: 100 } })

        context.commit('setLoadingCharacters', false)

        context.commit('setCharacters', data)
        context.commit('navigateCharacters', 1)
      } catch (error) {
        throw new Error(error as string)
      }
    },
    async getCharacterComics(context, comicsId) {
      try {
        context.commit('setLoadingComics', true)

        const {
          data: { data }
        } = await marvelClient.get(`/comics/${comicsId}`)

        context.commit('setLoadingComics', false)

        context.commit('setCharacterComics', data)
      } catch (error) {
        throw new Error(error as string)
      }
    }
  }
})

export default store
