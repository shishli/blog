---
date: 2024-10-10
title: electron打包缓慢解决方法
category: electron
tags:
- electron
- 桌面应用
description: 
---

## electron builder 打包报错

-  electron依赖下载慢
-  electron-builder打包报错
  

#### electron 依赖下载慢

在 .npmrc 文件中添加\修改下载源

```
registry=https://registry.npmmirror.com/
electron_mirror=https://npmmirror.com/mirrors/electron/
electron_builder_binaries=http://npmmirror.com/mirrors/electron-builder-binaries/
disturl=https://npmmirror.com/mirrors/node
```

#### electron-builder打包报错

  1. 从[electron builder](https://github.com/electron-userland/electron-builder-binaries/releases?q=&expanded=true)仓库手动下载必须的三个包（winCodeSign 2.6.0，nsis-resource 3.4.1.7，nsis 3.0.4.1）
  2. 解压三个文件放Electron-builder缓存中
  放到电脑的C:\Users\当前用户\AppData\Local\electron-builder\Cache文件夹中
  例如 AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0



  
#### 打包完整配置项

[文档地址](https://www.electron.build/configuration)

```js 
{
  "build": {
    "productName":"Electron_Test",
    "appId": "xxxx",
    "copyright":"xxxx",
    "directories": { 
      "output": "build"
    }, 
    "nsis": {
      "oneClick": false,
      "allowElevation": true, 
      "allowToChangeInstallationDirectory": true, 
      "installerIcon": "./build/icons/aaa.ico",
      "uninstallerIcon": "./build/icons/aaa.ico",
      "installerHeaderIcon": "./build/icons/aaa.ico", 
      "createDesktopShortcut": true, 
      "createStartMenuShortcut": true,
      "shortcutName": "xxxx"
    },
    "publish": [
      {
        "provider": "generic", 
        "url": "http://xxxxx/"
      }
    ],
    "files": [
      "./main.js",
      "./dist/**",
      "./package.json",
      "./preload.js"
    ],
    "win": {
      "icon": "build/icons/aaa.ico",
      "target": [
        {
          "target": "nsis",
          "arch": [
            "ia32"
          ]
        }
      ]
    }
  }
}
