const endpoints = {
    signup: '/signup',
    login: '/login',
    auth: '/auth',
    getAllUser: '/users/:role',
    addNewPost: '/new/post/:id_user',
    loadPost: "/posts/:count",
    likInlikePost: "/post/reaction",
    docs:'/api-docs',

    signup_admin: '/admin/signup',
    login_admin: '/admin/login'
}

export default endpoints;