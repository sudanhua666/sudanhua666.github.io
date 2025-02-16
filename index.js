document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-container > ul > li');
  const subItems = document.querySelectorAll('.submenu li');
  const contents = document.querySelectorAll('.content');

  // 主选项卡点击事件
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // 移除所有active状态
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // 隐藏所有子菜单
      document.querySelectorAll('.submenu').forEach(s => s.style.display = 'none');

      // 处理子菜单显示
      const submenu = this.querySelector('.submenu');
      if (submenu) {
        // 显示当前子菜单
        submenu.style.display = 'block';
        this.classList.add('active');
      } else {
        // 如果没有子菜单，直接显示对应内容
        const target = this.dataset.target;
        const targetElement = document.getElementById(target);
        if (targetElement) {
          targetElement.classList.add('active');
        } else {
          console.error(`目标元素不存在: ${target}`);
        }
        this.classList.add('active');
      }
    });
  });

  // 子菜单点击事件
  subItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation(); // 阻止事件冒泡
      event.preventDefault(); // 防止默认行为

      // 移除所有子菜单项的active状态
      subItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      // 获取目标内容区域
      const target = this.dataset.target;
      const targetElement = document.getElementById(target);

      // 检查目标元素是否存在
      if (targetElement) {
        // 隐藏所有内容区域
        contents.forEach(c => c.classList.remove('active'));
        // 显示目标内容区域
        targetElement.classList.add('active');
      } else {
        console.error(`目标元素不存在: ${target}`);
      }
    });
  });

  // 默认显示第一个内容
  document.getElementById('profile').classList.add('active');
});