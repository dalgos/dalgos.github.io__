import React from 'react'
import Helmet from 'react-helmet'
import Styled from 'styled-components'
import Img from 'gatsby-image'

import '../sass/index.scss'
export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    // <div className="col">
    //   <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
    //   <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
    //   <div className="blog-post">
    //     {post.coverImage}
    //     <PostTitle>{post.frontmatter.title}</PostTitle>
    //     <small>{post.frontmatter.date}</small>
    //     <div
    //       className="blog-post-content mt-4"
    //       dangerouslySetInnerHTML={{ __html: post.html }}
    //     />
    //   </div>
    // </div>
    <article>
      <Helmet title={`${post.frontmatter.title}`} />
      <header className="bg-gold sans-serif pt5">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <time className="f6 mb2 dib ttu tracked"><small>{post.frontmatter.date}</small></time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              {post.frontmatter.title}
            </span>
          </h3>
          <h4 className="f3 fw1 georgia i">The definitive guide to the javascript tooling landscape in 2015.</h4>
          <h5 className="f6 ttu tracked black-80">By dalgos</h5>
        </div>
      </header>
      <div className="pa4 ph7-l roboto mw9-l center" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html,
      frontmatter{
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage{
          childImageSharp{
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`