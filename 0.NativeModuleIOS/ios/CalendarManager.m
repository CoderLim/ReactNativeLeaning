//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by gengliming on 16/8/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

/*
 *
 *
 *    每次修改了这里的代码都要重新：run－ios
 *
 *
 */
// 参考教程： http://facebook.github.io/react-native/docs/native-modules-ios.html
#import "CalendarManager.h"
#import "RCTLog.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation CalendarManager

// 这里还不能带参数，带参数报错
RCT_EXPORT_MODULE(CalendarManager);

/**
 *
 *
 * 函数一
 *
 *
 */
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

/**
 *
 * 函数二
 *
 * 注意date参数是 NSNumber* 而是 NSNumber
 *
 * Error: CalendarManager.addEvent2 has unspecified nullability but React requires that all NSNumber arguments are explicitly marked as 'nonnull' to ensure compatibility with Android *
 * 解决办法：http://blog.csdn.net/offbye/article/details/51576592
 * 如下 添加_Nonnull关键字
 *
 *
 */
RCT_EXPORT_METHOD(addEvent2:(NSString *)name location:(NSString *)location date:(NSNumber *_Nonnull)secondSinceUnixEpoch) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  NSDate *date = [RCTConvert NSDate:secondSinceUnixEpoch];
  RCTLog(@"%@", date);
}

/**
 *  函数三：使用字典
 */
RCT_EXPORT_METHOD(addEvent3:(NSDictionary *)dict) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", dict[@"name"], dict[@"location"]);
}

/**
 *  函数四：回调函数
 *
 *  RCTResponseSenderBlock只接受一个数组参数
 *
 */
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback) {
  NSString *name = @"glm";
  // RCTResponseSenderBlock只接受一个数组参数
  callback(@[[NSNull null], @[name]]);
}

/**
 *  函数五：Promise
 *
 */
RCT_REMAP_METHOD(findEvents2,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject){
  resolve(@"glm");
}

/**
 *  六：导出常量
 */
- (NSDictionary *)constantsToExport {
  return @{@"firstDayOfTheWeek": @"Monday",
           
           // CalendarManagerType
           @"CalendarManagerTypeNone": @(CalendarManagerTypeNone),
           @"CalendarManagerTypeTest1": @(CalendarManagerTypeTest1),
           @"CalendarManagerTypeTest2": @(CalendarManagerTypeTest2)
           };
}

/**
 *  七：导出ENUM
 *
 *  1.定义NS_ENUM；
 *  2.添加 RCTConvert+CalendarManagerType.h(m)
 *  3.在constantsToExport中添加字段，如上
 */

/**
 *  八：向js发送事件
 *
 *  增加import：
 *  #import "RCTBridge.h"
 *  #import "RCTEventDispatcher.h"
 *
 */
@synthesize bridge = _bridge;

RCT_EXPORT_METHOD(sendEvent:(NSString *)name) {
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name": @"glm"}];
}

@end
