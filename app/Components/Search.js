/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import styles from '../Styles/Main';
import SearchForm from './SearchForm';
import {
 Text,
 View,
 Image,
 ListView,
 ActivityIndicator,
 TouchableHighlight,
 NavigatorIOS,
} from 'react-native';

class Search extends Component {
 constructor(props){
   super(props);

 }
 render(){
   return(
         <NavigatorIOS
           style={styles.container}
           initialRoute={{
             title:'搜索',
             component:SearchForm ,
           }}
           shadowHidden={true}
           barTintColor="darkslateblue"
           titleTextColor="rgba(255,255,255,0.8)"
           tintColor="rgba(255,255,255,0.8)"
           translucent={true} //导航栏是否为半透明
         />
   );
 }

}
export {Search as default };
