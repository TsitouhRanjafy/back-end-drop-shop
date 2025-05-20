const endpoints = {
    signup: '/signup',
    login: '/login',
    auth: '/auth',
    signup_admin: '/admin/signup',
    login_admin: '/admin/login',

    getAllUser: '/users/:role',

    addNewPost: '/post/new/:id_user',
    loadPost: "/posts/:count",
    likeInlikePost: "/post/reaction",
    commentPost: "/post/comment",

    docs:'/api-docs',

}

export default endpoints;