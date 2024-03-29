import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;