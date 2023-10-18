import { Category } from "./Category"
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

export const Hero = () => {



    return (
        <section id="hero" className="bg-white dark:bg-dark  py-24">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-2 justify-between">

                <div>
                    <Category title="MEU NOME É" />
                    <h2 className="text-cinder dark:text-text-light text-[44px] font-bold font-plus">                    
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Lucas David <span style="color: #7E74F1;">Canellas.</span>')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    /></h2>
                    <p className="text-base font-normal leading-loose mt-8 dark:text-text-light">Desenvolvedor front-end com mais de um ano de experiência, tenho trabalhado com tecnologias como HTML, CSS, Javascript, React e também tenho conhecimento em desenvolvimento backend usando Spring Boot.  </p>
                    <div >
                        <ul className="flex gap-8 mt-9 dark:text-text-light">
                            <li><a target="_blank" href="https://github.com/lucas-canellas"><FiGithub size={"24px"} /></a></li>
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
