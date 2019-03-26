# wxParse
微信小程序富文本解析组件

> 公司做小程序需要在小程序中渲染html，采用了wxParse库，但是在使用过程中，发现这个库可能不是那么完善，还有一些问题，访问github仓库发现代码已经很久没有维护了。
> 接下来可能会修复一些已经发现的问题，这里共享一下修改后的代码，以方便有需要的人。

## 关于组件
- 本项目使用[icindy/wxParse](https://github.com/icindy/wxParse)代码二次开发。
- 欢迎issue，欢迎pr。
- 组件使用了lifetimes属性，请确保基础库版本`>=`2.2.3。如果需要支持`2.2.3`以下版本，将生命周期函数复制到Component构造器的第一级参数中即可。

## 使用方式
### 1. npm
```shell
npm install wechat-wxparse --save
```

### 2. 在需要使用组件的配置文件上添加组件
```json
{
  "usingComponents": {
    "wxparse": "/path/to/wxparse/wxparse"
  }
}
```

### 3. 在页面wxml中
```html
<wxparse data="{{ html }}" type="html" padding="5"></wxparse>
```
属性说明：
- data： 要渲染到页面的数据
- type： 要渲染数据的类型（html或者md）
- padding: 渲染后的图片内距

### 4. 关于代码高亮
- 代码高亮使用highlight.js
- 对于其他语言的支持，请直接到[这里](https://github.com/highlightjs/highlight.js/blob/master/src/languages)查看所有支持的语言
- 其他的皮肤主题，请到[这里](https://github.com/highlightjs/highlight.js/blob/master/src/styles)查看所有的主题。
- 添加支持的语言需要在语言在function关键字前加入`export default`
- 需要在src/highlight/hljs中注册语言
- 主题文件需要在wxparse.wxss中引入

## 小程序示例
> 微信小程序更新会慢于组件更新，主要在于微信小程序的审核时间。更新状态请以更新日志为准。
![微信小程序](./wechat-program.jpg)

## 待修复问题
- 整理代码高亮代码,减少代码体积
- 删除组件中调用的微信api，改为传入参数
- 表格解析有误的问题
- 后端html转json插件

## 更新日志
- 2019-03-26
    - 修复代码块空格显示错乱的问题
    - 重新提交插件代码（审核未通过，服务类目选择错误--，）
- 2019-03-25
    - 添加小程序插件代码
    - 添加实例小程序代码
- 2019-03-23
    - 完善代码高亮
- 2019-03-22
    - 添加基本的代码高亮
- 2019-03-20
    - 整理代码结构
- 2019-03-19
    - 优化代码块的处理
    - 优化列表处理
    - 优化样式
- 2019-03-18
    - 修改为使用组件方式调用
    - 点击链接复制链接地址
    - 添加渲染完成事件(bindrendered)
    - 使组件根据数据更新而重新渲染dom
- 2019-03-14
    - 修改代码块的默认展示
    - 修改代码目录
