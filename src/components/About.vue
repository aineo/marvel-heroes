<template>
  <v-main>
    <v-container fluid height="100%">
      <v-card class="mx-auto my-16" max-width="800">
        <v-card-title>
          <v-img :width="200" :src="image" />
        </v-card-title>

        <v-card-subtitle>
          <p class="text-body-1">
            Some information about marvel, more info
            <a href="https://en.wikipedia.org/wiki/Marvel_Comics" target="_blank">here</a>
          </p>
        </v-card-subtitle>

        <v-card-text>
          <p class="text-body-1">
            Marvel Comics is an American comic book publisher and the property of The Walt Disney
            Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since
            March 2023. Marvel was founded in 1939 by Martin Goodman as Timely Comics, and by 1951
            had generally become known as Atlas Comics. The Marvel era began in August 1961 with the
            launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby,
            Steve Ditko, and many others. The Marvel brand, which had been used over the years and
            decades, was solidified as the company's primary brand.
          </p>
          <br />
          <p class="text-body-1">
            Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man,
            Wolverine, Captain America, Black Widow, Thor, Hulk, Daredevil, Doctor Strange, Black
            Panther, and Captain Marvel, as well as popular superhero teams such as the Avengers,
            X-Men, Fantastic Four, and Guardians of the Galaxy. Its staple of well-known
            supervillains includes the likes of Doctor Doom, Magneto, Green Goblin, Red Skull, Loki,
            Ultron, Thanos, Kang the Conqueror, Venom, and Galactus. Most of Marvel's fictional
            characters operate in a single reality known as the Marvel Universe, with most locations
            mirroring real-life places; many major characters are based in New York City, New York,
            United States. Additionally, Marvel has published several licensed properties from other
            companies. This includes Star Wars comics twice from 1977 to 1986 and again since 2015.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red" variant="plain" text="Back to heroes" @click="$router.back()" />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import image from '../assets/marvel.png'
</script>
