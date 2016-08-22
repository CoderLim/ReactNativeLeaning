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
#import "RCTMapView.h"

@interface RCTMapViewManager() <MKMapViewDelegate>

@end

@implementation RCTMapViewManager
RCT_EXPORT_MODULE();

// 不知道管不管用
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL);

// 教程里的 RCTMapView 改成 MKMapView，问题已经反馈到github
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion: json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated: YES];
}

RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);

- (UIView *)view {
  RCTMapView *map = [RCTMapView new];
  map.delegate = self;
  return map;
}


#pragma mark - MKMapViewDelegate
- (void)mapView:(RCTMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  if (!mapView.onChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onChange(@{
                     @"region" : @{
                         @"latitude": @(region.center.latitude),
                         @"longitude": @(region.center.longitude),
                         @"latitudeDelta": @(region.span.latitudeDelta),
                         @"longitudeDelta": @(region.span.longitudeDelta)
                         }
                     });
}
@end
