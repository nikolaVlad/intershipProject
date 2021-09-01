/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../../utils/localStorageService';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={props => (
            getToken() ?
                <Component {...props} />
            : <Redirect to="/log-in" />
        )} />
    );
};

export default PrivateRoute;
