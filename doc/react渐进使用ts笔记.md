[TOC]

# 添加`TypeScript`
## 新项目
要使用 TypeScript 启动新的 Create React App 项目，你可以运行：
```
$ npx create-react-app my-app --typescript
或者
$ yarn create react-app my-app --typescript
```

## 就项目使用
```
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
或者
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

# 踩坑记录
## 引入`react`
- 原来：`import React from 'react'`
- tsx：`import * as React from 'react'`
