import './ThisComponentPosts.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
function ThisComponentPosts(){

    const [component, setComponent] = useState(null);
    const [postList, setPostList] = useState(null);
    let {id} = useParams();

    useEffect(() => {

        try {
            
            const list = async() => {

                const posts = await axios.get(`http://localhost:8080/computerComponents/${id}/posts`);
                const component = await axios.get(`http://localhost:8080/computerComponents/${id}`);
                setComponent(component.data);
                setPostList(posts.data);
                console.log(component.data);
            }

            list();

        } catch (error) {
            console.log(error);
        }
    },[])

    if(component === null){

        return<div>Loading</div>
    }
    if(postList === 0){

        return<div>Loading</div>
    }

    return(
        <article className='thisComponent'>
            <h1 className='thisComponent__title'>{`Posts For ${component.title}`}</h1>

            <div className='thisComponent__lists'>
                {postList.map((post) => (
                    <Link className='thisComponent__link' key={post.id} to={`/post/${post.id}`}>
                    <div className='thisComponent__items'>
                        <h2 className='thisComponent__items-title'>{post.title}</h2>
                        <p className='thisComponent__items-des'>{post.description}</p>
                    </div>
                    </Link>
                )).reverse()}
            </div>
        </article>
    );
}

export default ThisComponentPosts;