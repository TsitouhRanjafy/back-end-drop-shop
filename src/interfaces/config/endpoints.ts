const endpoints = {
    signup: '/signup',
    login: '/login',
    auth: '/auth',
    signup_admin: '/admin/signup',
    login_admin: '/admin/login',

    getAllUser: '/users/:role/:skip/:take',

    addNewPost: '/post/new',
    loadPost: "/posts/:count",
    loadLocalProduct: "/posts/product/local/:country",
    likeInlikePost: "/post/reaction",
    commentPost: "/post/comment",

    docs:'/api-docs',

}

export default endpoints;