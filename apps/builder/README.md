# 🔥 my-vbuilder - Builder 应用

可视化编辑器应用，是低代码平台的核心编辑模块

## 📁 目录结构

```
apps/builder/
├── src/
│   ├── assets/              # 静态资源
│   ├── blocks/              # 可视化组件
│   │   ├── basic/           # 基础组件
│   │   └── external/        # 外部组件
│   ├── components/          # 通用组件
│   │   ├── AppEditorRenderer/   # 编辑器渲染器
│   │   ├── AppLeftPanel/       # 左侧面板
│   │   ├── AppRightPanel/      # 右侧面板
│   │   ├── ChartRenderer/       # 图表渲染器
│   │   ├── DataSourceContent/   # 数据源内容
│   │   ├── FlowEditor/          # 工作流编辑器
│   │   ├── NotesEditor/         # 富文本编辑器
│   │   └── SmoothDnd/           # 拖拽组件
│   ├── constants/           # 常量
│   ├── hooks/               # 自定义 Hooks
│   ├── mocks/               # 模拟数据
│   ├── router/              # 路由配置
│   ├── stores/              # Pinia 状态管理
│   ├── types/               # TypeScript 类型
│   ├── ui/                  # UI 组件
│   ├── utils/               # 工具函数
│   ├── views/               # 页面视图
│   ├── App.vue              # 根组件
│   └── main.ts              # 入口文件
├── index.html
├── vite.config.ts
└── package.json
```
