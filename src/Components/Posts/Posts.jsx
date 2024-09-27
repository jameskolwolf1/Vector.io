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
    })

    if(postList === null){

        return<div>Loading</div>
    }

    return(
        <article>
            <h1>Latest Post</h1>
            <div>
                {postList.map((post) => (
                    <Link>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                    </Link>
                )).reverse()}
            </div>
        </article>
    );
}

export default Posts;
