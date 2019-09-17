import React from "react";
import {setCommentsAC, setPostsAC} from "../postsReducerc";
import {connect} from "react-redux";
import * as axios from "axios";
import Posts from "./Posts";

class PostsContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/1/posts').then(
            response => {
                this.props.setPosts(response.data);
            });
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(
                response_v1 => {
                    this.props.setComments(response_v1.data);
                });
    }
    render() {
        return (
            <Posts posts={this.props.posts}
                   comments={this.props.comments} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        comments: state.postsPage.comments
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setPostsAC(posts));
        },
        setComments: (comments) => {
            dispatch( setCommentsAC(comments) );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);