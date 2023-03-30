<template>
    <div id="thena197-homepage">
        <img src="~/static/profile/thena197-profile.jpg" class="rounded w-1/2 md:w-2/6 block mx-auto mb-6" alt="theNa197" />
        <div class="text-center mb-5">
            <h1 class="uppercase text-2xl tracking-wide font-semibold text-cyan-800 mb-4">
                Ngoc Anh Nguyen
            </h1>
            <p class="text-gray-700">DOB : 23/12/97</p>
            <p class="text-gray-700">Hanoi, Vietnam</p>
            <p class="text-gray-700">
                <a href="mailto:ngocanh123456mc@gmail.com">
                    ngocanh123456mc@gmail.com
                </a>
            </p>
        </div>
        <div class="bio handwriting-font italic text-justify text-lg pb-5 border-b-2 border-slate-300">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is pleasure,
            but because those who do not know how to pursue pleasure rationally
            encounter consequences that are extremely painful. Nor again is there
            anyone who loves or pursues or desires to obtain pain of itself, because
            it is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial example,
            which of us ever undertakes laborious physical exercise, except to
            obtain some advantage from it? But who has any right to find fault with
            a man who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
        </div>
        <div class="py-5">
            <h1 class="text-xl text-center text-gray-700 mb-5">Find me at:</h1>
            <div class="flex gap-2 justify-center items-center">
                <button class="p-2 text-gray-700 hover:text-cyan-800 hover:bg-slate-200 rounded transition">
                    <a href="https://www.facebook.com/ngocanh.nguyen1997" target="_blank">
                        <FacebookIcon />
                    </a>
                </button>
                <button class="p-2 text-gray-700 hover:text-cyan-800 hover:bg-slate-200 rounded transition">
                    <a href="https://www.instagram.com/thena197" target="_blank">
                        <InstagramIcon />
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'
import OGImage from '~/static/profile/thena197-profile.jpg'

export default {
    name: 'IndexPage',
    transitions: "fade",
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
                    content: OGImage,
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
    components: { FacebookIcon, InstagramIcon }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');

body {
    font-family: 'Baloo 2', cursive;
}

.main-color {
    color: #155e75;
}

.fade-hover {
    transition: opacity 0.2s ease-in-out;

    &:focus {
        outline: 0 solid;
    }

    &:hover {
        opacity: 0.7;
    }
}

a {
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:focus {
        outline: 0 solid;
    }

    &:hover {
        opacity: 0.7;
    }
}
</style>
