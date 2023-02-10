import author from "./documents/author";
import category from "./documents/category";
import { mediaLibrary } from "./documents/mediaLibrary";
import { page } from "./documents/page";
import post from "./documents/post";
import { videos } from "./documents/videos";
import blockContent from "./objects/blockContent";
import { mainImage } from "./objects/mainImage";
import { youtube } from "./objects/youtube";


export const schemaTypes = [
    post, 
    author, 
    category, 
    blockContent, 
    page, 
    mediaLibrary, 
    mainImage,
    youtube,
    videos,
]
