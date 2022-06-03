import Image from "next/image";

export default function Experience() {
    return (
        <div className='flex flex-col w-[500px] h-[360px] select-none'>
            <div className='text-center xl:text-left mb-1.5'>
                <div className='text-slate-200 text-lg font-semibold'>
                    Back-End & Database Systems
                    <h4 className="inline-block ml-2 text-slate-400 text-base font-normal">ADVANCED</h4>
                </div>
                <div className='flex flex-row justify-center xl:justify-start select-none pointer-events-none'>
                    <Image
                        src="/images/nodejs.png"
                        width="50px"
                        height="50px"
                        alt="nodejs"
                    />
                    <Image
                        src="/images/rust.png"
                        width="50px"
                        height="50px"
                        alt="rust"
                    />
                    <Image
                        src="/images/postgres.png"
                        width="50px"
                        height="50px"
                        alt="postgres"
                    />
                </div>
            </div>
            <div className='text-center xl:text-left mb-1.5'>
                <div className='text-slate-200 text-lg font-semibold'>
                    Front-End Technologies
                    <h4 className="inline-block ml-2 text-slate-400 text-base font-normal">ADVANCED</h4>
                </div>
                <div className='flex flex-row justify-center xl:justify-start select-none pointer-events-none'>
                    <Image
                        src="/images/react.png"
                        width="50px"
                        height="50px"
                        alt="react"
                    />
                    <Image
                        src="/images/nextjs.png"
                        width="50px"
                        height="50px"
                        alt="nodejs"
                    />
                    <Image
                        src="/images/tailwind.png"
                        width="50px"
                        height="50px"
                        alt="tailwind"
                    />
                    <Image
                        src="/images/mobx.png"
                        width="50px"
                        height="50px"
                        alt="mobx"
                    />
                    <Image
                        src="/images/redux.png"
                        width="50px"
                        height="50px"
                        alt="redux"
                    />
                </div>
            </div>
            <div className='text-center xl:text-left mb-1.5'>
                <div className='text-slate-200 text-lg font-semibold'>
                    DevOps
                    <h4 className="inline-block ml-2 text-slate-400 text-base font-normal">INTERMEDIATE</h4>
                </div>
                <div className='flex flex-row justify-center xl:justify-start select-none pointer-events-none'>
                    <Image
                        src="/images/docker.png"
                        width="50px"
                        height="50px"
                        alt="docker"
                    />
                    <Image
                        src="/images/loadbalancing.png"
                        width="50px"
                        height="50px"
                        alt="loadbalancing"
                    />
                </div>
            </div>
        </div>
    )
}