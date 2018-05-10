import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Img from 'gatsby-image'

const Article = Styled.article`
  a {
    color: initial;
    &:hover {
      text-decoration: none;
    }
  }
`

export default ({ path, title, date, excerpt, sizes }) =>
  <Article className="py-4">
    <Img sizes={sizes}/>
    <h3><Link to={path}>{title}</Link></h3>
    <small className="text-muted">{date}</small>
    <p className="mb-0">{excerpt}</p>
  </Article>