// 创建模板
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const demoModel = require('./template');
const LeetCodeList = require('./config')


// {title:'题号 20',desc:'',route:'/code20'},
var newCpt = {
  version: '1.0.0',
  name: '',
  title: '',
  desc: '',
  route:'',
};
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'LeetCode 题号(如 20)：',
      },
      {
        type: 'input',
        name: 'desc',
        message: '描述(五十个字以内)：'
      },
      {
        type: 'input',
        name: 'author',
        message: '组件作者(可署化名):'
      }
    ])
    .then(function(answers) {
      
      newCpt = Object.assign(newCpt, answers);
      newCpt.title = 'code'+answers.name
      newCpt.route = '/code'+answers.name
      createNew();
    });
}
function createIndexJs() {
  const nameLc = newCpt.title.toLowerCase();
  const destPath = path.join('src/view/leetcode/' + nameLc);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }

  return new Promise((resolve, reject) => {
    resolve(`生成index.js文件成功`);
  });
}

function createVue() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.title.toLowerCase();
    let content = demoModel(nameLc).vue;
    const dirPath = path.join(__dirname, `../src/view/leetcode/${nameLc}/`);
    const filePath = path.join(dirPath, `index.vue`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`生成${nameLc}.vue文件成功`);
    });
  });
}


function addToPackageJson() {
  return new Promise((resolve, reject) => {
    // let sort = newCpt.sort;
    // newCpt.sort = nav[sort - 1].packages.length + 1;
    // nav[sort - 1].packages.push(newCpt);
    // config.nav = nav;
    LeetCodeList.push(newCpt);
    const filePath = path.join(__dirname, `./config.js`);

    var tempfile = 'module.exports = ' + JSON.stringify(LeetCodeList, null, 2) + ';';
    fs.writeFile(filePath, tempfile, err => {
      if (err) throw err;
      resolve(`修改config.json文件成功`);
    });
  });
}

function createNew() {
  createIndexJs()
    .then(() => {
        return createVue();
    })
    .then(() => {
      return addToPackageJson();
    })
    .then(() => {
      console.log('组件模板生成完毕，请开始你的表演~');
      process.exit();
    });
}
function createComponent() {
  init();
}
createComponent();
