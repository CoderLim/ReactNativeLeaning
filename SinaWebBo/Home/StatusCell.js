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
    }
    return '未知';
  }

  /* 获取发微博时间 */
  getCreatedTime(str) {
    if (str) {
      let [date, now] = [new Date(str), new Date()];
      if (date.getYear() == now.getYear()
          && date.getMonth() == now.getMonth()
          && date.getDate() == now.getDate()) {
            if (date.getHours() == now.getHours()) {
              if (now.getMinutes() - date.getMinutes() < 2) {
                return "刚刚";
              } else {
                return `${now.getMinutes() - date.getMinutes()}分钟前`;
              }
            } else {
              return `${now.getHours()-date.getHours()}小时前`;
            }
      } else {
        return `${date.getYear()}年${date.getMonth()}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`;
      }
    }
  }

  render() {
    let user = this.props.status.user;
    let status = this.props.status;
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
                <Text style={styles.relaseTime}>{this.getCreatedTime(status.created_at)}</Text>
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

          {/* begin: Three buttons at bottom */}
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
          {/* end: Three buttons at bottom */}
        </View>
      </View>
    );
  }
}

{/* 终于找到坑了， container不能设置flex:1，否则所有的cell都是登高的。
    如果cell的内容多少不一致，就会导致cell显示不全*/}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'rgb(226, 226, 226)',
  },
  wrapper: {
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgb(252, 252, 252)',
  },
  baseInfo: {
    height: 64,
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
