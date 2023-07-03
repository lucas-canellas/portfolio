import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export const Card = ({ image, title, subtitle, stack, preview, github }) => {
    return (
        <div className='max-w-xs bg-neutral-700 rounded-2xl shadow'>
            <img className='w-100 h-[260px] rounded-tl-2xl rounded-tr-2xl object-cover' src={image} alt="" />
            <div className='p-5 h-72 flex flex-col'>
                <h3 className="text-center text-stone-300 text-2xl font-medium leading-relaxed mb-1">{title}</h3>
                <p className='text-stone-300 text-base font-light leading-relaxed'>{subtitle}</p>
                <div className=' mt-auto'>
                    <div className='mb-2'><span className="text-stone-300 text-[16px] font-normal leading-relaxed">Stack:</span><span className="text-stone-300 text-[14px] font-light leading-relaxed">{stack}</span></div>
                    <div className='flex justify-between'>
                        <a href={preview} target="_blank">
                            <div className='flex items-center gap-1 text-white hover:text-[#FFE071]'>
                                <AiOutlineLink/>
                                <span className=" text-[16px] font-normal underline leading-relaxed">Live Preview</span>
                            </div>
                        </a>
                        <a href={github} target="_blank">
                            <div className='flex items-center gap-1 text-white hover:text-[#FFE071]'>
                                <AiFillGithub  />
                                <span className=" text-[16px] font-normal underline leading-relaxed">View Code</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}