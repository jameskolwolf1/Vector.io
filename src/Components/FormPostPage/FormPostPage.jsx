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

        <section className="formPage">
            <h1 className="formPage__title">Make a Post</h1>
            <form onSubmit={handleSubmit} className="formPage__form">
                <div className="formPage__form-one">
                <h2 className="formPage__form-title">Title</h2>
                <input name="title" className="formPage__form-input mediumBody"></input>
                </div>
                <div className="formPage__form-two">
                <h2 className="formPage__form-des">Description</h2>
                <textarea name="description" className="formPage__form-text mediumBody"></textarea>
                </div>
                <div className="formPage__button-container">
                <button type="submit" className="formPage__button mediumBody">Post</button>
                </div>
            </form>
            <div className="formPage__lists-posts">
                <h2 className="formPage__lists-title">Posts About DP Cables</h2>
                <div className="formPage__lists-container">
                {postList.map((post) => (
                    <Link className="formPage__post-link" key={post.id} to={`/post/${post.id}`}>
                    <div className="formPage__post">
                        <h2 className="formPage__post-title">{post.title}</h2>
                        <p className="formPage__post-des mediumBody">{post.description}</p>
                    </div>
                    </Link>
                )).reverse()}
                </div>
            </div>
        </section>
    );
}
export default FormPostPage;