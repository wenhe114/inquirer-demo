const inquirer = require("inquirer")

const promptList = [
    {
        name:"pwd",
        message:"请输入密码",
        type:"password"
    }
]

inquirer.prompt(promptList).then(res => {
   console.log(res);
})