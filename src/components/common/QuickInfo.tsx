import Image from "next/image";

export default function QuickInfo() {
    return (
        <div className='flex flex-col items-center justify-center w-[320px] h-[360px] mb-24'>
            <Image
                src='/logo.gif'
                width="250px"
                height="250px"
                alt="logo"
            />
            <h1 className='text-slate-200 text-2xl text-center font-sans font-semibold'>Hi, I'm Ghostsniper</h1>
            <h4 className="text-slate-400 text-base">Computer Scientist</h4>
            <div className='flex flex-row justify-center items-center mt-2 text-slate-500'>
                Contacts soon
            </div>
        </div>
    )
}