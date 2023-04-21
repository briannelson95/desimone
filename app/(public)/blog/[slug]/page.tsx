import { RichTextComponent } from "@/components/RichTextComponent";
import { allPosts } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity"
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const query = groq`*[_type == "post"]{ slug }`;

    const slugs: any[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug
    }))
}

export default async function Page({params: {slug}}: Props) {
    const post: any = await client.fetch(allPosts, { slug });

    if (!post) {
        notFound()
    }

    return (
        <main className="px-4 md:px-8 lg:px-32">
            <h1>{post.title}</h1>
            <section>
                {post.body ?
                    <PortableText value={post.body} components={RichTextComponent} />
                    : null
                }
            </section>
        </main>
    )
}