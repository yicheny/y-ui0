# y-ui0

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

# 声明
此组件库仅为个人使用开发。

# 正在开发的组件
1. `Icon`：图标
    - API:
        - [x] `name`{String}设置对应图标，可以使用的图标名称见：[workIdea图标库](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=1256398&keyword=&project_type=&page=)
        - [x] `size`{Number}设置图标大小     
2. `Menu`：菜单
    - API：
        - `path`{String}:用于设置初始菜单项路径【高亮】
        - `option`{Object}:用于设置菜单配置
            - `details`{Array}：设置菜单展示内容
                - [x] `text`{String}:菜单项文字
                - [x] `children`{Array}:子菜单
                - [x] `expanded`{Boolean}:初始是否展开
                - [x] `to`{String}:路由地址
    - 特性：
        - [x] 点击带有箭头图标的菜单，可以展开或缩放，附带动画效果
        - [x] 滑过显示背景色
        - [x] 不同层级设置相应`paddingLeft`以区分
        - [x] 菜单展开时，当前菜单项高亮显示；菜单收缩时，包含当前菜单的父菜单项高亮