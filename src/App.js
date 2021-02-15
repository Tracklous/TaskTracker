import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Colors } from './themes';
import TrackerScreen from './screens/TrackerScreen/TrackerScreen';
import EditModal from './components/editModal/EditModal';

const App = () => {
  return (
    <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.tealBlue} />
      <View style={styles.body}>
        <SafeAreaView style={styles.container}>
          <TrackerScreen />
        </SafeAreaView>
      </View>
      <EditModal />
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.tealBlue
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});

export default App;
