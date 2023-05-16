import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import getUserById from "../requests/getUserById";

const useJwtCookie = async (tokenName, setter) => {

    token = Cookie.get(tokenName);
    if (token) {
        const { userId } = (jwtDecode(userToken))
        const fullUser = getUserById(userId)
        setter(fullUser)
    }

};

export default useJwtCookie;