import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export const Card = ({ image, title, subtitle, stack, preview, github }) => {
    return (
        <div className='bg-neutral-700 rounded-2xl shadow dark:text-text-light dark:border-l-2 dark:border-purple'>
            <img className='w-100 md:h-[260px] rounded-tl-2xl rounded-tr-2xl object-cover saturate-50' src={image} alt={title} />
            <div className='p-5 h-72 flex flex-col'>
                <h3 className="text-center text-stone-300 text-2xl font-medium  mb-1">{title}</h3>
                <p className='text-base font-normal leading-loose'>{subtitle}</p>
                <div className=' mt-auto'>
                    <div className='mb-2'><span className="text-stone-300 text-[16px] font-normal leading-relaxed">Stack:</span><span className="text-stone-300 text-[14px] font-light leading-relaxed">{stack}</span></div>
                    <div className='flex justify-between'>
                        <a href={preview} target="_blank">
                            <div className='flex items-center gap-1 text-white hover:text-purple'>
                                <AiOutlineLink/>
                                <span className=" text-[16px] font-normal underline leading-relaxed">Ver site</span>
                            </div>
                        </a>
                        <a href={github} target="_blank">
                            <div className='flex items-center gap-1 text-white hover:text-purple'>
                                <AiFillGithub  />
                                <span className=" text-[16px] font-normal underline leading-relaxed">Ver código</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}