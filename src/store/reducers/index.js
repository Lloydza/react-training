import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    // ...your other reducers here
	form: formReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

module.exports = rootReducer;