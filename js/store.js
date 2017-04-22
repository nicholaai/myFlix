import { createStore, compose } from 'redux';
import rootReducer from './reducers';

// if we are in browser and redux dev tools available, run them.
// dont want for node aka pre-rendering on node
const store = createStore(rootReducer, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension() : (f) => f
));

export default store;
