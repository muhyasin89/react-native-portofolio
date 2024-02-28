import { Button, View, Text } from 'react-native';
import React from 'react';


function PostsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Post Screen</Text>
        <Button
          title="Go to Home... again"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  export default PostsScreen;