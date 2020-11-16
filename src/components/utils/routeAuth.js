import React from 'react';
import { Redirect } from 'react-router';




const WithAuth = (Component) => {
	const AuthRoute = () => {
    const isAuth = JSON.parse(localStorage.getItem("loginData"));
		if (isAuth.token) {
			return <Component />;
		} else {
			return <Redirect to='/' />;
		}
	};

	return AuthRoute;
};

export default WithAuth;