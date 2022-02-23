import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { firstMiddleware, secondMiddleware, thirdMiddleware } from "./middleware/middlewares";

import reducers from "./reducers/index";

const middleware = [thunk, firstMiddleware, secondMiddleware, thirdMiddleware];

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;
