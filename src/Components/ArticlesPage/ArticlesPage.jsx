import './ArticlesPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ArticlesPage(){

    const [componentList, setComponentList] = useState([]);
    let { id } = useParams();

    useEffect(() => {

        try {
            
            const list = async () => {

                const data = await axios.get(`http://localhost:8080/computerComponents`);
                
                setComponentList(data.data);
            }

            list();

        } catch (error) {

            console.log(error);
        }
    })

    if(componentList.length === 0){

        return <div>Loading</div>
    }

    return(

        <article className='articlesPage'>
            {componentList.map((comp) => (
                <Link className='articlesPage__card-link'
                key={comp.id}
                to={`/computerComponents/${comp.id}`}
                >
                <div className='articlesPage__card' key={comp.id}>
                    <div className='articlesPage__card-items'>
                        <img className='articlesPage__card-img' src={comp.image_product} />
                        <h2 className='articlesPage__card-title'>{comp.title}</h2>
                    </div>
                </div>
                </Link>
            ))}
        </article>
    );
}

export default ArticlesPage;