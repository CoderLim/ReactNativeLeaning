//
//  RCTMapView.h
//  NativeUIComponents
//
//  Created by gengliming on 16/8/22.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import "RCTComponent.h"

@interface RCTMapView : MKMapView
@property (nonatomic,copy) RCTBubblingEventBlock onChange;
@end
