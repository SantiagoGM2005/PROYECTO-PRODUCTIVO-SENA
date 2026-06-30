import{ combineReducers, createStore, applyMiddleware} from "redux";
import storage from 'redux-persist/es/storage';
import { persistStore, persistReducer } from "redux-persist"
import { ProductListReducer, productReducer } from "./Reducers/Product";
import { thunk } from "redux-thunk"; 
import { userLoginReducer, userRegisterReducer } from "./Reducers/User";
import { cartReducer } from "./Reducers/Cart";
const persistConfig = {
  key: 'root',
  storage,
  version:1
}

const rootReducer = combineReducers({
    ProductListReducer,
    productReducer,
    userLoginReducer,
    userRegisterReducer,
    cartReducer,
    
});


const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware) 
);

export const persistor = persistStore(store);