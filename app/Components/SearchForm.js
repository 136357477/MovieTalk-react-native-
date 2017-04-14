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
              clearButtonMode="while-editing" //清除按钮 always , never ,  while-editing , unless-editing
              // clearTextOnFocus={true} //文本框进入焦点状态是否情况内容
              // enablesReturnKeyAutomatically={true} //没有内容的时候禁用回车键,有内容开启回车键
              // autoFocus={true}
              returnKeyType="search" // 回车键 go , join , next , send , search
              onFocus={() => console.log('onFocus')} //文本框获得焦点
              onBlur={() => console.log('onBlur')} //离开文本框
              onChange={() => console.log('onChange')} // 文本框文字发送变化时
              onChangeText={(text)=> console.log(text)} // 文本框文字发送变化时 区别可以把有变化的文字作为给他绑定函数的一个参数
              onEndEditing={() => console.log('onEndEditing')} // 完成输入 的时候会执行
              onSubmitEditing={() => console.log('onSubmitEditing')} // 文本框输入完按回车键执行
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
