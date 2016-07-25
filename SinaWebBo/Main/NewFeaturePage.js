import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Alert,
} from 'react-native';
import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
];

export default class NewFeaturePage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      dataSource: new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
      }).cloneWithPages(IMGS),
    };
  }

  _renderPage(data: Object, pageID: number|string,){
    console.log(this.props);
    if (pageID == IMGS.length-1) {
      return (
        <Image
          key={'img_' + pageID}
          source={{uri: data}}
          style={styles.page}
          >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.props.donePreview}>
              <Text style={styles.btnText}>进入微博</Text>
            </TouchableHighlight>
          </View>
        </Image>
      );
    }
    return (
      <Image
        key={'img_' + pageID}
        source={{uri: data}}
        style={styles.page}
        />
    );
  }

  render() {
    // renderPage忘了bind了，导致在_renderPage中的donePreview一直undefined
    return (
      <ViewPager
        style={{flex: 1,}}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  page: {
    width: deviceWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    borderColor: 'orange',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius:5,
    overflow: 'hidden',
  }
});
