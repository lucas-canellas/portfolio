export const Category = ({title}) => {
    return (
        <div className="flex items-center gap-4">
            <div className="w-[16px] h-[2px] bg-[#D9D9D9]"></div>
            <div className="text-[#D9D9D9] text-xs font-medium leading-normal tracking-[7.50px]">{title}</div>
        </div>
    )
}