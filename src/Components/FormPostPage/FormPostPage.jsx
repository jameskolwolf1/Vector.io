import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./FormPostPage.scss";



function FormPostPage(){
    const [postList, setPostList] = useState([]);
    let {id} = useParams();
    useEffect(() => {

        try {
            
            const list = async() => {

                const data = await axios.get(`http://localhost:8080/computerComponents/${id}/posts`);
                setPostList(data.data);
                console.log(data.data);
            }

            list();

        } catch (error) {
            console.log(error);
        }
    },[])

    if(postList.length === 0){

        return<div>Loading</div>
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:8080/computerComponents/${id}/posts`, {

                title : e.target.title.value,
                description: e.target.description.value
            });

            if(res.status === 200){

                e.target.reset();

            }
            
        } catch (error) {
            
            alert("Error making a Post, please check the inputs felids")
        }
    }

    return(

        <section className="section">
            <h1 className="section__title">Make a Post</h1>
            <form onSubmit={handleSubmit} className="section__form">
                <div className="section__form-one">
                <h2 className="section__form-title">Title</h2>
                <input name="title" className="section__form-input"></input>
                </div>
                <div className="section__form-two">
                <h2 className="section__form-des">description</h2>
                <textarea name="description" className="section__form-text"></textarea>
                </div>
                <button type="submit" className="section__button">Post</button>
            </form>
            <div className="section__lists-posts">
                <h2 className="section__lists-title">Posts About DP Cables</h2>
                {postList.map((post) => (
                    <Link key={post.id} to={`/post/${post.id}`}>
                    <div className="section__post">
                        <h2 className="section__post-title">{post.title}</h2>
                        <p className="section__post-des">{post.description}</p>
                    </div>
                    </Link>
                )).reverse()}
            </div>
        </section>
    );
}
export default FormPostPage;