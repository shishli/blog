<script setup lang="ts">
import { useData } from 'vitepress'
const { title } = useData()
</script>

<template>
    <header class="layout-header flex justify-center items-center p-fixed">
        <div class="flex justify-between items-center layout-header-main">
            <div>
                <img class="logo-img" alt="logo" src="/logo.png" />
                <a href="/" class="logo-title">{{ title }}</a>
            </div>
            <div>
                <a href="/feed.rss">RSS</a>
            </div>
        </div>
    </header>
</template>
