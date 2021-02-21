import { applyMiddleware, createStore } from 'redux';
import { mainReducer } from './reducer';
import thunk from 'redux-thunk';

const appStore = createStore(
  mainReducer,
  applyMiddleware(thunk)
);

export default appStore;