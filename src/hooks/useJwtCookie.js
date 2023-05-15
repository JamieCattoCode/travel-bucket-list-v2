import { useEffect, useState } from "react";

import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

const useJwtCookie = (tokenName) => {

    const [ userId, setUserId ] = useState(null)

    useEffect(() => {
        const userToken = Cookie.get(tokenName);
        if (userToken) {
            const {userId: userIdFromCookie} = jwtDecode(userToken);
            console.log(userIdFromCookie)
            setUserId(userIdFromCookie)
        }
    }, []);

    return { userId };
};

export default useJwtCookie;