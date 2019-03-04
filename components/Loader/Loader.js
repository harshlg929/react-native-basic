import React from 'react';
import { ActivityIndicator } from 'react-native';
import { WHITE } from './../../util/color-contants';


const Loader = () => {
    return (
        <ActivityIndicator size="large" color={WHITE} />
    );
};

export default (Loader);

