const SET_POSTS = "SET_POSTS";
const SET_COMMENTS = "SET_COMMENTS";

let initialState = {
    posts: [ ],
    comments: []
}


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts }
        }

        case SET_COMMENTS: {
            return { ...state, comments: action.comments }
        }

        default:
            return state;
    }
}

export const setPostsAC = (posts) => ({ type: SET_POSTS, posts });
export const setCommentsAC = (comments) => ({ type: SET_COMMENTS, comments });

export default postsReducer;