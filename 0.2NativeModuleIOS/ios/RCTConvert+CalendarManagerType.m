//
//  RCTConvert+CalendarManagerType.m
//  AwesomeProject
//
//  Created by gengliming on 16/8/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTConvert+CalendarManagerType.h"
#import "CalendarManager.h"

@implementation RCTConvert (CalendarManagerType)

RCT_ENUM_CONVERTER(CalendarManagerType, (@{
                    @"CalendarManagerTypeNone": @(CalendarManagerTypeNone),
                    @"CalendarManagerTypeTest1": @(CalendarManagerTypeTest1),
                    @"CalendarManagerTypeTest2": @(CalendarManagerTypeTest2)
                    }), CalendarManagerTypeNone, integerValue);

@end
