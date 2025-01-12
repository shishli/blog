import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  },
  category: string,
  description: string | undefined,
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader(['posts/**/*.md'], {
  excerpt: true,
  transform(raw): Post[] {
    console.log("文章raw", raw)
    return raw.map(({ url, frontmatter, excerpt, category }) => {
        console.log("文章url:::" + url)

        return {
            title: frontmatter.title,
            url,
            description: frontmatter.description,
            excerpt,
            category,
            date: formatDate(frontmatter.date)
          }

    }).sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
