import { Category } from "./Category"
import { FiGithub, FiLinkedin } from 'react-icons/fi';
/* import Avatar from './../assets/avatar.jpg' */

export const Hero = () => {
    return (
        <section className="bg-white dark:bg-dark  py-24">
            <div className="container mx-auto grid grid-cols-2 justify-between">
                <div>
                    <Category title="MEU NOME É"/>
                    <h2 className="text-cinder dark:text-text-light text-[44px] font-bold font-plus">Lucas David <span className="text-purple">Canellas.</span></h2>
                    <p className="text-base font-normal leading-loose mt-8 dark:text-text-light">Desenvolvedor Front-End com 1+ anos de experiência. Trabalho principalmente com JavaScript e React, e agora estou aprendendo sobre o desenvolvimento Back-End.</p>
                    <div >
                        <ul className="flex gap-8 mt-9 dark:text-text-light">
                            <li><a href="#"><FiGithub size={"24px"} /></a></li>
                            <li><a href="#"><FiLinkedin size={"24px"} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">

                </div>
            </div>
        </section>
    )
}
