import Link from "next/link"
import Head from "next/head";


const perso = () => { 
    return (
        <div> 
            <Head>
                <title>PAGE PERSO</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <h1>PAGE PERSO</h1>
            <main>
                {/*<butto> homepage </butto>*/}
                {/* <Link as={`/article/${article.slug}`} href="/article/[id]"></Link> */}
                {/* <Link as={`/category/${category.slug}`} href="/category/[id]"></Link> */}
                <Link href="/"><a>homepage</a></Link>

            </main>
            
        </div>


    )
}

export default perso;