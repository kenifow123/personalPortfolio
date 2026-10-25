import styles from './Projects.module.css'
import ProjectCard from './ProjectCard.jsx'
import odinbook1 from '../assets/odinbook1.png'
import odinbook2 from '../assets/odinbook2.png'
import odinbook3 from '../assets/odinbook3.png'
import waldo1 from '../assets/waldo1.png'
import waldo2 from '../assets/waldo2.png'
import shopping1 from '../assets/shopping1.png'
import shopping2 from '../assets/shopping2.png'
import etchSketch from '../assets/etchsketch.png'
import todo from '../assets/todo.png'
import { useRef } from "react";

const odinBookUrl = 'https://odinbook-frontend-g78u.onrender.com';
const etchSketchUrl = 'https://etch-a-sketch-ntmq.onrender.com';
const photoTaggingUrl = 'https://phototaggingapp-1.onrender.com';
const shoppingCartUrl = 'https://shoppingcartodin.onrender.com';
const todoUrl = 'https://todoodin.onrender.com';


const Projects = () => {
    const odinbookImages = [odinbook1, odinbook2, odinbook3];
    const waldoImages = [waldo1, waldo2];
    const shoppingImages = [shopping1, shopping2];


    return (
        <div id={styles.projects}>
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.cardContainer}>
                    <ProjectCard title={'Odin Book'} images={odinbookImages} projectText={'Fullstack social media application where users can create posts, share images, and like posts  '} url={odinBookUrl} />
                    <ProjectCard title={'Photo Tagging App'} images={waldoImages} projectText={'Fullstack photo tagging game built with React, Express, Prisma, and PostgreSQL.'} url={photoTaggingUrl}/>
                    <ProjectCard title={'Shopping Cart'} images={shoppingImages} projectText={'Browse products, add to cart, and manage quantities before checkout. Built with React, focusing on React Router for navigation and reusable components.'} url={shoppingCartUrl} />
                    <ProjectCard title={'Etch-n-Sketch'} images={[etchSketch]} projectText={'Draw by hovering over a customizable grid using interactive mouse controls and DOM manipulation'} url={etchSketchUrl} />
                    <ProjectCard title={'To-Do List'} images={[todo]} projectText={'Manage projects and tasks. Uses modular JavaScript, Webpack, DOM manipulation'} url={todoUrl} />

                </div>
            </div>


        </div>
    )
}

export default Projects;