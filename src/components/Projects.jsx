import { useState, useEffect } from "react";
import { Card } from "./Card"
import { Category } from "./Category"
import axios from "axios";
/* import 'dotenv/config' */


export const Projects = () => {


    const projects = [
        {
            image: 'https://via.placeholder.com/300x260',
            title: 'Projeto 1',
            subtitle: 'Este é um projeto incrível sobre XYZ.',
            stack: 'React, Node.js, MongoDB',
            preview: 'https://projeto1.com',
            github: 'https://github.com/user/projeto1'
        },
        {
            image: 'https://via.placeholder.com/300x260',
            title: 'Projeto 2',
            subtitle: 'Um projeto que automatiza tarefas com IA.',
            stack: 'Python, TensorFlow, Flask',
            preview: 'https://projeto2.com',
            github: 'https://github.com/user/projeto2'
        },
        {
            image: 'https://via.placeholder.com/300x260',
            title: 'ViaCEP BOT Telegram',
            subtitle: 'Bot para consultar informações de endereços via CEP.',
            stack: 'Python, Telegram API',
            preview: 'https://t.me/viacepbot',
            github: 'https://github.com/user/viacepbot'
        },
        {
            image: 'https://via.placeholder.com/300x260',
            title: 'Projeto 4',
            subtitle: 'Um sistema de gerenciamento de clientes.',
            stack: 'Java, Spring Boot, PostgreSQL',
            preview: 'https://projeto4.com',
            github: 'https://github.com/user/projeto4'
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

