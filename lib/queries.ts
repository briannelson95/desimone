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
        title,
        seo
    },
    "homePage": *[_type == "homepage"]{
        ...,
        services[]{
            title,
            description
        },
        cta{
            title,
            url->{
                slug
            } 
        },
        "desktop": desktopVideo.asset->url,
        "mobile": mobileVideo.asset->url,
    },
    "videos": *[_type == "portfolio"][0]{
        allVideos[0...3]{
            url
        }
    }
}`

export const portfolio = groq`{
    "videos": *[_id == "portfolio"]{
        allVideos[]{
            url
        }
    },
    "pageData": *[_type == "pages" && title == "Portfolio"]{
        ...,
        featuredImage->{
            media
        }
    },
    "siteSettings": *[_id == "siteSettings"]{
        title,
        seo{
            desc,
            image
        }
    }
}`

export const contact = groq`{
    "pageData": *[_type == "pages" && title == "Contact"],
    "siteSettings": *[_id == "siteSettings"]{
        contact,
        seo
    }
}`