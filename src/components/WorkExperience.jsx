import { Category } from "./Category"
import { SlArrowRight } from "react-icons/sl";


export const WorkExperience = () => {
    return (
        <section id="experience" className="bg-white dark:bg-dark py-24 px-2">
            <div className="container mx-auto flex flex-col lg:flex-row">
                <div className="mr-40">
                    <div className="mb-20">
                        <Category title="CARREIRA" />
                        <h2 className="text-cinder dark:text-text-light text-3xl font-bold font-plus">Experiência profissional </h2>
                    </div>
                    <ul className="w-full hidden  py-3 px-8 bg-text-light dark:bg-dark dark:border dark:border-text-light lg:flex justify-between items-center" tabIndex="0" role="button">
                        <li><span className="text-purple">PMI</span></li>
                        <SlArrowRight className="text-purple" size={"16px"} />
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium font-plus text-cinder dark:text-text-light">Desenvolvedor Front-end <span className="underline">Prefeitura Municipal de Itaboraí</span></h3>
                    <div className="text-sm font-normal text-cinder-light dark:text-text-light mt-2">Itaboraí, Rio de Janeiro</div>
                    <div className="text-sm font-normal text-cinder-light dark:text-text-light my-4">Jun 2022 - Presente</div>
                    <div className="flex gap-1">
                        <div className="w-[46px] h-[23px] px-2 py-1 rounded border border-text-light justify-center items-start gap-2.5 inline-flex">
                            <div className="text-cinder-light dark:text-text-light text-xs font-medium">Html</div>
                        </div>
                        <div className="w-[46px] h-[23px] px-2 py-1 rounded border border-text-light justify-center items-start gap-2.5 inline-flex">
                            <div className="text-cinder-light dark:text-text-light text-xs font-medium">CSS</div>
                        </div>
                        <div className="w-[46px] h-[23px] px-2 py-1 rounded border border-text-light justify-center items-start gap-2.5 inline-flex">
                            <div className="text-cinder-light dark:text-text-light text-xs font-medium">JS</div>
                        </div>
                        <div className="w-[46px] h-[23px] px-2 py-1 rounded border border-text-light justify-center items-start gap-2.5 inline-flex">
                            <div className="text-cinder-light dark:text-text-light text-xs font-medium">React </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#F1F1F1] my-8"></div>
                    <ul>
                        <li className="flex items-center gap-2">
                            <div className="w-[10px] h-[2px] bg-[#d9d9d9]"></div>
                            <span className="text-cinder-light dark:text-text-light text-base font-normal">Desenvolvimento de interfaces front-end para aplicativos e sistemas da Prefeitura, aprimorando a experiência do usuário.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-[10px] h-[2px] bg-[#d9d9d9]"></div>
                            <span className="text-cinder-light dark:text-text-light text-base font-normal">Utilização de tecnologias HTML, CSS e React para criar interfaces responsivas e amigáveis.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-[10px] h-[2px] bg-[#d9d9d9]"></div>
                            <span className="text-cinder-light dark:text-text-light text-base font-normal">Construção de landing pages de alto desempenho para eventos e atividades da cidade, melhorando a divulgação e participação da comunidade.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}