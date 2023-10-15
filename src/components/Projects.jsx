import { useState, useEffect } from "react";
import { Card } from "./Card"
import { Category } from "./Category"
import axios from "axios";
/* import 'dotenv/config' */


export const Projects = () => {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const token = import.meta.env.VITE_STRIPE_TOKEN;  

        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Adicione o token de autenticação no cabeçalho
            }
        };

        axios.get('https://lucas-david-portfolio.up.railway.app/api/projects', config)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return (
        <section className="bg-light dark:bg-dark pb-24">
            <div className="container mx-auto">
                <div>{JSON.stringify(import.meta.env)}</div>
                <div className="py-24">
                    <Category title="MEUS PROJETOS" />
                    <h2 className="text-cinder dark:text-text-light text-3xl font-bold font-plus">Projetos pessoais </h2>
                </div>
                <div className="">
                    <div className="grid grid-cols-4 gap-10 w-full">
                        {
                            data && data.map(project => <Card github={project.attributes.github} image={project.attributes.image} preview={project.attributes.preview} stack={project.attributes.stack} subtitle={project.attributes.subtitle} title={project.attributes.title} key={project.attributes.title} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

