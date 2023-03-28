<template>
    <transition name="modal-fade">
        <v-app>
            <div class="modal-backdrop">
                <div class="modal">
                    <button class="btn-close p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition"
                        type="button" @click="close">
                        <XIcon />
                    </button>
                    <section class="modal-body">
                        <slot name="body">
                            <v-card>
                                <v-carousel v-model="selectedImage" max-height="100%" show-arrows hide-delimiters>
                                    <v-carousel-item contain v-for="(image, i) in albums" :src="image.url" :key="i">
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card>
                        </slot>
                    </section>
                </div>
            </div>
        </v-app>
    </transition>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'ModalForMasonry',
    methods: {
        close() {
            this.$emit('close');
        },
    },
    components: { Carousel, Slide, XIcon },
    props: {
        selectedImage: Number,
        albums: {
            type: Array,
        }
    },
};
</script>

<style>
.modal-backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.modal-body {
    padding: 1rem;
}

.btn-close {
    position: absolute;
    top: 20px;
    right: 20px;

    @media screen and (min-width: 992px) {
        right: 50px;
    }
}

.prev-btn {
    left: 20px;
}

.next-btn {
    right: 20px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}

.v-card,
.vsheet {
    box-shadow: none !important;
}
</style>