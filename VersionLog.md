# `0.0.14`
- `Input` 删除API`type`
- `Input` 添加默认`placeholder`为`'请输入……'`
- `Calendar` 支持API`className`
- `DatePicker` 悬浮框超越区域限制
- `DatePciker`组件的API`onChange` 触发逻辑调整
    - 点击面板选择日期修改日期，失去焦点后触发`onChange`
    - 输入框输入或清空日期，失去焦点后触发`onChange`
    - 无论是通过面板还是输入框改变日期，如果和改变前相同，则不触发`onChange`
- `DatePicker`添加新的API`clear`，清空功能调整为默认不开启
- `DatePicker`新增API`className`、`style`、`placeholder`
- `Table`新增API`className`、`style`
- `Modal.visible`默认改为`false`
- `Message`组件修复`duration`影响全局的问题
- `Message`组件的API`duraiont`改为`option.duration`
- `Dropdown`组件`onChange`回调参数由`(e,o,v)`改为`(v,o)`
- `Dropdown`输入框背景样式调整
- `Dropdown`新增API`className`、`style`、`clear`
- `Dropdown`css类名`search`调整为`search-input`
- `Dropdown`修复搜索后再次打开下拉框选项没有还原的问题
- `Dropdown`默认不开启`search`功能
- `Dropdown`必须开启`search`才能通过输入框输入
- `Radio`新增API`className`、`style`、`defaultChecked`、`checked`、`disabled`
- `RadioGroup`新增API`className`、`style`、`disabled`
- `Radio`支持独立使用
- `Radio`的`display`从`flex`改为`inline-flex`
- `Dropdown`组件改为`Select`组件
- `Checkbox`新增API`className`、`style`、`defaultChecked`、`checked`、`disabled`、`indeterminate`
- `CheckboxGroup`新增API`className`、`style`、`values`、`options`
- `Checkbox`支持独立使用
- `Input`添加`hover`时的`border`变化
- `Input`、`Select`添加过渡动画

# `0.0.13`
- `Popup` 去除多余打印

# `0.0.12`
- `List.js` build异常，临时使用`List.js`替代

# `0.0.11`
- `Dropdown`组件新增下拉动画
- 新增`Table`组件
- 新增`Radio`组件
- `message`样式调整：去除默认宽度，改由内容撑开
- `message`API调整：`message.show(option,destroyTime)`=>`message.show(option,duration)`
- 修复`message`bug：`duration`设置可以影响到css动画
- 调整`Button`组件同时设置`primary`和`disabled`时，边框线颜色由`#1890ff`[蓝]改为`#D8DAE2`[银]
- `Dropdown`组件悬浮框超越区域限制
- 新增`Tooltip`组件

# `0.0.10`
- 新增`Dropdown`组件
- `Button`新增`danger`样式
- `Messager`样式调整：调整阴影、`padding`
