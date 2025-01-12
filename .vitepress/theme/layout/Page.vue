<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../js/posts.data.js'
import { useData } from 'vitepress'

const { frontmatter, title } = useData()

</script>

<template>
    <div class="page">
        <div class="page-content">
            <Content class="vp-doc" />
        </div>
    </div>
</template>
