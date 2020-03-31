export const Menu_option = {
    details: [
        {text: 'A'},
        {
            text: 'B',
            expanded: true,
            children: [
                {text: 'B-1'},
                {text: 'B-2'},
                {
                    text: 'B-3',
                    expanded: true,
                    children:[
                        {text:'B-3-1'},
                        {
                            text:'B-3-2',
                            expanded: true,
                            children:[
                                {text:'B-3-2-1'},
                                {text:'B-3-2-2'},
                            ]
                        },
                        {text:'B-3-3'},
                    ]
                },
            ]
        },
        {
            text: 'C',
            children: [
                {text: 'C-1'},
                {
                    text: 'C-2',
                    children: [
                        {text: 'C-2-1'},
                        {text: 'C-2-2'}
                    ]
                }
            ]
        },
        {
            text: 'D',
            expanded: true,
            children: [
                {text: 'D-1'},
                {text: 'D-2'},
                {
                    text: 'D-3',
                    // expanded: true,
                    children:[
                        {text:'D-3-1'},
                        {
                            text:'D-3-2',
                            // expanded: true,
                            children:[
                                {text:'D-3-2-1'},
                                {text:'D-3-2-2'},
                            ]
                        },
                        {text:'D-3-3'},
                    ]
                },
            ]
        },
    ]
};