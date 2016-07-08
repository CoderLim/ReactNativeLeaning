import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import getStyleFromScore from './getStyleFromScore';
import getImageSource from './getImageSource';
import getTextFromScore from './getTextFromScore';

export default class MovieCell extends Component {
  render() {
    var criticsScore = this.props.movie.ratings.critics_score;

    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}
        >
          <View style={styles.row}>
            <Image
              source={getImageSource(this.props.movie, 'det')}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {this.props.movie.title}
              </Text>
              <Text style={styles.movieYear} numberOfLines={1}>
                {this.props.movie.year}
                {' '}&bull;{' '}
                <Text style={getStyleFromScore(criticsScore)}>
                  critics {getTextFromScore(criticsScore)}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  movieYear: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 93,
    marginRight: 10,
    width: 150,
  },
});
