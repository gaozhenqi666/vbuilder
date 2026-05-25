# 🔥 my-vbuilder

基于 Vue3 + Typescript 的可视化低代码平台实战项目，采用 monorepo 架构

## 📦 项目结构

```
.
├── apps/          # 应用程序
│   ├── builder/   # 可视化编辑器应用
│   └── runner/    # 预览运行器应用
├── packages/      # 共享包
│   ├── blocks/    # 组件库
│   └── eslint/    # ESLint 配置
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 🛠️ 技术栈

- **框架**：Vue 3 + TypeScript
- **状态管理**：Pinia
- **路由**：Vue Router
- **构建工具**：Vite
- **任务管理**：Turbo
- **包管理器**：pnpm
- **低代码拖拽**：Smooth DnD
- **数据表格**：Glide Data Grid
- **工作流**：Vue Flow
- **图表**：ECharts

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## ✨ 功能特性

- 可视化拖拽编辑器
- 百万行数据表格（虚拟滚动）
- 工作流编排
- 图表可视化
- 响应式布局
