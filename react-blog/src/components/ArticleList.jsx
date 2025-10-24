import React from 'react';
import './ArticleList.css';

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "医疗信息化系统中的前端技术应用",
      date: "2024年3月15日",
      readTime: "6分钟",
      excerpt: "探讨现代医疗信息化系统中前端技术的应用场景，包括电子病历系统、医疗数据可视化、患者管理平台等前端开发实践..."
    },
    {
      id: 2,
      title: "医学数据分析与可视化技术探索",
      date: "2024年3月10日",
      readTime: "8分钟",
      excerpt: "深入分析医学数据的特点和处理方法，介绍常用的数据分析工具和可视化技术，分享医疗数据可视化的最佳实践..."
    },
    {
      id: 3,
      title: "医学信息工程专业学习路线规划",
      date: "2024年3月5日",
      readTime: "5分钟",
      excerpt: "分享医学信息工程专业的学习经验和技能培养路径，包括编程基础、医学知识、数据分析等核心能力的培养方法..."
    }
  ];

  return (
    <section className="articles-section">
      <h2 className="section-title">最新文章</h2>
      <div className="article-list">
        {articles.map(article => (
          <article key={article.id} className="article-item">
            <h3 className="article-title">{article.title}</h3>
            <div className="article-meta">{article.date} • 阅读时间 {article.readTime}</div>
            <p className="article-excerpt">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;