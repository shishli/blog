<script setup lang="ts">
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<template>
    <div class="layout-container">
        <Header></Header>
        <main class="layout-main">
            <Home v-if="frontmatter.index" />
            <NotFound v-else-if="page.isNotFound" />
            <Page v-else />
        </main>
        <Footer></Footer>
    </div>
</template>
