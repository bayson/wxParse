# ianzhi/wxParse
文档放在这里太长了，安装和使用方法到这里查看吧。
最近有点小忙，回到家里实在不想写代码😄，发现的问题尽管放在issue里，大概下周会集中处理发现的问题~
[文档地址](https://www.dnote.cn/users/ianzhi/posts/wxParsewendang)

## 可用属性
属性说明：
- data： 要渲染到页面的数据
- type： 要渲染数据的类型（html或者md）
- padding: 渲染后的图片内距
- url-prefix: 渲染图片时的固定url前缀
- emoji: 布尔类型,是否启用emoji替换
- default-img: 图片加载失败时默认占位图

## 小程序示例
> 微信小程序更新会慢于组件更新，主要在于微信小程序的审核时间。更新状态请以更新日志为准。
![微信小程序](./wechat-program.jpg)

## 待修复问题

## 更新日志
- 2019-06-13
    - 修改了代码块展示的一些问题
- 2019-06-11
    - issue #14 图片加载失败时，设置默认占位图
- 2019-05-25
    - 修复issue #13，wxss中使用了插件禁止使用的选择器问题
- 2019-05-18
    - 需要插件emoji的小伙伴，不好意思哈，插件提交一直不通过😥，通过我会尽快发布的~
- 2019-05-17
    - issue #11 添加id属性的问题
    - issue #12 插件不支持表情的问题
- 2019-04-04
    - 放弃对于issue#6的修改（避免由此带来的issue#7问题，并且我发现那段代码放在浏览器都没有办法解析，我还是不折腾了😂）
    - 添加对于ruby,rt标签的简单支持`<ruby>拼音<rt>pinyin</rt></ruby>`将展示为`拼音(pinyin)`
- 2019-04-02
    - ~~修复行内样式的问题（issue#6）(插件1.0.4版本)~~
- 2019-04-01
    - 添加渲染图片的固定前缀属性(插件1.0.3版本)
    - 最近换电脑来着，开心的装开发环境😋，没怎么更新，不会断更，有问题尽管提，虽然修复就不知道什么时间了~~哈哈哈
- 2019-03-26
    - 修复代码块空格显示错乱的问题(插件1.0.2版本)
    - 重新提交插件代码（审核未通过，服务类目选择错误--，）（插件1.0.1版本）
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
