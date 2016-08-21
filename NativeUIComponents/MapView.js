/**
 * @flow
 */
import React, { Component, PropTypes } from 'react';
// import {
//   requireNativeComponent, // 这居然会crash，Unable to resolve module react-native from xxxx
// } from 'react-natvie';

import RCTMapView from './RCTMapView';

// var RCTMapView = requireNativeComponent('RCTMapView', MapView);

export default class MapView extends Component {
  static propTypes = {
    pitchEnabled: PropTypes.bool,
    region: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,

      latitudeDelta: PropTypes.number.isRequired,
      longitudeDelta: PropTypes.number.isRequired,
    }),
  };

  render() {
    return <RCTMapView {...this.props} />;
  }
}
