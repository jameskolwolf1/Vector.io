import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Canvas, useFrame  } from '@react-three/fiber';
// import {modelGlobal} from './three';
import { Mesh } from "three";




function HomePage(){

    const [componentList, setComponentList] = useState([]);
    const [postList, setPostList] = useState([]);
    const modelGlobalContainer = useRef(undefined);

    
    useEffect(() => {



        try {

            if(modelGlobalContainer.current){

                modelGlobal(modelGlobalContainer.current);
            }

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
    if(postList.length === 0){

        return <h2>Loading</h2>
    }

    const fourComponents = () => {

        const data = []
        for(let i = 0; i < 4; i++){

            data.push(componentList[i])
        }

        return data;
    }

    const fourPosts = () => {

        const data = []
        for(let i = 0; i < 4; i++){

            data.push(postList[i])
        }

        return data;
        
    }

    return(
        <>
        <section className='home'>
            <h1 className='home__title1'>Welcome To </h1>
            <h1 className='home__title2'>Vector.io</h1>
            <p className='home__subtitle mediumBody'>(Not the game, but all connected)</p>

            {/* <div className='test' ref={modelGlobal}></div> */}
            <Canvas>
            
            <hemisphereLight args={['#000000', '#ffffff']}/>
                <Vector />
            </Canvas>
            <h2 className='home__subtitle' >Four latest Articles</h2>
            <div className='home__container-cards'>
                {fourComponents().map((comp) => (
                    <Link className='home__link' key={comp.id} to={`/computerComponents/${comp.id}`}>
                    <div className='home__card'>
                        <div className='home__card-items'>
                        <img className='home__card-img' src={comp.image_product}/>
                        <h2 className='home__card-title'>{comp.title}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            <h2 className='home__subtitle'>Four latest Posts</h2>
            <div className='home__container-post'>
                {fourPosts().map((post) => (
                    <Link className='home__link-posts' key={post.id} to={`/post/${post.id}`}>
                    <div className='home__post'>
                        <div className='home__post-items'>
                        <h2 className='home__posts-title'>{post.title}</h2>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </section>

        </>
    );
}

function Vector(){

    const meshRef = useRef();

    useFrame(() => {

        if(meshRef.current){

            meshRef.current.rotation.x += .01;
            meshRef.current.rotation.y += 0.04;
        }

        
        
    });

    return(
        <mesh ref={meshRef}>
                    <dodecahedronGeometry args={[3, 1]} />
                    <meshStandardMaterial 
                    color={"black"}
                    flatShading={true}/>
                    <meshBasicMaterial 
                    color={"white"}
                    wireframe={true}/>
                </mesh>
    );
}

export default HomePage;
import './HomePage.scss';
import { PerspectiveCamera } from 'three';import { color } from 'three/webgpu';

