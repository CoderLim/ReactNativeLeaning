//
//  CalendarManager.h
//  AwesomeProject
//
//  Created by gengliming on 16/8/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

typedef NS_ENUM(NSInteger, CalendarManagerType){
  CalendarManagerTypeNone,
  CalendarManagerTypeTest1,
  CalendarManagerTypeTest2
};

@interface CalendarManager : NSObject <RCTBridgeModule>

@end
