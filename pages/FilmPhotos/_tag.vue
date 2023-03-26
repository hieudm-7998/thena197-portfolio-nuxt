<template lang="">
    <div>
        <h2 class="text-center text-2xl text-cyan-800 mb-10 font-bold">
            {{filteredAlbum.title}}
        </h2>

        <CustomMasonry :images="filteredAlbum.gallery"></CustomMasonry>
    </div>
</template>
<script>
import FilmPhotos from "~/data/FilmPhotos.js"
import CustomMasonry from '~/components/CustomMasonry.vue';

export default {
    head() {
        return { title: `TheNa197 | ${this.filteredAlbum.title}` }
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
        const tagAfterReplace = this.$route.path.replace("/FilmPhotos/", '');
        this.filteredAlbum = FilmPhotos.find(item => item.tag === tagAfterReplace)
    },
}
</script>
<style lang="">
    
</style>