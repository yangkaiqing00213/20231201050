import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    { name: "医学信息化", count: 12, id: "medical-info" },
    { name: "前端开发", count: 8, id: "frontend" },
    { name: "数据分析", count: 6, id: "data-analysis" },
    { name: "编程技术", count: 7, id: "programming" },
    { name: "医学知识", count: 5, id: "medical-knowledge" },
    { name: "校园生活", count: 4, id: "campus-life" }
  ];

  const tags = [
    "医学信息", "医疗IT", "数据可视化", "Python", "JavaScript", 
    "电子病历", "数据分析", "Web开发", "贵州中医药大学", "医学工程",
    "数据库", "前端技术"
  ];

  const archives = [
    { month: "2024年3月", count: 3, id: "2024-03" },
    { month: "2024年2月", count: 5, id: "2024-02" },
    { month: "2024年1月", count: 4, id: "2024-01" },
    { month: "2023年12月", count: 6, id: "2023-12" },
    { month: "2023年11月", count: 4, id: "2023-11" },
    { month: "2023年10月", count: 3, id: "2023-10" }
  ];

  return (
    <aside className="sidebar">
      {/* 分类目录 */}
      <div className="sidebar-widget">
        <h3 className="widget-title">文章分类</h3>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category.id} className="category-item">
              <a href={`#${category.id}`}>{category.name} ({category.count})</a>
            </li>
          ))}
        </ul>
      </div>

      {/* 标签云 */}
      <div className="sidebar-widget">
        <h3 className="widget-title">热门标签</h3>
        <div className="tag-cloud">
          {tags.map((tag, index) => (
            <a key={index} href={`#${tag}`} className="tag">{tag}</a>
          ))}
        </div>
      </div>

      {/* 归档 */}
      <div className="sidebar-widget">
        <h3 className="widget-title">文章归档</h3>
        <ul className="category-list">
          {archives.map(archive => (
            <li key={archive.id} className="category-item">
              <a href={`#${archive.id}`}>{archive.month} ({archive.count})</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;