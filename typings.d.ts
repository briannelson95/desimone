interface Navigation {
    slug: Slug;
    title: string;
}

interface Slug {
    slug?: any;
    _type?: "slug"
    current: string
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Service {
    description: string;
    title: string;
}

interface Video {
    url: string;
}

interface Cta {
    title: string;
    url: Slug
}

type PageProps = {
    params: {
        slug: string
    }
}