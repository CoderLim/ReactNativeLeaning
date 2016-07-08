'use strict';

import React, { Component } from 'react';
import {
  Alert,
  ActivityIndicator,
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import dismissKeyboard from 'dismissKeyboard';

import MovieCell from './MovieCell';
import MovieScreen from './MovieScreen';
import SearchBar from './SearchBar';

const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
const API_KEYS = [
  '7waqfqbprs7pajbz28mqf6vz',
];

export default class SearchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoadingTail: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      filter: '',
      queryNumber: 0,
    };
  }

  componentDidMount() {
    this.searchMovies('');
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }

  _urlForQueryAndPage(query: string, pageNumber: number) : string {
    if (query) {
      return (
        API_URL + 'movies.json?apikey=' + API_KEYS[0] + '&q=' +
        encodeURIComponent(query) + '&page_limit=20&page=' + pageNumber
      );
    }
    return (
      API_URL + 'lists/movies/in_theaters.json?apikey=' + API_KEYS[0] + '&page_limit=20&page=' + pageNumber
    );
  }

  // 这里参数是text而不是event！
  onSearchChange(text: string) {
      this.timer && clearTimeout(this.timer);
      var filter = text.toLowerCase();
      console.log(filter);
      this.timer = setTimeout(() => {
        this.searchMovies(filter);
      }, 100);
  }

  searchMovies(query: string) {
    this.setState({
      isLoading: true,
      isLoadingTail: false,
    });
    fetch(this._urlForQueryAndPage(query, 1))
      .then((response) => response.json())
      .catch((error) => {
        this.setState({
          dataSource: this.getDataSource([]),
          isLoading: false,
        });
      })
      .then((responseData) => {
        this.setState({
          isLoading: false,
          dataSource: this.getDataSource(responseData.movies),
        })
      })
      .done();
  }

  selectMovie(movie) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: movie.title,
        component: MovieScreen,
        params: {movie},
      });
    }
  }

  hasMore() {

  }

  onEndReached() {
    // Alert.alert('tip', 'reach the end');
    console.log('reach the end!');
  }

  getDataSource(movies: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(movies);
  }

  renderRow(movie: Object,
            sectionID: number | string,
            rowID: number | string,
            highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void) {
    return (
      <MovieCell
        key={movie.id}
        onSelect={() => this.selectMovie(movie)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        movie={movie}
      />
    );
  }

  renderFooter() {
    console.log('renderFooter:'+ this.state.isLoadingTail);
    if (!this.state.isLoadingTail) {
      return (<View style={[styles.scrollSpinner, {flex:1, alignItems: 'center'}]}>
                <Text>-----The End-----</Text>
              </View>);
    }
    return <ActivityIndicator style={styles.scrollSpinner} />
  }

  renderSeparator(sectionID: number|string,
                  rowID: number|string,
                  adjacentRowHighlighted: boolean) {
  }

  render() {
    var content = this.state.dataSource.getRowCount() === 0 ?
      <NoMovies
        isLoading={this.state.isLoading}
      /> :
      <ListView
        ref="listview"
        renderSeparator={this.renderSeparator.bind(this)}
        dataSource={this.state.dataSource}
        renderFooter={this.renderFooter.bind(this)}
        renderRow={this.renderRow.bind(this)}// 刚开始没bind，所以点击cell时一直提示Cannot read property ‘selectMovie’
        onEndReached={this.onEndReached.bind(this)}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;
      return (
        <View style={styles.container}>
          <SearchBar
            onSearchChange={this.onSearchChange.bind(this)}
            isLoading={this.state.isLoading}
            onFocus={() =>
              this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({x: 0, y: 0})
            }
          />
          <View style={styles.separator} />
          {content}
        </View>
      );
  }
}

class NoMovies extends Component {
  render() {
    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noMoviesText}>No movies found</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor:'rgba(0,0,0,0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {

  },
});
