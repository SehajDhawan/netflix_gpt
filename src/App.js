import Body from './components/Body';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
function App() {
  return (
<h1 >
      <Provider store={appStore}>
        <Body/>
        </Provider>
    </h1>
  );
}

export default App;