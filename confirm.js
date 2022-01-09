const inquirer =require("inquirer")

const inquirerList=[
    {
        type:"confirm",
        message:"是否使用监听？",
        name:"watch",
        prefix:"前缀"
    },
    {
        type:"confirm",
        message:"是否进行文件过滤？",
        suffix:"是",
        name: "filter",
        when:function(answers){
            // 当watch为true的时候才会提问当前问题
            return answers.watch
        }
    }
]

inquirer.prompt(inquirerList).then((res)=>{
    console.log(res);
})