import {createStore, combineReducers} from "redux";
import bucket from "./modules/bucket";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({bucket})// combineReducers는 리듀서를 하나로 합쳐준다. store에는 한개의 reducer만을 써야하기 때문이다.

const store = createStore(rootReducer);

export default store
