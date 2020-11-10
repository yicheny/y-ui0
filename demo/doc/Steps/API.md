## `Steps.props`
属性|类型|说明|默认值
---|---|---|---
`className` | string | 类名 | -
`style` | object | 样式 | - 
`children` | string / element | 内容 | -
`direction` | string | `'horizontal'` / `"vertical"` | `'horizontal'`
`current` | number | 当前进行的步骤 | `0`
`onChange` | `(current) => void` | 点击切换步骤时触发 | -

## `Step.props`
属性|类型|说明|默认值
---|---|---|---
`className` | string | 类名 | -
`style` | object | 样式 | - 
`title` | string | 标题 | `null`
`description` | string | 描述 | `null`
`status` | `'wait'` / `'active'`/`'finish'` | 指定状态。当不配置该属性时，会使用`Steps`的`current`来自动指定状态。 | -
