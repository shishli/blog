<template>
    <div class="flex flex-col justify-center items-center home-search animation-react-show-down">
        <div class="flex justify-center posts-search">
            <label class="visually-hidden" for="search">Search</label>
            <div class="p-relative posts-search-input">
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="p-absolute"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="top: 50%; left: 15px; transform: translateY(-50%)"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input id="search" placeholder="Search" />
            </div>
        </div>
        <p class="posts-total">共{{ curPagePosts.length }}篇文章</p>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../js/posts.data.js'
const curPagePosts = computed(() => {
    return posts
})
</script>
