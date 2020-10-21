import {connect} from "react-redux";
import {getUsers} from "../redux/reducers/user/thunks";
import Users from "../Components/pages/Users/Users";


const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
        isUsersLoading: state.userReducer.isUsersLoading,
        userError: state.userReducer.userError
    }
};

export default connect(mapStateToProps, {getUsers})(Users)