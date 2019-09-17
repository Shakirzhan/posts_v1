import React from "react";
import './posts.css';

let Posts = (props) => {
    let newArr = {...props.posts};
    for (let g in newArr) {
        props.posts[g].comments = [];
    }
    for(let k in props.comments) {
        for (let i in props.posts) {
            if (props.posts[i]["id"] === props.comments[k]["postId"]) {
                newArr[i]["comments"].push(props.comments[k]);
            }
        }
    }
    let posts = props.posts;

    function Element() {
        return posts.map(el =>
            <div key={el.id}>
                <div key={el.id}><b>Post:</b></div>
                    <div className="panel panel-default">
                        <div className="panel-heading">{el.title}</div>
                        <div className="panel-body">
                            {el.body}
                            <div><b>Comments:</b></div>
                            {el.comments.map(ch =>
                                <div key={ch.id} className="panel panel-primary">
                                    <div className="panel-heading">{ch.name}</div>
                                    <div className="panel-body">
                                        {ch.body}
                                    </div>
                                </div>)}
                        </div>
                </div>
            </div>
        );
    }
    return(<Element />);
}




export default Posts;