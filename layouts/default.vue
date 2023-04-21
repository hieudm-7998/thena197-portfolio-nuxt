<template>
    <div id="app" class="bg-white h-screen transition">
        <div class="container">
            <Header />
            <transition name="fade">
                <Nuxt />
            </transition>
        </div>
    </div>
</template>
  
<script>
export default {
    head() {
        return {
            title: 'theNa197 | Home',
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'theNa197 | Home',
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website',
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: 'https://thena197.netlify.app/_nuxt/img/thena197-profile.40e6fbd.jpg',
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content:
                        'theNa197 Portfolio',
                },
            ],
        }
    },
};
</script>
  
<style>
/*#app {
    font-family: "Inter", sans-serif;
}*/

.primary-color {
    color: rgb(249 115 22);
}

::-moz-selection {
    /* Code for Firefox */
    color: white;
    background: rgb(249 115 22);
}

::selection {
    color: white;
    background: rgb(249 115 22);
}
</style>