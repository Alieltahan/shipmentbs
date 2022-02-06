import Header from './layout/Header';
import Trackshipment from './pages/Trackshipment';
import ShipmentBody from './layout/ShipmentBody';
import { store } from './components/store/confStore';
import { Provider } from 'react-redux';
import './mainStyles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ShipmentBody />
      <Trackshipment />
    </Provider>
  );
}

export default App;
