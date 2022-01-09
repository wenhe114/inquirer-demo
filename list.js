const inquirer = require("inquirer")

const promptList = [
    {
        type:"list",
        message:"请选择一种技术",
        name:"technology",
        choices:[
            "Javascript",
            "Html",
            "Css"
        ],
        filter: function (val) { // 使用filter将回答变为小写
            return val.toLowerCase();
        }
    }
]

inquirer.prompt(promptList).then((res) => {
    console.log(res);
})