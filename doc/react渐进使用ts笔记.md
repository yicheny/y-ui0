[TOC]

# 添加`TypeScript`
## 新项目
要使用 TypeScript 启动新的 Create React App 项目，你可以运行：
```
$ npx create-react-app my-app --typescript
或者
$ yarn create react-app my-app --typescript
```

## 已有项目使用
### 安装`ts`和`ts-loader`
```
npm install typescript
npm install ts-loader
```

### 配置`webpack`
```js
rules:[
    {
        test: /\.(ts|tsx)?$/,
        use: [
            {
                loader: 'ts-loader'
            }
        ]
    }
]
```

### 配置`tsconfig.json`
```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noImplicitAny": false,
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "target": "es5",
    "jsx": "react"
  },
  "include": ["./src/**/*.ts", "./src/**/*.tsx"]
}
```

# 踩坑记录
## 引入`react`
- 原来：`import React from 'react'`
- tsx：`import * as React from 'react'`
