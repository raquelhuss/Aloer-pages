import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h('div', { class: 'telegram-pill' }, [
        h('a', { href: 'https://github.com/raquelhuss/Aloer-pages/issues', target: '_blank' }, [
          h('img', { src: '/telegram.svg', width: '18', height: '18', alt: 'Telegram' }),
          h('span', '交流反馈')
        ])
      ])
    })
  }
}
