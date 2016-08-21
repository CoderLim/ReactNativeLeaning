//
//  RCTMapViewManager.h
//  NativeUIComponents
//
//  Created by gengliming on 16/8/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

// 参考： http://facebook.github.io/react-native/docs/native-components-ios.html

#import "RCTViewManager.h"

/*
 *
 *    刚开始定义为RCTMapManager，报错duplicate xxx，应该是系统有定义RCTMapManager了，所以更名如下，
 *
 *    更名后一直提示 RCTMap 在模块里找不到， 晕菜了，整了半天没整好，关电脑出去一趟
 *
 *    回来之后重新运行，好了 凸 -_- 凸
 *
 */

@interface RCTMapViewManager : RCTViewManager

@end
