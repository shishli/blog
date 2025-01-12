<template>
    <footer class="layout-footer">
        Copyright © 2016-{{ lastYear }} <a :href="website">{{ title }}</a>
    </footer>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { title } = useData()
const website = 'https://shishli.github.io/'
const lastYear = new Date().getFullYear()
</script>
