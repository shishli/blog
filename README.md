# vitepress theme blog pure

## 动机

一直想找一个架构足够干净的 ssg 程序，hexo,hugo,vuepress,docsify 等各种网上能找的都试了，总有不满意的地方，包括这些程序的主题也没有直接满意的（编程语言不会，功能太多，生成的 html 的文件还有不少插件的残留等）。

vitepress 足够轻量，系统干净，博客主题这块又是空白，所以做一个自己满意的博客主题吧，诉求就是功能可以少，但要足够的轻量。

认真来说对比博客程序的话，其实当前的功能更像是线上笔记展示。

## 使用方法

1.复制以下文件到你的项目根目录

```
├── .vitepress
├── pages
│   ├── about.md
│   ├── archives.md
│   └── tags.md
├── posts            //存放博客文章
├── public           //[可选]
    └── favicon.ico
```

2.新建一个 package.json 文件,执行 npm i,包信息自己看着调整

```json
{
    "name": "vitepress-blog-pure",
    "version": "1.0.0",
    "description": "",
    "main": "index.ts",
    "scripts": {
        "dev": "vitepress dev --host 0.0.0.0",
        "build": "vitepress build",
        "preview": "vitepress preview"
    },
    "keywords": [],
    "author": "",
    "type": "module",
    "license": "ISC",
    "devDependencies": {
        "vitepress": "^1.5.0",
        "globby": "^14.0.2",
        "gray-matter": "^4.0.3",
        "fs-extra": "^11.2.0"
    }
}
```

3.执行 `npm run dev` 即可查看效果, 其他工具随意 pnpm,yarn 等

**ps. 写文章的格式和位置**  
推荐放到 posts 目录中，格式：

```markdown
---
date: 2021-06-30
title: .zsh_history历史记录优化
description: 历史重复的命令太多了，不用grep都不太好找
tags:
    - macOS
---

# .zsh_history历史记录优化  -- 用{{ $frontmatter.title }}会影响本地查询，可惜
正文
```



**其中 title 为必须有的内容，其他随意，推荐含有 date,不然会默认一个当前时间，推荐含有 tags，这样也可以在标签页面显示**

