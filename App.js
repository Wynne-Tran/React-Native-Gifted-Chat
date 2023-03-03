import React, {useState, useCallback} from 'react';
import { StyleSheet, View} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import { NavBar } from './navbar';

const App = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Welcome !',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'UserChar',
        avatar: '',
      },
      image: '',
      file: '',
    },
  ]);

const onSend = useCallback((messages = []) => {
  setMessages(previousMessages =>
    GiftedChat.append(previousMessages, messages),
  );
}, []);

const renderSend = (props) => {
  return (
    <Send {...props}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          type="font-awesome"
          name="paperclip"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 10,
            marginRight: 10,
            transform: [{rotateY: '180deg'}],
          }}
          size={25}
          color='blue'
          tvParallaxProperties={undefined}
        />
        <Icon
          type="font-awesome"
          name="send"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginBottom: 10, marginRight: 10}}
          size={25}
          color='orange'
          tvParallaxProperties={undefined}
        />
      </View>
    </Send>
  );
};

const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#2e64e5',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
      }}
    />
  );
};

const scrollToBottomComponent = () => {
  return <FontAwesome name="angle-double-down" size={22} color="#333" />;
};

  return (
    <View style={styles.container}>
      <NavBar />
      <GiftedChat
        messages={messages}
        //showAvatarForEveryMessage={true}
        //showUserAvatar={true}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onSend={messages => onSend(messages)}
        user={{
          _id: 2,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


