import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
const App = () => {
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

export default App;


/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */




