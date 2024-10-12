# Code Reader Chrome Extension

[English](#english) | [中文](#中文)

## English

Code Reader is a Chrome extension that provides detailed code analysis for GitHub repositories. It uses AI models to generate insights and explanations about the code structure and functionality.

### Features

- Automatic detection of GitHub repository pages
- AI-powered code analysis
- Support for multiple AI models (GPT-3.5 Turbo, GPT-4, Claude 2)
- Markdown rendering of analysis results

### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory and install dependencies:

   ```
   npm install
   ```

3. Build the extension:

   ```
   npm run build
   ```

4. Open Google Chrome and go to `chrome://extensions/`.
5. Enable "Developer mode" in the top right corner.
6. Click "Load unpacked" and select the `dist` folder created by the build process.

### Usage

1. After installation, the Code Reader extension icon will appear in your Chrome toolbar.
2. Navigate to a GitHub repository page.
3. Click on the Code Reader extension icon to open the sidebar.
4. Select the desired AI model from the dropdown menu.
5. Click the "Analyze Code" button to generate an analysis of the repository.

### Development

To set up the project for development:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/code-reader-extension.git
   ```

2. Install dependencies:

   ```
   cd code-reader-extension
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Load the extension in Chrome by following the installation steps above, but select the project root folder instead of the `dist` folder.

### Important Note

The current implementation uses a placeholder API endpoint (`https://your-api-endpoint.com/analyze`) for code analysis. You need to implement the actual API and handle the backend logic for interacting with the AI models before the extension can fully function.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License.

---

## 中文

Code Reader 是一个 Chrome 扩展程序，为 GitHub 仓库提供详细的代码分析。它使用 AI 模型生成关于代码结构和功能的见解和解释。

### 功能

- 自动检测 GitHub 仓库页面
- AI 驱动的代码分析
- 支持多种 AI 模型（GPT-3.5 Turbo、GPT-4、Claude 2）
- Markdown 格式的分析结果渲染

### 安装

1. 克隆此仓库或下载源代码。
2. 导航到项目目录并安装依赖：

   ```
   npm install
   ```

3. 构建扩展：

   ```
   npm run build
   ```

4. 打开 Google Chrome 并访问 `chrome://extensions/`。
5. 在右上角启用"开发者模式"。
6. 点击"加载已解压的扩展程序"，选择构建过程创建的 `dist` 文件夹。

### 使用方法

1. 安装后，Code Reader 扩展图标将出现在 Chrome 工具栏中。
2. 导航到 GitHub 仓库页面。
3. 点击 Code Reader 扩展图标打开侧边栏。
4. 从下拉菜单中选择所需的 AI 模型。
5. 点击"分析代码"按钮生成仓库分析。

### 开发

要设置项目进行开发：

1. 克隆仓库：

   ```
   git clone https://github.com/yourusername/code-reader-extension.git
   ```

2. 安装依赖：

   ```
   cd code-reader-extension
   npm install
   ```

3. 启动开发服务器：

   ```
   npm run dev
   ```

4. 按照上述安装步骤在 Chrome 中加载扩展，但选择项目根文件夹而不是 `dist` 文件夹。

### 重要说明

当前实现使用占位符 API 端点（`https://your-api-endpoint.com/analyze`）进行代码分析。在扩展程序完全功能之前，您需要实现实际的 API 并处理与 AI 模型交互的后端逻辑。

### 贡献

欢迎贡献！请随时提交 Pull Request。

### 许可证

本项目采用 MIT 许可证。