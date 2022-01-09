const inquirer=require("inquirer")

const promptList=[
    {
        type:"checkbox",
        name:"color",
        message:"请选择颜色",
        choices:[
            {
                name:"red"
            },
            new inquirer.Separator(), // 添加分隔符
            {
                name:"blue"
            },
            new inquirer.Separator(),
            {
                name:"orange"
            }
        ]
    }
]

// 或者下面这样
const promptList1 = [{
    type: "checkbox",
    message: "选择颜色:",
    name: "color",
    choices: [
        "red",
        "blue",
        "orange"
    ],
    pageSize: 3 // 设置行数
}];
inquirer.prompt(promptList).then(res=>{
    console.log(res);
})