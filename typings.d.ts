interface Navigation {
    slug: Slug;
    title: string;
}

interface Slug {
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