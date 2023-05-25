import { configureStore,combineReducers  } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice  from "./productSlice";



const rootReducer = combineReducers({
  user: userSlice,
  product:productSlice
  
});
const store = configureStore({
  reducer: rootReducer,
});

// const store = configureStore({
//   reducer: { user: userSlice },
//   // Add middleware or other store configurations here
// });

export default store;
