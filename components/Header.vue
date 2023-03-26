<template>
    <div class="py-5 mb-5">
        <div class="flex justify-between items-center mb-5">
            <div class="border-b-2">
                <NuxtLink class="text-2xl override-black" to="/">TheNa197</NuxtLink>
            </div>
            <div class="flex justify-center items-center gap-3">
                <button class="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition">
                    <a href="https://www.facebook.com/ngocanh.nguyen1997" target="_blank">
                        <FacebookIcon />
                    </a>
                </button>
                <button class="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition">
                    <a href="https://www.instagram.com/alittle.na" target="_blank">
                        <InstagramIcon />
                    </a>
                </button>

            </div>
        </div>
        <div class="flex items-center justify-between uppercase">
            <NuxtLink to="/" exact>Home</NuxtLink>
            <NuxtLink to="/FilmPhotos">Film Photos</NuxtLink>
            <NuxtLink to="/projects">Portrait</NuxtLink>
            <NuxtLink to="/work">Travel</NuxtLink>
        </div>
    </div>
</template>
  
<script>
import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'
export default {
    name: "Header",
    components: {
        InstagramIcon, FacebookIcon
    }
};
</script>
  
<style lang="scss">
.nuxt-link-active {
    color: black;
}

.nuxt-link-exact-active {
    color: #155e75;
}

.override-black {
    color: black !important;

    &:hover {
        transition: color ease 0.2s;
        color: #155e75 !important;
    }
}
</style>