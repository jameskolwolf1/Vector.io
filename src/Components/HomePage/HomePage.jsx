import './HomePage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



function HomePage(){

    const [componentList, setComponentList] = useState([]);
    const [postList, setPostList] = useState([]);
    useEffect(() => {

        try {

            const getList = async () =>{

                const dataComponents = await axios.get("http://localhost:8080/computerComponents");
                const list = dataComponents.data;
                const dataPost = await axios.get("http://localhost:8080/posts");
                setPostList(dataPost.data);
                setComponentList(list);
                
            }

            getList();
            
        } catch (error) {
            
            console.log(error);
        }
    }, [])

    if(componentList.length === 0){

        return <h2>Loading</h2>
    }

    const threeComponents = () => {

        const data = []
        for(let i = 0; i < 3; i++){

            data.push(componentList[i])
        }

        return data;
    }

    console.log(threeComponents(), 'three')

    return(
        <>
        <section className='main'>
            <h1 className='main__title1'>Welcome To </h1>
            <h1 className='main__title2'>Vector.io</h1>
            <p className='main__subtitle'>(Not the game, but all connected)</p>
            <p>AMazingNESS</p>
            <canvas>
                
            </canvas>
        </section>
        <article className='articles'>
            <div className='articles__container-cards'>
                {threeComponents().map((comp) => (
                    <div className='articles__card' key={comp.id}>
                        <div className='articles__card-items'>
                        <img className='articles__card-img' src={comp.image_product}/>
                        <h2 className='articles__card-title'>{comp.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>New posts</h2>
            </div>
        </article>
        </>
    );
}

export default HomePage;