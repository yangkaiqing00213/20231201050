// 初始化参数
let currentStart = 1; // 起始帖子编号
const loadCount = 20; // 每次加载20条
let isLoading = false; // 防止重复加载的锁

// DOM 加载完成后初始化第一组帖子
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

// 监听滚动事件，触底时加载更多
window.addEventListener('scroll', () => {
    // 计算是否滚动到页面底部（误差100px内视为触底）
    const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (scrollBottom && !isLoading) {
        loadPosts();
    }
});

// 加载帖子的核心函数
function loadPosts() {
    isLoading = true; // 锁定加载状态
    const end = currentStart + loadCount - 1; // 计算结束编号

    // 显示加载中提示
    const container = document.getElementById('posts-container');
    const loadingEl = document.createElement('div');
    loadingEl.className = 'loading';
    loadingEl.textContent = '加载中...';
    container.appendChild(loadingEl);

    // 调用后端 API 获取帖子（适配 Django 的 /posts 接口）
    fetch(`/posts?start=${currentStart}&end=${end}`)
        .then(response => {
            if (!response.ok) throw new Error('加载失败');
            return response.json();
        })
        .then(data => {
            // 移除加载提示
            container.removeChild(loadingEl);

            // 渲染新帖子
            data.posts.forEach(postText => {
                const postEl = document.createElement('div');
                postEl.className = 'post-item';
                postEl.textContent = postText;
                container.appendChild(postEl);
            });

            // 更新下一次加载的起始编号
            currentStart = end + 1;
            isLoading = false; // 解锁加载状态
        })
        .catch(error => {
            // 加载失败处理
            loadingEl.textContent = '加载失败，请重试';
            loadingEl.style.color = 'red';
            isLoading = false;
        });
}