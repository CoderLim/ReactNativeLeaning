import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class StatusCell extends Component {
  constructor(props) {
    super(props);
  }

  /* 获取来源 */
  getSource(status) {
    if (status && status.source) {
      let { source } = this.props.status;
      let matches = source.match(/>(.*)<\//);
      if (matches.length > 1) {
        return matches[1];
      }
      return '未知';
    }
  }

  render() {
    let user = this.props.status.user;
    let status = this.props.status;
    console.log(status);
    console.log(status.source.match(/>(.*)<\//));
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          { /*begin: weibo base Info*/ }
          <View style={styles.baseInfo}>
            <Image style={styles.portrait} source={{uri: user.profile_image_url}}/>
            <View style={styles.baseInfoRight}>
              <View style={styles.row}>
                <Text style={styles.nickName}>{user.name}</Text>
              </View>
              <View style={[styles.row, {marginTop: 10,}]}>
                <Text style={styles.relaseTime}>刚刚</Text>
                <Text style={styles.source}>来自{this.getSource(status)}</Text>
              </View>
            </View>
          </View>
          {/* end: weibo base Info */ }

          <View style={styles.content}>
            <Text>
              {status.text}
            </Text>
          </View>

          <View style={[styles.bottomView, styles.row]}>
            <TouchableHighlight style={styles.button}>
              <View style={[styles.row, styles.flexCenter]}>
                <Image style={styles.icon} source={require('../images/Home/timeline_icon_retweet.png')} />
                <Text style={styles.centerText}>转发</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.separatorVertical} />
            <TouchableHighlight style={styles.button}>
              <View style={[styles.row, styles.flexCenter]}>
                <Image style={styles.icon} source={require('../images/Home/timeline_icon_comment.png')} />
                <Text style={styles.centerText}>评论</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.separatorVertical} />
            <TouchableHighlight style={styles.button}>
              <View style={[styles.row, styles.flexCenter]}>
                <Image style={styles.icon} source={require('../images/Home/timeline_icon_unlike.png')} />
                <Text style={styles.centerText}>赞</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(226, 226, 226)',
  },
  wrapper: {
    flex:0,
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgb(252, 252, 252)',
  },
  baseInfo: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  portrait: {
    width: 40,
    height: 40,
    margin: 2,
  },
  baseInfoRight: {
    margin: 5,
  },
  row: {
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nickName: {
    color: 'rgb(255, 131, 7)',
    fontSize: 17,
    fontWeight: 'bold',
  },
  relaseTime: {
    color: 'orange',
  },
  source: {
    color: 'purple',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    margin: 10,
  },
  bottomView: {
    marginTop: 10,
    height: 40,
    borderTopColor: 'rgb(237, 237, 237)',
    borderTopWidth: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  centerText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 15,
  },
  separatorVertical: {
    width: 1,
    backgroundColor: 'rgb(237, 237, 237)',
    marginVertical: 5,
  }
});
