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
            <h1>{{ details[id].title }}</h1>
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
    }
}
</script>

<style scoped>
.detail {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
    height: 100vh;
}

.photo {
    margin-bottom: 2em;
    margin-right: 2em;
    width: calc(100% - 2em);
    height: auto;
    object-fit: cover;
}

.info-section {
    height: 100%;
}

@media (max-width: 850px) {
    .detail {
        gap: 2em;
        grid-template-columns: 1fr; /* Stack sections vertically */
        grid-template-rows: min-content auto;
    }
    .photo {
        margin: 0;
        margin-bottom: 2em;
        width: 100%;
        height: 500px;
    }
    .photo-section {
        height: 500px;
        overflow: hidden;
    }
}
</style>