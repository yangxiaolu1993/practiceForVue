// 创建模板

const inquirer = require('inquirer');

const path = require('path');
const fs = require('fs');
// const config = require('../src/config');
const demoModel = require('./template');
// const nav = config.nav;


var newCpt = {
  version: '1.0.0',
  name: '',
  type: '',
  cName: '',
  desc: '',
  sort: '',
  show: true,
  author: ''
};
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'LeetCode 题号(遵循格式 code+题号，如 code20)：',
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
      // answers.sort = String(sorts.indexOf(answers.sort));
      newCpt = Object.assign(newCpt, answers);
      createNew();
    });
}
function createIndexJs() {
  const nameLc = newCpt.name.toLowerCase();
  const destPath = path.join('src/view/leetcode' + nameLc);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }

  return new Promise((resolve, reject) => {
    resolve(`生成index.js文件成功`);
  });
}

function createVue() {
  return new Promise((resolve, reject) => {
    const nameLc = newCpt.name.toLowerCase();
    let content = demoModel(nameLc).vue;
    const dirPath = path.join(__dirname, `../src/view/leetcode/${nameLc}/`);
    const filePath = path.join(dirPath, `index.vue`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, content, err => {
      if (err) throw err;
      resolve(`生成${newCpt.name}.vue文件成功`);
    });
  });
}


function addToPackageJson() {
  return new Promise((resolve, reject) => {
    let sort = newCpt.sort;
    newCpt.sort = nav[sort - 1].packages.length + 1;
    nav[sort - 1].packages.push(newCpt);
    config.nav = nav;
    // conf.packages.push(newCpt);
    const dirPath = path.join(__dirname, `../`);
    const filePath = path.join(dirPath, `src/config.js`);

    var tempfile = 'module.exports = ' + JSON.stringify(config, null, 2) + ';';
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
