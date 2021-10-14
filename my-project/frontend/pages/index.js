import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/dist/client/link"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
        <Link href="/chat"><a>Online Chat Service</a></Link>

      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <Link href="/perso"><a>Page perso</a></Link>
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    {/*
      fetchAPI("/perso")
    */}
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
