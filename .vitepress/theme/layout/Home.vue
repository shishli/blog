<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../js/posts.data.js'
import { useData } from 'vitepress'

const { frontmatter, title } = useData()

</script>

<template>
    <div class="home">
        <Banner></Banner>
        <Search></Search>
        <ul class="flex flex-row wrap home-posts">
            <li
                class="flex justify-between items-center home-posts-item animation-react-show-up"
                v-for="{ title, url, date, description } of posts"
            >
                <div class="post-content transform-all transform">
                    <h2 class="post-content-title">{{ title }}</h2>
                    <div class="post-tag">
                        <span>{{ date.string }}</span>
                        <span></span>
                    </div>
                    <div class="post-content-desc">{{ description }}</div>
                    <a class="link" aria-label="阅读全文" :href="url">阅读全文</a>
                </div>
            </li>
        </ul>
    </div>
</template>
