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

        <article className="articlePage">
            <h1 className="articlePage__title">{component.title}</h1>
            <div className="articlePage__img-container">
                <img className="articlePage__img1" src={component.image_product}/>
                <img className="articlePage__img2" src={component.image_info}/>
            </div>
            <p className="articlePage__info">{component.general_info}</p>

            <div className="articlePage__button-container">
                <Link className="articlePage__button-link" to={`/computerComponents/${id}/posts`} >
                <button className="articlePage__button-making">Making a Post</button>
                </Link>
                <Link className="articlePage__button-link" to={`/thisComponentPosts/${id}/posts`}>
                <button className="articlePage__button-looking">Look at Posts</button>
                </Link>
            </div>
            <div className="articlePage__solution">
                {solutionList.map((sol, index) =>(
                    <div className="articlePage__container-sol" key={sol.id}>
                        <div className="articlePage__sol-items">
                        <h2 className="articlePage__sol-title">Solution</h2>
                        <h2 className="articlePage__sol-index">{index + 1}</h2>
                        </div>
                        <p className="articlePage__info">{sol.text}</p>
                        
                    </div>
                ))}
            </div>
            <div className="articlePage__versionOrModels">
                <h2>Versions and Models</h2>
                {versionOrModelList.map((ver) => (
                    <div key={ver.id} className="articlePage__container-ver">
                    <h2 className="articlePage__ver-title">{ver.title}</h2>
                    <p className="articlePage__ver-info">{ver.info1}</p>
                    <p className="articlePage__ver-info">{ver.info2}</p>
                    <p className="articlePage__ver-info">{ver.info3}</p>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default ArticlePage;
