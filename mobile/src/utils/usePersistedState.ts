import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


function usePersistedState(key: string, initialState: any) {

    const [state, setState] = useState(initialState);

    useEffect(()=>{
        AsyncStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}

export default usePersistedState;