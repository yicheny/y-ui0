## `props`
属性|类型|说明|默认值
---|---|---|---
`className` | string | 类名 | -
`style` | object | 样式 | - 
`defaultActive` | number | 初始化选中面板的`key` | 0
`active` | number | 当前激活的Tab对应的`key` | 0
`onChange` | function | `(i)=>void` i为点击选项卡的`key` | -

## `TabItem`
属性|类型|说明|默认值
---|---|---|---
`header` | string / element | 选项卡头对应内容 | -
`children` | string / element | 选项卡容器对应内容 | -
