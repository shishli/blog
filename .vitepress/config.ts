import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10
const pageUrl = 'https://shishli.github.io/'

export default defineConfig({
    title: '草莓熊的树洞',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: '草莓熊的树洞',
    ignoreDeadLinks: true,
    themeConfig: {
        logo: '/logo.png',
        posts: await getPosts(pageSize),
        website: pageUrl, //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'airene/vitepress-blog-pure',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: '首页', link: '/' },
            // { text: '分类', link: '/pages/category' },
            { text: '归档', link: '/pages/archives' },
            // { text: '标签', link: '/pages/tags' },
            { text: '关于', link: '/pages/about' }
        ],
        // search: {
        //     provider: 'local',
        // },
        //outline:[2,3],
        outline:{
            label:'文章摘要'
        },
        socialLinks: [{ icon: 'github', link: pageUrl }]
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
