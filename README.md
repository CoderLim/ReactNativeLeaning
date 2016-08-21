
# ReactNativeLeaning：ES6版本；

## 前言

> 从学习到实战，过程该如何把握，来看看[我的文章](http://gengliming.com/2016/01/how-to-learn-react-native/)吧：
>
> 前面是基础知识，后面是两个实战项目，第一个是用Es6重写官方Movies，第二个是个人项目：新浪微博
>
> 都是抽时间写的，进度有点慢，有错误欢迎指正
>
> 其中`Movies`和`SinaWebBo`是**实际项目**，后者正在抽空进行中

## 目录

* 0.GUIDES
  * 0.1NativeModuleIOS js使用原生模块
  * 0.2NativeUIComponents 定义原生MapView供js使用
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
 
## 总结SinaWebBo遇到的坑
> 总感觉框架不成熟，有问题就开始想是不是框架的问题，其实年轻人你的很多bug还是要多从自身考虑，下面来总结几个废了点时间的“坑”

* 1.invalid png
  * SinaWebBo中的icon是我从已有的native项目中考过来的，居然会提示我无效的png，难不成RN显示icon有问题？上哪儿哭去？网上居然没有遇到这种问题的人，于是去技术群里问问吧，最后还是有个热心的伙计说帮我看看，在他的程序里也是报错，他告诉我说：肯定图片有问题，因为我这里（windows）打不开。但是我这里（mac）可以正常访问。
  * 最终的解决方法是我使用mac的“预览”重新导出对应的图片为png（勾选alpha），于是程序可以访问了
* 2.cell重叠
  * cell为什么会重叠呢？去网上找找吧，没有这种提问，好吧，难不成我又犯了什么弱智的问题？
  * 果然是弱智的问题，cell的最外层view不能设置flex：1，因为如果设置成flex：1，那所有cell的高度都是一样的
* 3.can not read property of 'xxx'
  * 如果你反复检查代码没问题，那就看看是不是在忘了bind，比如<MyView onclick={this._clickMyView}/>是错误的，应该写成
  * <MyView onclick={this._clickMyView.bind(this)}/>，希望以后支持ES7的这种绑定："::this._clickMyView"

## HOW TO USE?

1.下载或克隆代码；<br/>
**比如想运行0.NativeModuleIOS**<br/>
2.cd 到**0.NativeModuleIOS**目录；<br/>
3.npm install<br/>
4.react-native run-ios，如果报的错不知为何物，把*0.NativeModuleIOS*文件夹更名为*NativeModuleIOS*，重新运行。

## DEMO

SinaWebBo:

![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/sina_home.gif)
![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/sina_release_status.gif)
<br/><br/>
Movies：

![image](https://github.com/CoderGLM/ReactNativeLeaning/blob/master/SinaWebBo/screenshots/12.gif)

