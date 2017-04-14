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
   TextInput,
   } from 'react-native';

   class SearchForm extends Component {
    constructor(props){
      super(props);

    }
    render(){
      return(
        <View style={[styles.container ,{paddingTop:60}]}>
          <View style={{
            paddingTop:7,
            paddingLeft:7,
            paddingRight:7,
            borderColor:"rgba(100,53,201,0.1)",
            borderBottomWidth:1,
          }}>
            <TextInput
              style={{height:50}}
              placeholder="搜索 ..."
             />
          </View>
        </View>

      );
    }

   }
   export {SearchForm as default };
