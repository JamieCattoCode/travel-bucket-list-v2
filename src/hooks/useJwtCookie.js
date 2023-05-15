import { useEffect, useState } from "react";

import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

const useJwtCookie = () => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const userToken = Cookie.get('userToken');
        if (userToken) {
            const { user: userFromCookie } = jwtDecode(userToken);
            setUser(userFromCookie)
        }
    }, []);

    return { token: userToken, user };
};

export default useJwtCookie;