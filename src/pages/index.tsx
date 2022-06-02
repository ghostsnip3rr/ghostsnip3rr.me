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
            <main className='relative flex flex-col xl:flex-row h-full justify-center xl:justify-between items-center xl:mx-[20rem] my-[20px]'>
                <QuickInfo />
                <Experience />
            </main>
        </Layout>
    )
}
