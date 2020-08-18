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
## 1. `Icon`：图标
- 声明:此组件图标均来自阿里巴巴iconfont库，自定义图标见`SvgIcon`组件【后期可能会统一】
- API:
    - [x] `name`{string}设置对应图标，可以使用的图标名称见：[workIdea图标库](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=1256398&keyword=&project_type=&page=)
    - [x] `size`{number}设置图标大小     

## 2. `Menu`：菜单
- API：
    - `option`{object}:用于设置菜单配置
        - `details`{array}：设置菜单展示内容
            - [x] `text`{string}:菜单项文字
            - [x] `children`{array}:子菜单
            - [x] `expanded`{boolean}:初始是否展开
            - [x] `to`{string}:路由地址
- 特性：
    - [x] 点击带有箭头图标的菜单，可以展开或缩放，附带动画效果
    - [x] 滑过显示背景色
    - [x] 不同层级设置相应`paddingLeft`以区分
    - [x] 根据当前路由自动高亮对应菜单【依据`to`属性】
    - [x] 菜单展开时，当前菜单项高亮显示；菜单收缩时，包含当前菜单的父菜单项高亮
    
## 3. `Button`：按钮
- API:
    - [x] 默认模式【不进行任何设置】
    - [x] `primary`{boolean}：主要按钮
    - [x] `cancel`{boolean}：取消按钮
    - [x] `text`{boolean}：文字按钮
    - [x] `disabled`{boolean}：禁用按钮
    
## 4. `Input`：输入框
- 未特殊说明，即表示原生`input`原生的属性可以被使用
- 自定义API：
    - [X] `onPressEnter`{function}：按下回车触发，回调参数为`e.target.value`
- 原生API变动：
    - [X] `onChange`{function}：回调参数为`e.target.value`
    - [X] `onBlur`{function}：回调参数为`e.target.value`
    
## 5. `Card`：内容卡片【或许叫做内容盒子更合适一些】
- API：
    - [X] `title`{string} 标题       
    - [x] `contentStyle`{object} 内容区域样式
        
## 6. `SvgIcon`: 自制图标【非文字】
- API:
    - [x] `name`{string}：设置对应图标
    - [x] `size`{number}：图标大小
    - [x] `rotate`{number || string}：旋转角度
    - [x] `color`{string}：图标颜色
    
## 7. `DatePciker`：时间选择器
- API:
    - [x] `value`{Date} 初始日期
    - [x] `onChange`{function} 
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
    
## 8. `List`：列表
- API
    - [x] `header`{string || element} : 标题
    - [x] `footer`{string || element} : 腿部信息
    - [x] `data`{array},设置列表内容，形如：
    ```
    [
        {title:'第x行标题',text:'第x行信息'}
    ]
    ```
  
## 9. `Modal`：对话框
- API
    - [x] `visible`{boolean} 控制对话框显隐
    - [x] `move`{boolean} 是否可移动【默认false】
    - [x] `header`{string || element} 标题
    - [x] `children`{string || element} 内容
    - [x] `footerVisible`{boolean} 控制底部显隐
    - [x] `confirmVisible`{boolean} 控制确认按钮显隐
    - [x] `cancelVisible`{boolean} 控制取消按钮显隐
    - [X] `confirmText`{boolean} 自定义确认按钮文字
    - [x] `cancelText`{boolean} 自定义取消按钮文字
    - [x] `confirm`{function} 确认按钮回调
    - [x] `cancel`{function} 取消及退出按钮回调
    - [x] `className`{string} css类名
    - [x] `style`{object} 样式
- 后续更新内容
    - [ ] 动画效果
    
## 10. `Message`：全局提示
- 使用范例
    - `message.show({info:'提示信息',icon:'info'},3000)`
- API
    - [x] `message.show(option,duration)`
        - `option`
            - `info` {string} 提示信息
            - `icon` {`'info'` | `'success'` | `'warn'` | `'error'`}
        - `duration` {number} 自动关闭的延时 默认`3500ms`
- 后续更新内容
    - [ ] 过渡动画效果调整
    - [ ] 信息溢出内容区的样式问题
    - [ ] `duration`影响全局的问题
    
## 11. `Select`：下拉选择器
- API
    - [x] `options` {array} 下拉选项 <br/>
           示例:`[{text:'显示内容',value:'绑定值'}]`
    - [x] `defaultValue` {number | string} 默认值
    - [x] `onChange` {function} 仅点击选择时触发
    - [x] `search` {boolean} 是否开启模糊筛选
    - [x] `disabled` {boolean} 是否禁止选择
    - [x] `placeholder` {string} 占位符
    
## 12. `Table`：表格
- API
    - `columns`
        - [x] `header` {string}
        - [x] `bind` {string}
        - [x] `width` {number} 默认值`100`
        - [x] `align` {`'left'` | `'center'` | `'right'`} 默认值`'left'`
        
## 13. `Radio`：单选框
- `RadioGruop`
    - [x] `defaultValue` {string | number} 初始值
    - [x] `onChange` {function} 仅点击单选框时触发
        - 参数：`value` {string | number} 当前选择单选框的`value`
- `Radio`
    - [x] `children` {element | string}
    - [x] `value` {string | number}
    
## 14.`Checkbox`：单选框
- `CheckboxGruop`
   - [x] `defaultValues` {array}
   - [x] `onChange` {function} 仅点击多选框时触发
        - 参数：`values` {array} 当前选择的多选框的`value`值组成的数组
- `Checkbox`
   - [x] `children` {element | string}
   - [x] `value` {string | number}
   
## 15. `Tooltip`：文字提示
- API
    - [x] `arrow` {boolean} 是否显示箭头 默认`true`
    - [x] `placement` { `'top'` | `'right'` | `'bottom'` | `'left'` } 放置方向 默认`'top'`
    - [x] `tilte` {string || element} 悬浮显示内容 默认`null`
    - [x] `children` {string || element}
