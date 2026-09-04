# “童语同音” 学前儿童普通话师资培训平台 (Vue 3 框架)

> 本项目基于 **Vue 3 响应式框架** 与 **Vant 移动端组件库** 构建，结合 **Vite** 提供高效的工程化构建与开发支持。专注于学前儿童普通话师资培训的学习排期、微课进阶、作业提交与智能终测考核。

---

## ⚙️ 打开本项目必要条件 (Prerequisites)

在运行与打开本项目之前，请确保本地开发环境已满足以下条件：

1. **Node.js 环境**：建议安装 **Node.js v18.0.0** 或更高版本；
2. **包管理工具**：推荐使用 **npm**（v8.0.0+）、`pnpm` 或 `bun` 进行依赖安装与构建脚本运行；
3. **现代浏览器**：推荐使用 **Google Chrome**、**Microsoft Edge**、**Safari** 或 **Firefox** 等支持 HTML5 及移动端自适应特性的现代浏览器。

---

## 📌 Vue 框架架构特点

1. **响应式状态驱动 (Vue 3 Composition API)**
   - 采用 Vue 3 核心响应式系统（`ref`、`computed`、`watch`），实现学习打卡日程、作业完成度、微课播放状态及终测进度的实时联动；
   - 学习日历打卡与完成标记状态解耦，支持随课程学习进度自动计算并点亮完成状态。

2. **精细化移动组件生态 (Vant UI)**
   - 深度结合 Vant 组件库（Popup 弹出层、Tag 标签、Collapse 折叠面板、Toast 轻提示、Dialog 模态对话框等）；
   - 自定义主题色系（主色调 `#00a86b` 生机绿、`#ff7d27` 直播亮橙、`#bebebe` 回放灰），实现轻量而富有质感的界面质感。

3. **双端高适应性布局**
   - 核心视图基于现代移动优先原则设计，支持宽屏自动居中约束与多分辨率自适应；
   - 交互组件全面支持移动端触控与手势操作。

---

## 📂 项目结构

```text
├── plan.html               # 核心学习计划主页面（Vue 3 单页容器）
├── register.html           # 报名登记与流程步骤页面
├── ended.html              # 报名已结束展示页面
├── not-started.html         # 报名未开始展示页面
├── index.html              # 平台首页入口
├── handbook.pdf            # 培训学习手册（支持新标签页原生在线阅读与下载）
├── faq.pdf                 # 常见问题解答手册（支持新标签页原生在线阅读与下载）
├── public/                 # 静态资源公开目录（打包后直出根目录）
│   ├── handbook.pdf
│   └── faq.pdf
├── style/                  # 样式与 Vue 核心资源
│   ├── common.scss         # 全局样式（布局网格、动画、打卡标记与日历定制）
│   ├── vue.js              # Vue 3 核心运行时库
│   ├── vant.min.js         # Vant 核心组件库
│   ├── index.css           # Vant 基础样式文件
│   └── img/                # 视觉素材库
│       ├── big-title.png   # 顶部大标题装饰
│       ├── pic-AI-companion.png # AI 学伴形象素材
│       ├── icon-message.png     # 消息提醒图标
│       ├── icon-Homework.png    # 课后作业图标
│       └── icon-PutonghuaFinalTest.png # 普通话终测图标
├── vite.config.js          # Vite 工程构建配置
├── package.json            # 项目依赖配置
└── metadata.json           # 应用元数据
```

---

## 🛠️ 技术栈清单

| 技术 / 工具 | 版本 / 规范 | 说明 |
| :--- | :--- | :--- |
| **核心框架** | Vue 3 | 采用 Composition API 组合式语法，管理排期、打卡与任务状态 |
| **UI 组件库** | Vant 4 | 提供底层弹窗、标签、状态反馈等移动交互组件 |
| **构建引擎** | Vite 5 | 极速热重载开发服务器与轻量化生产环境打包 |
| **样式预处理** | Sass / SCSS | 模块化管理视觉主题、打卡日历圆盘、气泡角标与自适应断点 |
| **文档在线浏览** | 原生 PDF 集成 | 通过标准链接在新标签页中调起浏览器原生 PDF 阅览器 |

---

## 🚀 本地开发与指令

### 1. 安装依赖
```bash
npm install
```

### 2. 启动本地开发服务
```bash
npm run dev
```
开发服务器启动后，默认端口为 `3000`，访问：
- 学习计划主页面：`http://localhost:3000/plan.html`

### 3. 生产打包
```bash
npm run build
```
打包生成后的静态资产存放在 `dist/` 目录中，可直接部署在任意静态 Web 服务器、Nginx 或 CDN 托管平台。

### 4. 预览生产环境产物
```bash
npm run preview
```
