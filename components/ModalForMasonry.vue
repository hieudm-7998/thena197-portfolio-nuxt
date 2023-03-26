<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <button class="btn-close p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition"
                    type="button" @click="close">
                    <XIcon />
                </button>
                <section class="modal-body flex items-center justify-center">
                    <button type="button"
                        class="prev-btn absolute p-2 hover:text-slate-600 lg:hover:bg-slate-100 lg:hover:text-slate-800 text-slate-800 bg-white rounded transition">
                        <ArrowLeftCircleIcon />
                    </button>
                    <button type="button"
                        class="next-btn absolute p-2 hover:text-slate-600 lg:hover:bg-slate-100 lg:hover:text-slate-800 text-slate-800 bg-white rounded transition">
                        <ArrowRightCircleIcon />
                    </button>
                    <slot name="body">
                        <img class="lg:w-1/3" :src="albums[selectedImage].url" alt="">
                    </slot>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import { XIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'vue-feather-icons'
export default {
    name: 'ModalForMasonry',
    methods: {
        close() {
            this.$emit('close');
        },
    },
    components: { XIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon },
    props: {
        selectedImage: {
            type: String,
            required: true
        },
        albums: {
            type: Array,
        }
    }
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
</style>