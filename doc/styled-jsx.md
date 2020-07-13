[TOC]

# 初始
## 安装
`npm install --save-dev styled-jsx`

## 配置`.babel`(我这里是nwb.config.js)
```
babel:{
    "plugins": [
      "styled-jsx/babel"
    ]
}
```

## 使用
到这里可以初步使用`styled`了,用法示例：
```jsx
<style jsx>{`
    .list{
        color:#fff;
    }
`}</style>
```

## 问题
我平时`css`样式习惯用`sass`写，`styled`本身不支持，需要另外装插件。

# `styled-jsx-plugin-sass`
## 安装&配置
具体方式见：[styled-jsx-plugin-sass](https://github.com/giuseppeg/styled-jsx-plugin-sass)

## 使用
搞定之后可以这么使用
```jsx
<style jsx>{`
    .list{
        color:#fff;
        span:{
            color:red;
        }
    }
`}</style>
```

## 问题
对于原生js问题不大，如果使用自定义组件，就会出问题，比如我使用了一个类名为`icon-font`的自定义组件`Icon`那么按照一般的sass写法也是无效的。

解决方案如下：
```
<style jsx>{`
    .list{
        color:#fff;
        :global(.icon-font):{
            color:red;
        }
    }
`}</style>
```

然而新的问题诞生了，如果有这种css样式
```scss
.list{
    .icon-font{
       &.success{
          color:green;
       } 
       &.error{
          color:red;  
       }
    }
}
```
目前我没有找的好的方案。不过可以分开使用`:global`进行设定，或者这部分样式在`scss`文件中去写
