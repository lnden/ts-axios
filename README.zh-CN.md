# 基于 TypeScript从 零重构 axios

## 初始化ts项目
使用 `typescript-library-starter` 脚手架搭建工具
```shell script
git clone https://github.com/alexjoverm/typescript-library-starter.git YOURFOLDERNAME
cd YOURFOLDERNAME

# Run npm install and write your library name when asked. That's all!
npm install
```
连接 github 远程版本库并且提交代码
```shell script
git remote -v
git remote add origin https://github.com/USERNAME/ts-axios.git
git status
git add .
npm run commit 
  1. select the type of change that you're committing?
  2. what is the scope of this change (e.g. component or file name)? all the file
  3. write a short , imperative rense description of the change ? init project
  4. provide a longer description of the change:（press enter to skip）? init project by typescript library starter
  5. Are there any breaking changes? (y/N) No
  6. Does this change affect any open issues? (y/N) No
git push origin master
```

## 创建 examples 目录
1. 编写 `webpack.config.js` 打包多入口文件
2. 编写 `node server` 前端服务并且添加前端路由


## Axios文档

```shell script
git clone https://github.com/lnden/ts-axios.git && cd docs

yarn install || npm install

yarn dev || npm run dev
```
