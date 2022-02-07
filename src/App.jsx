import Main from './layout/Main';
import { store } from './components/store/confStore';
import { Provider } from 'react-redux';
import './mainStyles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
