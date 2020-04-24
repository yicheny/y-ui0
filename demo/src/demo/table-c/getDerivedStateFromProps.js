//公用数据
const AUTO_VIRTUAL_THRESHOLD = 80;

//核心函数
export function getDerivedStateFromProps(props){
    const { useVirtual: useVirtualProp, columns: columnsProp, dataSource: dataSourceProp, defaultColumnWidth } = props;

    const columns = processColumns(columnsProp, defaultColumnWidth);

    const leftNestedLockCount = getLeftNestedLockCount(columns);

    const mainFlat = collectNodes(columns, 'leaf-only');

    if (leftNestedLockCount === columns.length) {
        return {
            flat: { left: [], right: [], main: mainFlat, center: mainFlat },
            nested: { left: [], right: [], main: columns, center: columns },
            useVirtual: { horizontal: false, vertical: false, header: false },
        }
    }

    const leftNested = columns.slice(0, leftNestedLockCount);
    const rightNestedLockCount = getLeftNestedLockCount(columns.slice().reverse());
    const centerNested = columns.slice(leftNestedLockCount, columns.length - rightNestedLockCount);
    const rightNested = columns.slice(columns.length - rightNestedLockCount);

    const shouldEnableHozVirtual = mainFlat.length > AUTO_VIRTUAL_THRESHOLD && mainFlat.every((col) => col.width != null);
    const shouldEnableVerVirtual = dataSourceProp.length >= AUTO_VIRTUAL_THRESHOLD;

    const useVirtual =
        typeof useVirtualProp !== 'object'
            ? {
                horizontal: resolveVirtualEnabled(useVirtualProp, shouldEnableHozVirtual),
                vertical: resolveVirtualEnabled(useVirtualProp, shouldEnableVerVirtual),
                header: resolveVirtualEnabled(useVirtualProp, false),
            }
            : {
                horizontal: resolveVirtualEnabled(useVirtualProp.horizontal, shouldEnableHozVirtual),
                vertical: resolveVirtualEnabled(useVirtualProp.vertical, shouldEnableVerVirtual),
                header: resolveVirtualEnabled(useVirtualProp.header, shouldEnableVerVirtual),
            };

    return {
        flat: {
            left: collectNodes(leftNested, 'leaf-only'),
            main: mainFlat,
            right: collectNodes(rightNested, 'leaf-only'),
            center: collectNodes(centerNested, 'leaf-only'),
        },
        nested: {
            left: leftNested,
            main: columns,
            right: rightNested,
            center: centerNested,
        },
        useVirtual,
    }
}

function processColumns(columns,defaultColumnWidth) {
    return dfs(columns);

    function dfs(columns) {
        const result = [];

        for(let column of columns){
            if(column.width === null){
                if(defaultColumnWidth !== null){
                    column = {...column,width:defaultColumnWidth};
                }else if(isLeafNode(column) && column.lock){
                    console.warn('锁列需要指定列宽度', column)
                }
            }

            if(isLeafNode(column)){
                if(!column.hidden){
                    result.push(column);
                }
            }else{
                const nextChildren = dfs(column.children);
                if(nextChildren.length>0){
                    result.push({ ...column, children: nextChildren })
                }
            }
        }

        return result;
    }
}

function getLeftNestedLockCount(columns) {
    let nestedCount = 0;
    for (const col of columns) {
        if (isLock(col)) {
            nestedCount += 1
        } else {
            break
        }
    }
    return nestedCount;
    
    function isLock(col) {
        if (isLeafNode(col)) {
            return col.lock
        } else {
            return col.lock || col.children.some(isLock)
        }
    }
}

function resolveVirtualEnabled(virtualEnum, defaultValue) {
    if (virtualEnum == null || virtualEnum === 'auto') {
        return defaultValue
    }
    return virtualEnum
}

//通用函数
function isLeafNode(node) {
    return node.children == null || node.children.length === 0;
}

function collectNodes(nodes,order) {
    const result = [];
    dfs(nodes);
    return result;
    
    function dfs(nodes) {
        for (const node of nodes) {
            if (isLeafNode(node)) {
                result.push(node)
            } else {
                if (order === 'pre') {
                    result.push(node);
                    dfs(node.children)
                } else if (order === 'post') {
                    dfs(node.children);
                    result.push(node)
                } else {
                    dfs(node.children)
                }
            }
        }
    }
}
