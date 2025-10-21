# Django 单页面应用项目

这是一个基于Django框架的单页面应用（SPA）项目，实现了无刷新页面切换功能。

## 项目特性

- 🚀 **单页面应用**：无刷新页面切换体验
- ⌨️ **键盘导航**：支持键盘快捷键操作
- 📱 **响应式设计**：适配不同屏幕尺寸
- 🎨 **美观UI**：现代化界面设计
- 🔄 **URL历史记录**：支持浏览器前进后退

## 技术栈

- **后端框架**：Django 4.x
- **前端技术**：HTML5, CSS3, JavaScript
- **开发语言**：Python 3.x

## 项目结构

```
20231201050/
├── mysite/                 # Django项目配置
│   ├── __init__.py
│   ├── settings.py         # 项目设置
│   ├── urls.py             # URL路由配置
│   └── views.py            # 视图函数
├── static/                 # 静态文件
│   └── js/
│       └── singlepage.js   # 单页面逻辑
├── templates/              # 模板文件
│   └── singlepage.html     # 主页面模板
├── .gitignore             # Git忽略文件
├── db.sqlite3             # 数据库文件
├── LICENSE                # 许可证文件
└── README.md              # 项目说明
```

## 功能页面

项目包含三个主要页面：

1. **首页** - 项目介绍和导航
2. **关于页面** - 项目详细信息
3. **联系页面** - 联系方式信息

## 安装和运行

### 环境要求

- Python 3.8+
- Django 4.x

### 安装步骤

1. 克隆项目到本地：
```bash
git clone <repository-url>
cd 20231201050
```

2. 创建虚拟环境：
```bash
python -m venv .venv
```

3. 激活虚拟环境：
```bash
# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate
```

4. 安装依赖：
```bash
pip install django
```

5. 运行开发服务器：
```bash
python manage.py runserver
```

6. 访问应用：
打开浏览器访问 http://127.0.0.1:8000/

## 使用方法

### 页面切换

- **按钮点击**：点击顶部导航按钮切换页面
- **键盘快捷键**：
  - `1` - 切换到首页
  - `2` - 切换到关于页面
  - `3` - 切换到联系页面
  - `Esc` - 返回首页

### 浏览器支持

- 支持浏览器前进后退按钮
- URL地址栏显示当前页面状态

## 开发说明

### 添加新页面

1. 在 `singlepage.html` 中添加新的页面div
2. 在 `singlepage.js` 中添加页面切换逻辑
3. 更新导航按钮和键盘快捷键

### 自定义样式

修改 `singlepage.html` 中的CSS样式来自定义界面外观。

## 许可证

本项目采用 MIT 许可证 - 查看 LICENSE 文件了解详情。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

## 联系方式

如有问题或建议，请通过项目 Issues 页面联系。