import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Experience from '../components/common/Experience'
import Layout from '../components/ui/Layout'
import QuickInfo from '../components/common/QuickInfo'

export default function Home() {
    return (
        <Layout
            title='Ghostsnip3rr.me - Personal Site'
            desc='A student, full-stack developer and interested in new technologies and projects.'
            url='https://ghostsnip3rr.me'
        >
            <div className='w-full h-full flex flex-col'>
                <main className='relative flex flex-col xl:flex-row h-[80%] justify-center xl:justify-between items-center xl:mx-[20rem] my-[20px]'>
                    <QuickInfo />
                    <Experience />
                </main>
                <footer className='h-[6rem] mt-auto w-full flex flex-col justify-center items-center text-slate-400'>
                    <h4>Still under development</h4>
                    <h4>©️ Ghostsnip3rr</h4>
                </footer>
            </div>
        </Layout>
    )
}
