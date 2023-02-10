import author from "./documents/author";
import category from "./documents/category";
import { mediaLibrary } from "./documents/mediaLibrary";
import { page } from "./documents/page";
import post from "./documents/post";
import { videos } from "./objects/videos";
import blockContent from "./objects/blockContent";
import { mainImage } from "./objects/mainImage";
import { youtube } from "./objects/youtube";
import { portfolio } from "./documents/portfolio";
import { siteSettings } from "./documents/siteSettings";
import { contact } from "./objects/contact";
import { seo } from "./objects/seo";


export const schemaTypes = [
    siteSettings,
    post, 
    author, 
    category, 
    blockContent, 
    page, 
    mediaLibrary, 
    mainImage,
    youtube,
    videos,
    portfolio,
    contact,
    seo
]
