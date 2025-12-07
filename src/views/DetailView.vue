<template>
    <div class="detail">
        <div class="photo-section">
            <img
                v-for="photo in details[id].photos"
                class="photo"
                :src="photo.src"
            />
        </div>
        <div class="info-section">
            <h1 class="title">{{ details[id].title }}</h1>
            <h3 class="date">{{ details[id].date }}</h3>
            <div>
                <p 
                    v-for="paragraph in details[id].description.split('\n')" 
                    :key="paragraph" 
                    style="margin-bottom: 1em;"
                >
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { details } from './constants/PhotoMetadata.js';

export default {
    data() {
        return {
            details,
        };
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
.date {
    color: rgb(195, 191, 191);
    font-size: 0.85rem;
}
.detail {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "photo info";
}
.photo {
    margin-bottom: 2em;
    margin-right: 2em;
    width: calc(100% - 2em);
    height: auto;
    object-fit: cover;
}

.photo-section {
    grid-area: photo;
}

.info-section {
    grid-area: info;
}

.title {
    line-height: 2rem;
}

@media (max-width: 850px) {
    .detail {
        align-items: center;
        gap: 1em;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "info"
            "photo";
    }
    .photo {
        align-items: start;
        margin: 0;
        margin-bottom: 2em;
        width: 100%;
    }
}
</style>