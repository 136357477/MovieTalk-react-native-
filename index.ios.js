/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import style from './app/Styles/Main';
import MovieList from './app/Components/MovieList'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'

class MovieTalk extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        <MovieList />
      );
    }
}
AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
