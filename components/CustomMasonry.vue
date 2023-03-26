<template>
    <div class="grid-wrapper">
        <div v-for="(image, index) in images" :key="index" class="cursor-pointer fade-hover"
            :class="image.portrait ? 'item tall' : 'item wide'" @click="selectImageIndex(index)">
            <img :src="image.url" :alt="image.alt" loading="lazy">
        </div>
        <ModalForMasonry :albums="images" :selectedImage="selectedImageIndex" v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
  
<script>
import ModalForMasonry from "./ModalForMasonry.vue"
export default {
    name: 'MasonryGallery',
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    components: {
        ModalForMasonry,
    },
    data() {
        return {
            isModalVisible: false,
            selectedImageIndex: 0
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        selectImageIndex(currentIndex) {
            this.selectedImageIndex = currentIndex
            this.isModalVisible = true;
        }
    }
};
</script>
  
<style>
.grid-wrapper>div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-wrapper>div>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
}

.grid-wrapper .wide {
    grid-column: span 2;
}

.grid-wrapper .tall {
    grid-row: span 2;
}

.grid-wrapper .big {
    grid-column: span 2;
    grid-row: span 2;
}
</style>
  