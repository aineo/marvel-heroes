<template>
  <v-card class="mb-2" density="compact" max-width="800">
    <v-img :src="characterImage" height="300" draggable="false" cover />
    <div v-if="editMode" class="avatar_overlay">
      <v-file-input
        v-model="loadedImage"
        label="File input"
        hide-input
        class="upload_button"
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-camera"
        @change="changeImage"
      />
    </div>

    <v-card-title>
      <div class="d-flex flex-row align-center justify-space-between">
        <v-text-field
          v-model="characterName"
          max-width="60%"
          density="compact"
          class="pa-0 font-weight-bold"
          :variant="editMode ? 'underlined' : 'plain'"
          hide-details="auto"
          :readonly="!editMode"
        />

        <v-btn v-if="!editMode" text="Edit" variant="text" @click="showEditing" />
        <v-btn v-if="editMode" text="Save" variant="text" @click="saveCharacter" />
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="red"
        text="Learn More"
        :disabled="character.description.length < 1"
        variant="text"
        @click="learnMore"
      />
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="showDescription"
        class="position-absolute w-100"
        height="100%"
        style="bottom: 0"
      >
        <v-card-text class="pb-0">
          <p class="text-h5">
            {{ character.name }}
          </p>
          <p class="text-medium-emphasis">
            {{ character.description }}
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" text="Close" variant="plain" @click="showDescription = false" />
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import store from '../store'

export default {
  props: ['character'],
  data() {
    return {
      loadedImage: undefined,
      showDescription: false,
      editMode: false,
      characterId: this.character.id,
      characterImage: this.character.image,
      characterName: this.character.name
    }
  },
  computed: {
    loading() {
      return store.getters.loadingComics
    },
    characterComics() {
      return store.getters.character.comics
    }
  },
  methods: {
    showEditing() {
      this.editMode = true
    },
    saveCharacter() {
      const payload = {
        id: this.characterId,
        name: this.characterName,
        image: this.characterImage
      }
      store.commit('updateCharacter', payload)

      this.editMode = false
    },
    changeImage() {
      if (this.loadedImage !== undefined && (this.loadedImage as File).size < 2000000) {
        this.characterImage = URL.createObjectURL(this.loadedImage)
      } else {
        throw new Error('Character image not exist or size should be less than 2 MB!')
      }
    },
    learnMore() {
      this.showDescription = true
    }
  }
}
</script>

<style lang="scss">
.avatar_overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(15%);
  }
}

.upload_button {
  color: #ffffff;
}
</style>
