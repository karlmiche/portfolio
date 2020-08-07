import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar () {

    // how to do DOM manipulation in react
    // useEffect(() => {
    //     document.getElementById("home").style.color = "hotpink"
    // }, [])
    
    return (
        <div>
            <Head>
               <title>kms 🐈</title>
            </Head>
            <navbar>
                <ul>
                    <li><Link href="/"><a id="home">Home</a></Link></li>
                    <li><Link href="/about"><a>A Boot</a></Link></li>
                </ul>
            </navbar>
        </div>
    )
}