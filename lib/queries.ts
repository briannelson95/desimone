import { groq } from "next-sanity";

export const siteSettings = groq`
    *[_type == "siteSettings"]{
        ...,
        navigation[]->{
            slug{current},
            title
        }
    }
`

export const homepage = groq`{
    "siteSettings": *[_type == "siteSettings"]{
        title
    },
    "homePage": *[_type == "homepage"]{
        ...,
        services[]{
            title,
            description
        }
    },
    "videos": *[_type == "portfolio"][0]{
        allVideos[0...3]{
            url
        }
    }
}`