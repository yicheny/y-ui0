可以通过`options`进行配置项设置

### 示例

<!--start-code-->

```jsx
const options = [
    {label:'A',value:1,disabled:true},
    {label:'B',value:2,disabled:true},
    {label:'C',value:3,indeterminate:true},
    {label:'D',value:4,indeterminate:true,disabled: true},
    {label:'E',value:5},
];

function Demo(){
    return <div>
        <CheckboxGroup options={options} defaultValues={[2]} onChange={console.log}/>
    </div>
}

ReactDOM.render(<Demo/>);
```

<!--end-code-->
