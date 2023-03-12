// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'
import Header from '../../components/header'
import {Box, Grid, Theme} from '@mui/material';
import Carousel from 'react-material-ui-carousel'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value, index }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).fit('max').auto('format')}
          width="100%"
        />
      )
    },
  },
}

const Post = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    categoriesImg,
    body = [],
  } = post;
  
  console.log('post:' + categoriesImg[0].asset._ref)
  return (
    <Grid >
      {/* <h1>{title}</h1> */}
      {/* <span>By {name}</span> */}
      <Grid item XS={12}>
      <Header/>
      <Box>
      {categories && (
          <Carousel width="100%" animation="slide" swipe="true" duration="100">
          {categories.map((category, index) => (
            
              <Box key={category}>
              <PortableText value={categoriesImg[index]} components={ptComponents}/> <br/>
              {category}
              </Box>
            
          ))}
          </Carousel>
      )}
      </Box>
      {/* {authorImage && (
        <div>
          <img
            src={urlFor(authorImage).width(100).url()}
            alt={`${name}'s picture`}
          />
        </div>
      )} */}
      <PortableText value={body} components={ptComponents} />
      </Grid>
    </Grid>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "categoriesImg": categories[]->carouselImage,
  "authorImage": author->image,
  body
}`
export async function getServerSidePaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`,
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}
export default Post
