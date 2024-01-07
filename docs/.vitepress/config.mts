/*
 * @Author: @memo28.repo
 * @Date: 2023-12-15 23:22:05
 * @LastEditTime: 2023-12-15 23:33:34
 * @Description:
 * @FilePath: /memo28.business.docs/docs/.vitepress/config.mts
 */
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "memo28",
    description: "专注业务，轻松构建",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // { text: 'Examples', link: '/markdown-examples' }
            {
                text: 'memo.repo', items: [
                    {
                        text: "memo28.uni",
                        link: 'http://101.43.239.215:8083/'
                    },
                    {
                        text: "memo",
                        link: 'http://101.43.239.215:8082/'
                    },

                ]
            }

        ],
        sidebar: [
            // {
            //   text: 'Examples',
            //   items: [
            //     { text: 'Markdown Examples', link: '/markdown-examples' },
            //     { text: 'Runtime API Examples', link: '/api-examples' }
            //   ]
            // },
            {
                text: 'memo28.business/ele',
                items: [
                    {text: '引导', link: '/@memo28-business-ele/guide'},
                    {text: 'API 文档', link: '/@memo28-business-ele/api'},
                ]
            },
            {
                text: 'memo28.business/vue-page-animations',
                items: [
                    {text: '引导', link: '/vue-page-animations/guide'},
                    {text: 'Slide效果', link: '/vue-page-animations/slide'},
                    {text: 'fade效果', link: '/vue-page-animations/fade'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
