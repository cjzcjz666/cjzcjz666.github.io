# Junzhe Chen — Academic Homepage

面向 GitHub Pages 的纯静态学术主页，不依赖 Node.js、构建工具、后端或外部 CDN。原有 `CNAME`（`junzhec.top`）保持不变。

仓库：<https://github.com/junzhe-c/junzhe-c.github.io>。个人资料：<https://github.com/junzhe-c>。

## 本地预览

在本目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后打开 <http://127.0.0.1:4173>。修改文件后刷新浏览器即可。

## 文件说明

- `index.html`：个人介绍、新闻、论文、教育与经历。内容直接写在 HTML 中，禁用 JavaScript 时仍然可以阅读。
- `assets/styles.css`：桌面、平板、手机和打印样式。
- `assets/site.js`：论文筛选、导航高亮、页脚年份。
- `assets/citations/*.bib`：各篇论文的 BibTeX；`assets/publications.bib` 为完整合集。
- `assets/papers/slotnarrative.png`：作者论文中的原始概览图，未经修改。
- `assets/fonts/`：本地字体及 SIL Open Font License；页面不会向字体服务发送请求。
- `docs/content-sources.md`：核对来源、日期和仍需本人确认的履历信息。

## 更新论文

在 `.publication-list` 中新增 `article.publication`，填写标题、作者、年份、发表状态和真实链接。使用 `data-category="video"`、`recognition` 或 `efficiency` 对应筛选分类。同步更新顶部论文数量、筛选数量、BibTeX 文件及核对日期。不要将预印本写成已录用论文。

## 发布到原 GitHub Pages

将本目录的修改提交、推送并合并到原仓库配置的发布分支即可；保留根目录 `index.html`、`CNAME`、`.nojekyll` 与 `assets/`。当前没有添加 GitHub Actions，也没有修改远程 Pages 设置。2026-08-31 已通过 GitHub API 确认当前发布源为 `main` 分支根目录 `/`（legacy build）。

网页中的字体、论文图和内容可独立维护。主页面不收集访客数据、不加载追踪脚本，也不展示原页面的个人电话号码。
