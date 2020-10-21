import axiosInstance from '../helpers/axiosInstance'

export const postAPI = {

    getPostsByUserId: userId => {

        return axiosInstance.get(`/posts?userId=${userId}`)
    },
    addPostByUser: (title, body, userId) => {

        return axiosInstance.post(`/posts`, {title, body, userId})
    },
    getPostById: postId => {

        return axiosInstance.get(`/posts/${postId}`)
    },
    editPost: (postId, title, body) => {

        return axiosInstance.put(`/posts/${postId}`, {title, body})
    },
    deletePost: postId => {

        return axiosInstance.delete(`/posts/${postId}`)
    },
    getCommentsForPost:  postId => {

        return axiosInstance.get(`/comments?postId=${postId}`)
    },
};