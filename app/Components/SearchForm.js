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
              // clearButtonMode="unless-editing" //清除按钮 always , never ,  while-editing , unless-editing
              clearTextOnFocus={true} //文本框进入焦点状态是否情况内容
              // enablesReturnKeyAutomatically={true} //没有内容的时候禁用回车键,有内容开启回车键
              autoFocus={true}
              returnKeyType="search" // 回车键 go , join , next , send , search
              // placeholderTextColor="#6435c9"
              // secureTextEntry // 密码
              // autoFocus //默认选中
              // autoCorrect={false} //是否联想输入
              // defaultValue="火星救援"
              // editable={false} //能否输入内容
              // keyboardType ="web-search" //numeric:数字 , email-address:邮件 , 网址 :url ,web: web-search
              // multiline 多行输入 bool 值

             />
          </View>
        </View>

      );
    }

   }
   export {SearchForm as default };
