import "./ArticlePage.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
function ArticlePage(){

    let { id } = useParams();
    const [component, setComponent] = useState(null);
    const [solutionList, setSolutionList] = useState(null);
    const [versionOrModelList, setVersionOrModelList ] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {

        try {
            
            const comp = async () => {

                const data = await axios.get(`http://localhost:8080/computerComponents/${id}`);
                const solutions = await axios.get(`http://localhost:8080/computerComponents/${id}/solutions`);
                const versions = await axios.get(`http://localhost:8080/computerComponents/${id}/versionOrModels`);
                setComponent(data.data);
                setSolutionList(solutions.data);
                setVersionOrModelList(versions.data);
            }

            comp();

        } catch (error) {
            
            console.log(error);
        }
    }, [])

    if(component === null){

        return<div>Loading</div>
    }
    if(versionOrModelList === null){

        return<div>Loading</div>
    }


    return(

        <article className="article">
            <h1 className="article__title">{component.title}</h1>
            <div className="article__img-container">
                <img className="article__img1" src={component.image_product}/>
                <img className="article__img2" src={component.image_info}/>
            </div>
            <p className="article__info">{component.general_info}</p>

            <div className="article__button-container">
                <Link className="article__button-link" to={`/computerComponents/${id}/posts`} >
                <button className="article__button-making">Making a Post</button>
                </Link>
                <Link className="article__button-link" to={`/thisComponentPosts/${id}/posts`}>
                <button className="article__button-looking">Look at Posts</button>
                </Link>
            </div>
            <div className="article__solution">
                {solutionList.map((sol, index) =>(
                    <div className="article__container-sol" key={sol.id}>
                        <div className="article__sol-items">
                        <h2 className="article__sol-title">Solution</h2>
                        <h2 className="article__sol-index">{index + 1}</h2>
                        </div>
                        <p className="solution__info">{sol.text}</p>
                        
                    </div>
                ))}
            </div>
            <div className="article__versionOrModels">
                <h2>Versions and Models</h2>
                {versionOrModelList.map((ver) => (
                    <div key={ver.id} className="article__container-ver">
                    <h2 className="article__ver-title">{ver.title}</h2>
                    <p className="article__ver-info">{ver.info1}</p>
                    <p className="article__ver-info">{ver.info2}</p>
                    <p className="article__ver-info">{ver.info3}</p>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default ArticlePage;
