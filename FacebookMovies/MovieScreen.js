'use strict';

import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import getImageSource from './getImageSource';
import getStyleFromScore from './getStyleFromScore';
import getTextFromScore from './getTextFromScore';

export default class MovieScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            source={getImageSource(this.props.movie)}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>
              {this.props.movie.title}
            </Text>
            <Text>{this.props.movie.year}</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                {this.props.movie.mpaa_rating}
              </Text>
            </View>
          </View>
          <Ratings ratings={this.props.movie.ratings} />
        </View>
        <View style={styles.separator} />
        <Text>
          {this.props.movie.synopsis}
        </Text>
        <View style={styles.separator} />
        <Cast actors={this.props.movie.abridged_cast} />
      </ScrollView>
    );
  };
}

// ES5
var Ratings = React.createClass({
  render() {
    var criticsScore = this.props.ratings.critics_score;
    var audienceScore = this.props.ratings.audience_score;
    return (
      <View>
        <View style={styles.rating}>
          <Text style={styles.ratingTitle}>Critics</Text>
          <Text style={[styles.ratingValue, getStyleFromScore(criticsScore)]}>
            {getTextFromScore(criticsScore)}
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingTitle}>Audience</Text>
          <Text style={[styles.ratingValue], getStyleFromScore(criticsScore)}>
            {getTextFromScore(criticsScore)}
          </Text>
        </View>
      </View>
    );
  }
});

// ES6
class Cast extends Component {
  render() {
    if (!this.props.actors) {
      return null;
    }
    return (
      <View>
        <Text style={styles.castTitle}>Actors</Text>
        {this.props.actors.map(actor=>
          <Text key={actor.name} style={styles.castActor}>
            &bull; {actor.name}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  rightPane: {
    justifyContent: 'center',
    flex: 1,
  },
  movieTitle: {
    // flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    marginTop: 10,
  },
  ratingTitle: {
    fontSize: 14,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  mpaaWrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
  },
  mpaaText: {
    fontFamily: 'Palatino',
    fontSize: 13,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  castTitle: {
    fontWeight: '500',
    marginBottom: 3,
  },
  castActor: {
    marginLeft: 2,
  },
});
