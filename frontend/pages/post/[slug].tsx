// [slug].tsx

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import Header from "../../components/header";
import ResponsiveAppBar from "../../components/menu";
import { Box, Grid, Theme } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value, index }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).fit("max").auto("format")}
          width="100%"
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    categoriesImg,
    findFramesTitle,
    findFramesDes,
    findFramesImg,
    body = [],
  } = post;

  console.log("post:" + categoriesImg[0].asset._ref);
  return (
    <Grid>
      {/* <h1>{title}</h1> */}
      {/* <span>By {name}</span> */}
      <Grid item XS={12}>
        <Header />
        <Box>
          {categories && (
            <Carousel
              width="100%"
              animation="slide"
              swipe="true"
              duration="100"
            >
              {categories.map((category, index) => (
                <Box key={category}>
                  <PortableText
                    value={categoriesImg[index]}
                    components={ptComponents}
                  />{" "}
                  <br />
                  {category}
                </Box>
              ))}
            </Carousel>
          )}
        </Box>
        <Box>
          {findFramesTitle && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "0px solid",
              }}
            >
              {findFramesTitle.map((frames, index) => (
                <Box
                  key={frames}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "0px solid",
                    width: "100%",
                    m: 6,
                    boxShadow: 3,
                  }}
                >
                  <Box>
                    {frames}
                    <Box>{findFramesDes[index]}</Box>
                  </Box>

                  <Box sx={{ width: "56%" }}>
                    <PortableText
                      value={findFramesImg[index]}
                      components={ptComponents}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
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
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "categoriesImg": categories[]->carouselImage,
  "authorImage": author->image,
  "findFramesTitle": findFrames[]->title,
  "findFramesDes": findFrames[]->description,
  "findFramesImg": findFrames[]->carouselImage,
  body
}`;
export async function getServerSidePaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
