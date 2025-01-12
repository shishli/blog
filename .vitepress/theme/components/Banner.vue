<template>
    <div class="p-relative home-banner">
        <div class="p-absolute home-banner-bg" v-if="false">
            <canvas id="canvas"></canvas>
        </div>
        <div class="p-relative home-banner-content" v-if="false">
            <h1>BLOGBLOGBLOGBLOGBLOGBLOGBLOGBLOGBLOG</h1>
        </div>
        <div class="flex justify-center home-banner-carlendar">
            <Heatmap></Heatmap>
        </div>
    </div>
</template>
<script lang="ts" setup>
const name = "Banner"
</script>
