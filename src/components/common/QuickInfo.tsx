import Image from "next/image";

export default function QuickInfo() {
    return (
        <div className='flex flex-col items-center justify-center w-[320px] h-[360px] mb-24'>
            <Image
                src='/logo.gif'
                width="250px"
                height="250px"
            />
            <h1 className='text-slate-200 text-2xl text-center font-sans font-semibold'>Hi, I'm Georgi</h1>
            <h4 className="text-slate-400 text-base">aka Ghostsnip3rr</h4>
        </div>
    )
}