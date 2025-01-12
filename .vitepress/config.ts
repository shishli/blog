import { defineConfig } from 'vitepress'

//每页的文章数量
const pageSize = 5
const pageUrl = 'https://shishli.github.io/'

export default defineConfig({
    title: '草莓熊的树洞',
    base: '/',
    description: '草莓熊的树洞',
    ignoreDeadLinks: true,
    cleanUrls: false,
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    ],
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
})
