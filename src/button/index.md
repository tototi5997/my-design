# Button

<code src="./demo/basic.tsx">按钮类型</code>

<code src="./demo/loading-button.tsx">加载中状态</code>

<code src="./demo/disabled.tsx">禁止点击</code>

### API

| 属性       | 说明                     | 类型                                           | 默认值  | 版本  |
| ---------- | ------------------------ | ---------------------------------------------- | ------- | ----- |
| type       | 按钮类型                 | `primary` \| `single` \| `default` \| `circle` | default |       |
| classNames | 语义化结构 class         | `Record<SemanticDOM, string>`                  | -       | 0.0.0 |
| disabled   | 设置按钮失效状态         | `boolean`                                      | false   |       |
| ghost      | 幽灵属性，使按钮背景透明 | `boolean`                                      | false   |       |
| icon       | 设置按钮的图标组件       | `ReactNode`                                    | -       |       |
| loading    | 设置按钮载入状态         | `boolean` \| `{ delay: number }`               | false   |       |
| styles     | 语义化结构 style         | `Record<SemanticDOM, CSSProperties>`           | -       | 0.0.0 |
| onClick    | 点击按钮时的回调         | `(event: MouseEvent) => void`                  | -       |       |
