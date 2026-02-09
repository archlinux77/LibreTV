const CUSTOMER_SITES = {
    360: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360点播',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
