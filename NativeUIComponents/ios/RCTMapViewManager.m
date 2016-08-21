//
//  RCTMapViewManager.m
//  NativeUIComponents
//
//  Created by gengliming on 16/8/19.
//  Copyright © 2016年 Facebook. All rights reserved.
//

// 参考：http://facebook.github.io/react-native/docs/native-components-ios.html

#import "RCTMapViewManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+MapKit.h"

@interface RCTMapViewManager()

@end

@implementation RCTMapViewManager
RCT_EXPORT_MODULE();

// 不知道管不管用
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL);

// 教程里的 RCTMapView 改成 MKMapView
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion: json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated: YES];
}

- (UIView *)view {
  return [[MKMapView alloc] init];
}

@end
