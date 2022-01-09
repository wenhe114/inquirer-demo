const inquirer = require("inquirer")

const promptList = [{
    type: 'input',
    message: '请输入姓名:',
    name: 'name',
    default: "test_user" // 默认值
}, {
    type: 'input',
    message: '请输入邮箱地址:',
    name: 'phone',
    validate: function (val) {
        // 返回true则继续下一步
        if ((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(val)) { // 是否符合条件
            return true;
        }
        return "请检查邮箱地址是否合规"
    }
}];

inquirer.prompt(promptList).then(res => {
    console.log(res);
})