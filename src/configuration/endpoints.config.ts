const endpoints = {
    // auth
    signup: '/signup',
    login: '/login',
    auth: '/auth',
    signup_admin: '/admin/signup',
    login_admin: '/admin/login',

    // user
    getAllUser: '/users/:role/:skip/:take',
    getUserById: '/user', // query: id_user

    // post
    addNewPost: '/post/new',
    loadPost: "/posts/:count",
    loadLocalProduct: "/posts/product/local/:country",
    likeInlikePost: "/post/reaction",
    commentPost: "/post/comment",
    getPostByUserId: "/post", // query id_user

    // comment
    getAllComment: '/comment/all', // query: id_post

    docs:'/api-docs',

}

export default endpoints;