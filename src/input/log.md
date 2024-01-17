## 2024/01/15

- 定义变量代码行之间留一行，保持代码布局整洁美观
- 涉及到原生属性直接传递给原生 input ,和自定义功能接口区分开
- input 的 onchange 事件参数和返回参数需要完善
- 需要考虑输入框的前缀，后缀功能
- type 为 password 时，需要定制输入框的眼镜图标，控制密码显隐
- 需要添加 onEnter 事件
- 禁用样式
- 无边框

## 2024/01/17

- 样式可以参考 Antd Input 组件，功能也向这个靠拢 [https://ant-design.antgroup.com/components/input-cn]
- 组件库非必要不要导入第三方的依赖，比如 @ant-design/icons，有需要使用的 icon 资源可以在 iconfont 上下载 svg 到本地使用 [https://www.iconfont.cn/?spm=a313x.search_index.i3.d4d0a486a.1b123a81W7hu0S]
- className 这个属性一般放在组件的最外层，作为用户自定义添加的额外属性
- 需要注意样式细节，间隔，圆角，聚焦，失焦，禁用样式等
- src/styles 中存放的全局样式文件是组件通用的样式，可以复用
- 没有思路的时候可以多参考流行的组件库，他们的功能，他们是怎么实现的，目的不是实现功能，而是学习之前不会的细节和知识点
- clasnames 约定以 c 导入使用
