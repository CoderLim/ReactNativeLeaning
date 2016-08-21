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
    onRegionChange: PropTypes.func,
    region: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,

      latitudeDelta: PropTypes.number.isRequired,
      longitudeDelta: PropTypes.number.isRequired,
    }),
  };

  constructor(props) {
    super(props);// 这句不要丢了
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event: Event) {
    if (!this.props.onRegionChange) {
      return;
    }
    this.props.onRegionChange(event.nativeEvent.region);
  }

  render() {
    return <RCTMapView {...this.props} onChange={this._onChange}/>;
  }
}
