# 《飞翔的小鸟Canvas版本》项目介绍

## 项目概述

采用`Canvas`和`TypeScript`开发，实现的飞翔的小鸟

### 动画原理:
  - 在 canvas 画布上绘制元素，间隔一段时间后，擦除 canvas 画布的内容，在不同的位置重新绘制
  - 当间隔时间足够短，并且重绘的位置与前面被擦除的图像位置有连贯性的时候，就会形成动画效果
  - 绘制图像需要的必要参数：canvas 渲染函数、图像对象、绘制的位置、重绘时的新位置

#### 初始化-flappyBird.js
 - 需要绘制的元素
   - 飞翔的小鸟
   - 天空
   - 陆地
   - 管道(上排)
   - 管道(下排)
 - 以每个绘制元素为个体，创造出五个对象，分别自定义自己的画图方法
 - 将这五个对象都挂到一个大对象上(flappyBird)，再将这个大对象挂到 window 上，即提升到了全局

#### 天空-sky.js
 - 天空图片的大小 800 x 600，画布的大小 800 x 600
 - 为了形成补间动画，需要两张天空的图片并排摆放，图片 1 在前，图片 2 在后，一起向左挪动
 - 当图片 1 刚好移动出画布的时候，此时的图片 2 刚好填满画布
 - 图片 1 离开画布的时候，拼接到图片 2 的后面，这样使得图片 2 变成了前面的图片，图片 1 变成了后面的图片，继续重复向左挪动的动画

#### 地面-land.js
 - 地面图片的大小 336 x 112，画布的大小 800 x 600
 - 为了形成补间动画，需要地面图片的个数为 800/336 向上取整，再加一张，即 4 张
 - 向左挪动的规律同上，当最前面的图片移动出画布的时候，迅速补到最后一张图片的后面

#### 管道-pipe.js
 - 管道图片的大小 52 x 420，画布的大小 800 x 600
 - 游戏绘制中，每个上排管道对应一个下排管道，所以将一个上管道和一个下管道视为一组
 - 与天空图片和地面图片的绘制略有不同，每组管道的绘制并不是并排紧挨摆放的，而是有间隙地摆放
 - 这里我设置的间隔距离是 52*2，即当前管道组放在 1 的位置，那么下一组管道就放在 4 的位置
 - 将间隙与当前管道组视为一个整体，即管道需要的宽度是 52*3=156，实际绘制得出需要 6 组管道完成补间动画
 - 游戏最开始的时候，在 x 方向上，并不是从 0 开始的，这里我设置的是 400
 - 设置一个随机数，控制上排管道的绘制位置 topY，下排管道的绘制位置 botY
 - 注意控制下排管道要超出地面图片的高度，上排管道和下排管道不能合并到一起

#### 小鸟-bird.js
 - 小鸟的运动用到了物理中的位移公式，计算在当前 x 的垂直线上，上下移动的距离 y = v0*t+a*t*t/2
 - 刚开始飞的时候，小鸟的初速度是 0，即 v0=0
 - 向下的加速度取值为 0.0005，即 a=0.0005
 - 时间间隔使用毫秒计数，当前时间减去上一次记录的时间，就是时间间隔，即 t=currentTime-startTime
 - 第一次绘制小鸟的时候，初速度为 0，第二次绘制的时候，初速度等于加速度乘时间，即 v0=a*t
 - 角速度
 - 雪碧图的应用
 - 点击的时候，将初速度设置为负数，即 y 值反向运动

#### 运行游戏-game.js
 - window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画
 - 自动执行，与 setInterval 类似
 - 执行动画的时候，嵌套回调
 - 设置一个开关 running，一旦触发结束条件，立即停止嵌套

## 启动说明

### 安装依赖

```
pnpm install
```

### 安装Liver Server

`vscode`插件搜索`LiveServer`点击安装

### 编译游戏

基于`TS`开发,需要使用` TS CIL`

```
tsc
```

如果希望修改了`TS`代码后能马上触发编译,请使用

```
tsc -watch
```

### 启动服务

进入`index.html,`右键选择`Open with live server`

# git 提交规范
```bash
feat: 新功能
fix: 修复bug
refactor: 重构
perf: 性能优化
docs: 文档
test: 测试
style: 代码格式修改,不涉及业务逻辑
ci: 持续集成
chore: 其他
revert: 回滚
```