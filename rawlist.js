const inquirer = require("inquirer")

const inquirerList=[
    {
        type:"rawlist",
        name:"lanage",
        message:"请选择一种编程语言",
        choices:[
            "java",
            "node",
            "php"
        ]
    }
]

inquirer.prompt(inquirerList).then(res=>{
    console.log(res);
})