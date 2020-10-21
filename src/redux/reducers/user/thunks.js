import {userAPI} from "../../../api/userAPI";
import {setUserError, setUserLoading, setUserProfile, setUserProfileLoading, setUsers,} from "./actions";
import {ErrorMsg} from "../../../constant/errorMsg";

export const getUsers = () => async dispatch => {

    try {
        dispatch(setUserLoading(true));

        const {data: users} = await userAPI.getUsers();

        if (!users.length) {
            dispatch(setUserError(ErrorMsg.USERS_NOT_PRESENT))
        }

        dispatch(setUsers(users));
        dispatch(setUserLoading(false));

    } catch (e) {
        dispatch(setUserLoading(false));
        dispatch(setUserError(ErrorMsg.SERVER_ERR))

    }
};
export const getUserProfileById = userId => async dispatch => {

    try {
        dispatch(setUserProfileLoading(true));

        const {data: userProfile} = await userAPI.getUserById(userId);

        dispatch(setUserProfile(userProfile));
        dispatch(setUserProfileLoading(false));

    } catch (e) {
        dispatch(setUserProfileLoading(false));

    }
};