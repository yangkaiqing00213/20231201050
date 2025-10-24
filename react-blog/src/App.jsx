import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import ArticleList from './components/ArticleList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="container">
        {/* 主要内容区域 */}
        <div className="main-content">
          {/* 左侧内容 */}
          <div className="content-left">
            <Profile />
            <ArticleList />
          </div>

          {/* 右侧侧边栏 */}
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;