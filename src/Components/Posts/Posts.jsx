import "./Posts.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Posts(){

    const [postList, setPostList] = useState(null);

    useEffect(() => {

        try {
            
            const data = async() => {

                const posts = await axios.get("http://localhost:8080/posts");
                setPostList(posts.data);
            }
            data()

        } catch (error) {
            console.log(error)
        }
    }, [])

    if(postList === null){

        return<div>No posts Yets</div>
    }
    if(postList.length === 0){

        return<div>Loading</div>
    }

    return(
        <article className="posts">
            <h1 className="posts__heading">Latest Post</h1>
            <div className="posts__container">
                {postList.map((post) => (
                    <Link className="posts__link" key={post.id} to={`/post/${post.id}`}>
                    <div className="posts__items">
                        <h2 className="posts__title">{post.title}</h2>
                        <p className="posts__info mediumBody">{post.description}</p>
                    </div>
                    </Link>
                )).reverse()}
            </div>
        </article>
    );
}

export default Posts;
