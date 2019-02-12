# 基于koa的后台服务模板

旨在使用 koa, ts实现API接口、管理界面

## vscode 调试

1. 开启 tsc 的编译（监测文件变化）

``` bash
yarn build:watch
```

2. 打开 vscode debug

> 注：已经将 .vscode 配置文件夹加入 git ，所以无需再次配置

直接在 debug 界面开启名为 **start debug** 的调试配置

## 数据库使用

使用 Github 上星星较多的 sequelize。默认和 sequelize-cli 搭配还是挺不错的，奈何项目需要尽可能的使用 ts ，所以找了一个 sequelize-typescript 的替代方案。



## todo

- [ ] 后台管理界面
- [x] 数据库引擎