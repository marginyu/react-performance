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
