
import { Text } from 'react-native';


const PostScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

export default PostScreen;