# 博客搭建记录

<div class="shadcn-card">
  <div class="shadcn-card-header"><span>Aloer Pages</span></div>
  <div class="shadcn-card-body"><p>本站使用 VitePress 生成静态页面，通过 GitHub Actions 构建并发布到 GitHub Pages。</p></div>
</div>

<div class="shadcn-grid shadcn-grid-2">

<div class="shadcn-card">
  <div class="shadcn-card-header"><span>准备环境</span></div>
  <div class="shadcn-card-body"><p>本地安装 Node.js 20 或更高版本，克隆 Aloer-pages 仓库后运行 npm ci 安装依赖。</p></div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header"><span>本地预览</span></div>
  <div class="shadcn-card-body"><p>运行 npm run docs:dev 启动开发预览。文章位于 docs 目录，站点配置位于 docs/.vitepress/config.mts。</p></div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header"><span>构建检查</span></div>
  <div class="shadcn-card-body"><p>运行 npm run docs:build 生成静态文件，再通过 npm run docs:preview 检查构建结果。</p></div>
</div>

<div class="shadcn-card">
  <div class="shadcn-card-header"><span>发布更新</span></div>
  <div class="shadcn-card-body"><p>将确认后的修改推送至 main 分支，仓库现有 GitHub Actions 工作流会自动构建和部署本站。</p></div>
</div>

</div>

<div class="shadcn-cta">
<div class="shadcn-cta-content"><h3>一起学习与分享</h3><p>欢迎在 GitHub 提出建议，交流开发中的经验。</p></div>
<a href="https://github.com/raquelhuss/Aloer-pages/issues" class="shadcn-btn shadcn-btn-primary">交流反馈</a>
</div>
