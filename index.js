/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store/store.ts'

const AppRedux = () => {
  //  <Provider store={store}>
  return (
<Provider store={store}>
      <App/>
      </Provider>
  )
   // </Provider>
}
AppRegistry.registerComponent(appName, () => AppRedux);
