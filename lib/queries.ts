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
    "homePage": *[_type == "homepage"]
}`