   /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */

   import React, { Component } from 'react';
   import styles from '../Styles/Main';
   import {
   Text,
   View,
   Image,
   ListView,
   ActivityIndicator,
   TouchableHighlight,
   NavigatorIOS,
   } from 'react-native';

   class SearchForm extends Component {
    constructor(props){
      super(props);

    }
    render(){
      return(
        <View style={styles.loading}>
          <Text>搜索</Text>
        </View>
      );
    }

   }
   export {SearchForm as default };
