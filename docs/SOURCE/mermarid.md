推荐一个好用的流程图绘制工具（语言），mermaid（美人鱼）

### 特点
* 语法简洁，一个逻辑一条语句，形如 `A --> B`就可表示逻辑A到逻辑B
* markdown支持，无需安装，非常方便
* 支持自定义style，灵活运用

### 示例
```mermaid
graph TD
  登录 --> 验证
  验证 --> {验证是否通过}
  验证是否通过 -->|通过| 愉快的玩耍
  愉快的玩耍 -.-> 偷能量
  愉快的玩耍 --> 收能量
  收能量 --> ["fa:fa-twitter 获得勋章"]
  验证是否通过 -->|不通过| id1[找回密码]
  style id1 fill:#f9f,stroke:#e2e2e2,stroke-width:1px
```

### 相关资料
[官方API](https://mermaidjs.github.io/mermaidAPI.html)

### 其他
有一个flowChart.js也可以用在markdown中绘制流程图，非常方便。