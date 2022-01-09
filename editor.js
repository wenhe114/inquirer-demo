const inquirer=require("inquirer")

const promptList = [{
    type: "editor",
    message: "请输入内容：",
    name: "editor"
}];

inquirer.prompt(promptList).then((res)=>{
    console.log(res);
})