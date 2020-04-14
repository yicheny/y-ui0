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
    - 声明:此组件图标均来自阿里巴巴iconfont库，自定义图标见`SvgIcon`组件【后期可能会统一】
    - API:
        - [x] `name`{String}设置对应图标，可以使用的图标名称见：[workIdea图标库](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=1256398&keyword=&project_type=&page=)
        - [x] `size`{Number}设置图标大小     
2. `Menu`：菜单
    - API：
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
        - [x] 根据当前路由自动高亮对应菜单【依据`to`属性】
        - [x] 菜单展开时，当前菜单项高亮显示；菜单收缩时，包含当前菜单的父菜单项高亮
3. `Button`：按钮
    - API:
        - [x] 默认模式【不进行任何设置】
        - [x] `primary`{Boolean}：主要按钮
        - [x] `cancel`{Boolean}：取消按钮
        - [x] `text`{Boolean}：文字按钮
        - [x] `disabled`{Boolean}：禁用按钮
4. `Input`：输入框
    - 未特殊说明，即表示原生`input`原生的属性可以被使用
    - 自定义API：
        - [X] `onEnter`{Function}：按下回车触发，回调参数为`e.target.value`
    - 原生API变动：
        - [X] `onChange`{Function}：回调参数为`e.target.value`
        - [X] `onBlur`{Function}：回调参数为`e.target.value`
5. `Card`：内容卡片【或许叫做内容盒子更合适一些】
    - API：
        - [X] `title`{String} 标题       
        - [x] `contentStyle`{Object} 内容区域样式
6. `SvgIcon`: 自制图标【非文字】
    - API:
        - [x] `name`{String}：设置对应图标
        - [x] `size`{Number}：图标大小
        - [x] `rotate`{Number || String}：旋转角度
        - [x] `color`{String}：图标颜色
7. `DatePciker`：时间选择器
    - API:
        - [x] `value`{Date} 初始日期
        - [x] `onChange`{Function} 
            1. 通过面板点击选择时触发
            2. 输入框失去焦点时触发
    - 特性:
        - [x] 可通过输入框设置日期-输入会实时改变日历面板显示
            1. 日期格式不正常【YY-MM-DD】，选择日期不变
            2. 日期格式正常，为无效日期时【例如2021-2-30】，选择日期不变
            3. 日期格式正常，且为有效日期时，选择日期改变-日历面板同步变化
        - [x] 可通过日历面板设置日期【改变选择日期-选择后面板消失】
            1. 点选对应日期，进行设置
            2. 点选`今天`，设置日期为今天
        - [x] 可通过日历面板改变日期显示【不改变选择日期】
            1. 点选`<`，显示上一个月
            2. 点选`<<`，显示上一年
            3. 点选`>`，显示下一个月
            4. 点选`>>`，显示下一年
        - [x] 日历显示模式
            1. 默认隐藏
            2. 日期输入框获取焦点时显示(有动画效果)
            3. 日期选择后日历隐藏(有动画效果)
            4. 日期输入框和日历之外的区域进行点击时日历消失
        - [x] clear-清空日期
            1. 未选择日期时，默认显示`calendar`图标，此时点击无效（`pointer-event:none`）
            2. 选择日期后，鼠标滑过输入框显示`X`图标
            3. 鼠标滑过`X`图标，`X`图标颜色变浅，点击`X`图标日期清空，日历面板消失
            4. 图标显示有动画过度效果
    - 后续更新内容：
        - [ ] 日历超越区域限制
8. `Table`：表格
