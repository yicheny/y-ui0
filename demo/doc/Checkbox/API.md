## `Check`
属性|类型|说明|默认值
---|---|---|---
`className` | string | 类名 | -
`style` | object | 样式 | -
`children` | string / element | 内容 | -
`onChange` | function | `Bool -> void` 选项改变时触发 |  -
`value` | any | 值 | -
`checked` | boolean | 设置当前选中 | -
`dafultChecked` | boolean | 设置初始选中 | -
`disabled` | boolean | 是否禁用 | -
`indeterminate` | boolean | 不定状态 | false

## `CheckGruop`
属性|类型|说明|默认值
---|---|---|---
`className` | string | 类名 | -
`style` | object | 样式 | -
`children` | string / element | 内容 | -
`dafaultValues` | array | 初始值 | `[]`
`values` | array | 实时选项 | -
`onChange` | function | `array -> void` 选项改变时触发 | -
`disabled` | boolean | 全部禁用 | false
`options` | array | 通过数据配置，详见下 | -

# `options`
属性|类型|说明|默认值
---|---|---|---
`label` | string / element | 内容（文字） | -
`className` | string | 类名 | -
`style` | object | 样式 | -
`onChange` | function | `Bool -> void` 选项改变时触发 |  -
`value` | any | 值 | -
`checked` | boolean | 设置当前选中 | -
`dafultChecked` | boolean | 设置初始选中 | -
`disabled` | boolean | 是否禁用 | -
`indeterminate` | boolean | 不定状态 | false
