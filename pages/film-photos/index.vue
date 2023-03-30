<template lang="">
  <div>
    <div id="thena197-filmphotos">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="mb-5 gallery-block w-full text-center"
          v-for="(photo, index) in photos"
        >
          <NuxtLink
            :to="`/film-photos/${photo.tag}`"
            class="text-lg hover:text-cyan-800"
          >
            <img
              :v-lazy="photo.thumbnail"
              alt=""
              class="object-cover w-full rounded-lg mb-3"
            />
            <p class="uppercase font-semibold tracking-wide">
              {{ photo.title }}
            </p>
            <p class="text-gray-600 uppercase tracking-wide italic text-sm">
              {{ photo.date }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilmPhotos from "~/data/FilmPhotos.js";
export default {
  name: "FilmPhotos",
  transitions: "fade",
  head() {
    return { title: `theNa197 | Film Photos` };
  },
  data() {
    return {
      photos: FilmPhotos,
    };
  },
};
</script>
<style lang="scss">
.gallery-block {
  img {
    height: 200px;
    object-fit: cover;
  }
}
</style>
