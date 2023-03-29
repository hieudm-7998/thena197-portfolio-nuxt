<template>
    <div class="py-5 mb-5">
        <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
            <defs>
                <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                    fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
            </defs>
        </svg>
        <div class="flex justify-center items-center py-5 mb-5">
            <div class="relative abc">
                <div class="flower-animations">
                    <div class="flower">
                    </div>
                    <div class="flower">
                    </div>
                </div>
                <NuxtLink class="text-3xl font-semibold override-black" to="/">theNa197<svg class="button-stroke"
                        viewBox="0 0 154 13">
                        <use href="#line"></use>
                    </svg>
                    <svg class="button-stroke" viewBox="0 0 154 13">
                        <use href="#line"></use>
                    </svg>
                </NuxtLink>
            </div>
            <!--<div class="flex justify-center items-center gap-3">
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

            </div>-->
        </div>
        <div class="flex items-center justify-between uppercase">
            <NuxtLink class="xl:text-xl" to="/" exact>Home</NuxtLink>
            <NuxtLink class="xl:text-xl" to="/film-photos">Film Photos</NuxtLink>
            <NuxtLink class="xl:text-xl" to="/portrait">Portrait</NuxtLink>
            <NuxtLink class="xl:text-xl" to="/travel">Travel</NuxtLink>
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
    color: #08979D;
}

.svg-wrap {
    position: absolute;
    width: 0px;
    height: 0px;
    overflow: hidden;
}

.override-black {
    color: grey !important;
    display: inline-block;
    color: white;
    text-decoration: none;
    position: relative;
    text-align: center;

    &:hover {
        .button-stroke:nth-child(2) {
            stroke-dashoffset: 0;
        }
    }

    &:hover {
        transition: color ease-out 0.3s;
        color: #08979D !important;

        .flower {
            animation-play-state: running;
        }
    }
}

.flower {
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-play-state: paused;
    animation-timing-function: ease-in-out;
    background-image: url('~/static/profile/flower.png');
    background-size: cover;
    height: 28px;
    position: absolute;
    width: 28px;
}

.flower:nth-child(1) {
    animation-delay: 0s;
    animation-duration: 1s;
    animation-name: flower-keyframes;
    left: -25px;
    top: -5px;
}

.flower:nth-child(2) {
    animation-delay: -2s;
    animation-duration: 1s;
    animation-name: flower-keyframes-alt;
    top: -2px;
    right: -25px;
}

@keyframes flower-keyframes {
    0% {
        transform: rotate(10deg) scale(0.5) translateY(0px);
    }

    40% {
        transform: rotate(-5deg) scale(0.6) translateY(1px);
    }

    100% {
        transform: rotate(10deg) scale(0.5) translateY(0px);
    }
}

@keyframes flower-keyframes-alt {
    0% {
        transform: rotate(-2deg) scale(0.5) translateY(0px);
    }

    45% {
        transform: rotate(7deg) scale(0.7) translateY(1px);
    }

    100% {
        transform: rotate(-2deg) scale(0.5) translateY(0px);
    }
}

.button-stroke {
    display: block;
    width: calc(100% - 20px);
    height: 20px;
    stroke: silver;
    position: absolute;
    left: 10px;
    bottom: -12px;
    stroke-width: 3;

    &:nth-child(2) {
        stroke-dasharray: 650px;
        stroke-dashoffset: 650px;
        stroke: darken(#08979D, 10%);
        stroke-width: 3;
        transition: stroke-dashoffset 500ms ease-out;
    }
}
</style>