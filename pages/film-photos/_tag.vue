<template lang="">
    <div>
        <h2 class="text-center text-3xl text-cyan-800 mb-3 font-bold">
            {{filteredAlbum.title}}
        </h2>
        <p class="text-center texl-lg italic text-black mb-10">"{{filteredAlbum.description}}"</p>
        <CustomMasonry :images="filteredAlbum.gallery"></CustomMasonry>
    </div>
</template>
<script>
import FilmPhotos from "~/data/FilmPhotos.js"
import CustomMasonry from '~/components/CustomMasonry.vue';

export default {
    head() {
        return {
            title: `theNa197 | ${this.filteredAlbum.title}`,
        }
    },

    name: 'FilmPhotos',
    transitions: "fade",
    components: { CustomMasonry },
    data() {
        return {
            filteredAlbum: []
        }
    },
    created() {
        const tagAfterReplace = this.$route.path.replace("/film-photos/", '');
        this.filteredAlbum = FilmPhotos.find(item => item.tag === tagAfterReplace)
    },
}
</script>
<style lang="">
    
</style>