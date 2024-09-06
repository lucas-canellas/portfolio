import { useState, useEffect } from "react";
import { Card } from "./Card"
import { Category } from "./Category"
import axios from "axios";
/* import 'dotenv/config' */


export const Projects = () => {


    const projects = [
        {
            image: 'https://i.ibb.co/S6mXJcD/shoppingify.png',
            title: 'Shoppingify',
            subtitle: 'Desafio frontend do site devchallenges.com',
            stack: 'React',
            preview: 'https://shoppingify-frontend-dun.vercel.app/home',
            github: 'https://github.com/lucas-canellas/shoppingify-back'
        }
    ];


    return (
        <section id="projects" className="bg-light dark:bg-dark pb-24">
            <div className="container mx-auto px-2">
                <div className="py-24">
                    <Category title="MEUS PROJETOS" />
                    <h2 className="text-cinder dark:text-text-light text-3xl font-bold font-plus">Projetos pessoais </h2>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 w-full">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                image={project.image}
                                title={project.title}
                                subtitle={project.subtitle}
                                stack={project.stack}
                                preview={project.preview}
                                github={project.github}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

