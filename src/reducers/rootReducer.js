import { combineReducers } from 'redux';

import authReducer from './authReducer';
import workspaceReducer from './workspaceReducer';
import todoListReducer from './todoListReducer';

export default combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
  todoList: todoListReducer
});
