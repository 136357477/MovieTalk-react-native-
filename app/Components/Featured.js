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
   Navigator,
 } from 'react-native';

 class Featured extends React.Component {
   render(){
     return(
       <View style={styles.loading}>
         <Text>Featured</Text>
       </View>
     );
   }
 }
 export {Featured as default };
