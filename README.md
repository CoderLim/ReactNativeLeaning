基础对于很多人来说学起来很乏味，先来看看后面demo的动图吧

![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/11.gif)  
![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/12.gif)

# ReactNativeLeaning：ES6版本；
###其中Movies和SinaWebBo是实际项目，后者正在抽空进行中
>
> 从学习到实战，过程该如何把握，来看看[我的文章](http://www.jianshu.com/p/1f01174f43fa)吧：
>
> 前面是基础知识，后面是两个实战项目，第一个是用Es6重写官方Movies，第二个是个人项目：新浪微博
>
> 都是抽时间写的，进度有点慢，有错误欢迎指正
>
> 目前状态：在学习中爬坑，在坑中学习

### 项目列表
* 1.AwesomeProject 第一个RN项目
* 2.使用控件
  * 2.1 ActivityIndicatorIOSTest: 旋转的菊花
  * 2.2 DatePickerIOSTest: 时间选择器
  * 2.3 TouchableHighlightTest: 可点击，还有与之相关的TouchableOpacity
  * 2.4 NavigatorTest : 顶部导航栏
  * 2.5 TabBarIOSTest : 底部导航栏
  * 2.6 WebViewTest : 显示网页
* 3.API
  * 3.1 Animated:介绍了timing，spring，decay，sequence，parallel
  * 3.2 PanResponderTest: RN貌似只提供了一个实现手势的方法
  * 3.3 LayoutAnimationTest: 一次性动画
  * 3.4 ModalTest：还记得模态窗口吗？
* 4.实例
  * 4.1 FacebookMovies ：根据官方的Movies的ES5版本用ES6实现，简化版
  * 4.2 SinaWebBo: 微博，如果你看着项目名别扭，那就对了，手误，不过将错就错吧
 
### 总结SinaWebBo遇到的坑
> 总感觉框架不成熟，有问题就开始想是不是框架的问题，其实年轻人你的很多bug还是要多从自身考虑，下面来总结几个废了点时间的“坑”

* 1.invalid png
  * SinaWebBo中的icon是我从已有的native项目中考过来的，居然会提示我无效的png，难不成RN显示icon有问题？上哪儿哭去？网上居然没有遇到这种问题的人，于是去技术群里问问吧，最后还是有个热心的伙计说帮我看看，在他的程序里也是报错，他告诉我说：肯定图片有问题，因为我这里（windows）打不开。但是我这里（mac）可以正常访问。
  * 最终的解决方法是我使用mac的“预览”重新导出对应的图片为png（勾选alpha），于是程序可以访问了
* 2.cell重叠
  * cell为什么会重叠呢？去网上找找吧，没有这种提问，好吧，难不成我又犯了什么弱智的问题？
  * 果然是弱智的问题，cell的最外层view不能设置flex：1，因为如果设置成flex：1，那所有cell的高度都是一样的

### 截图
> 困了累了，睡觉前先扔上来几张图
####1.授权页面
![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/1.png)<br/>

####2.首页
![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/2.png)<br/>
