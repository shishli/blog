import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'


// 样式入口
import './styles/index.scss'
import Layout from './layout/Layout.vue'

/**
 * 扫描组件
 */
const modules = import.meta.glob(['./components/*.vue','./layout/*.vue'], { eager: true, import: 'default' })

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        for (const path in modules) {
            const mod = modules[path]
            console.log("组件名称：", mod.__name)
            app.component(mod.__name, mod)
        }
    }
} satisfies Theme
