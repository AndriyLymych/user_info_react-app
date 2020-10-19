import axiosInstance from '../helpers/axiosInstance'

export const userAPI = {

    getUsers: () => {

        return axiosInstance.get(`/users`)
    },
    getUserById: userId => {

        return axiosInstance.get(`/users/${userId}`)
    }
};