const inquirer=require("inquirer")

const promptList=[
    {
        name:"language",
        type:"expand",
        message:"请选择编程语言",
        choices:[
            {
                key:'j',
                name:"Java",
                value:"java"
            },
            {
                key:'n',
                name:"Node",
                value:"node"
            },
            {
                key:'c',
                name:"Css",
                value:"css"
            }
        ]
    }
]

inquirer.prompt(promptList).then(res=>{
    console.log(res);
})