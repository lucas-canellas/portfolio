import { Category } from "./Category"

export const Projects = () => {
    return (
        <section className="bg-light dark:bg-dark  py-24">
            <div className="container mx-auto">
                <Category title="MEUS PROJETOS" />
                <h1 className="text-cinder dark:text-text-light text-3xl font-bold font-plus">Projetos pessoais </h1>
            </div>
        </section>
    )
}