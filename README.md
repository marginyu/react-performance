## 性能优化学习

chrome Dev Timeline 和 profiles的使用

react-addons-perf 的使用




正常的性能优化过程应该包含以下几个步骤：

1. 确定发现存在性能的缺陷
2. 使用 DevTools 来解析发现瓶颈所在
3. 尝试使用优化技巧解决这些问题
4. 测试是否确实有性能提升
5. 重复第二步



优化技巧:

基本上都是围绕着减少重绘来进行的.

1. SCU
1. PureComponent
1. immutable.js


https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm/support  性能测试之chrome扩展程序

http://imweb.io/topic/577512fe732b4107576230b9 react组件性能优化探索实践 by imweb团队

https://facebook.github.io/react/docs/perf.html 官方推荐 三篇好文 必读

http://benchling.engineering/deep-dive-react-perf-debugging/ 原文

https://segmentfault.com/a/1190000006911917#articleHeader1 译文   专门讲透一个例子, 配合图片(组件渲染树) 优化SCU的原理

https://zhangxinmiao.com/2017/02/21/betterreact/ React性能优化初探

http://www.oschina.net/translate/performance-optimisation-with-timeline-profiles 使用Chrome DevTools的Timeline和Profiles提高Web应用程序的性能

http://www.cnblogs.com/cherryblossom/p/5502591.html  chrome开发者工具浅析--timeline

FPS是每秒刷新频率，目前大多数设备的屏幕刷新率都是 60次/秒 ，如果在页面中有一个动画或渐变效果，或者用户正在滑动页面，那么浏览器渲染动画或页面的每一帧的速率都要保持16毫秒（1秒 / 60 = 16.66毫秒）之内完成。

http://blog.csdn.net/zhenzigis/article/details/50556440  Chrome F12之Timeline页面性能分析
帧模式从渲染性能的角度提供了数据支撑，一个“frame”表示浏览器为了渲染单个内容块而必须要做的工作（包括：执行js，处理事件，修改DOM，更改样式和布局，绘制页面）！



卡有两种，一种是页面加载慢（主要原因在网络上），看能不能减少加载（压缩，GZIP，缓存，预加载/只加载当前页面资源），另一种是页面帧率低（低于60FPS），会在视觉上有卡顿，从网上找了个DEMO(http://boallen.com/fps-compare-html5.html)。

基于前面的分析，性能优化在于两点：
1，在timeline中观测页面资源加载情况（时长，顺序），降低页面加载时长。
2，在timeline中观测FPS情况（由上图可知，变红部分是帧率较低，是需要重点优化的地方），这个时候观测底下的JS执行耗时，能分析出哪部分耗时过长，导致帧率下降。