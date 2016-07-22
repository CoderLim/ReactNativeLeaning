import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import Dimensions from 'Dimensions';

// 窗口宽度
const WinWidth = Dimensions.get('window').width;
// 图片间隔
const ImageMargin = 10;
// 图片大小
const ImageWidth = (WinWidth - 20 - 4*ImageMargin)/3;


export default class RetweetView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { status } = this.props,
      { pic_urls } = status,
      images = [];


    if (pic_urls && pic_urls.length > 0) {
      pic_urls.forEach((item, index) => {
        images.push(<Image key={`image_${index}`}
                           source={{uri: item.thumbnail_pic}}
                           style={styles.image} />);
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.nickName}>
          @{status.user.name}
        </Text>
        <Text style={styles.content}>
          {status.text}
        </Text>
        <View style={styles.gallery}>
          {images}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgb(228,228,228)',
    marginHorizontal: 5,
  },
  nickName: {
    color: 'rgb(72,111,164)',
    fontSize: 17,
    margin: 5,
  },
  content: {
    margin: 5,
    color: 'rgb(137,137,137)',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  image: {
    width: ImageWidth,
    height: ImageWidth,
    marginTop: 5,
    marginLeft: ImageMargin,
  }
});
