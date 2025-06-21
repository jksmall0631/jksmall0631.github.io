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
            id: 0,
        };
    },
}
</script>

<style scoped>
.photo {
    margin-right: 2em;
    width: calc(100% - 2em);
    height: auto;
    object-fit: cover;
    object-position: top;
}

.photo-section {
    float: left;
    width: 50%;
}

.info-section {
    grid-area: info;
}

@media (max-width: 600px) {
    .detail {
        display: block;
    }

    .photo-section {
        width: 100%;
        float: none;
    }

    .photo {
        margin-right: 0;
        margin-bottom: 1em;
        width: 100%;
    }

    .info-section {
        width: 100%;
        float: none;
    }
}
</style>
