import { RichTextComponent } from "@/components/RichTextComponent";
import { allPages } from "@/lib/queries";
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
    const query = groq`*[_type == "pages"]{ slug }`;

    const slugs: any[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug
    }))
}

export default async function Page({params: {slug}}: Props) {
    const page: any = await client.fetch(allPages, { slug });

    if (!page) {
        notFound()
    }

    console.log(page)

    return (
        <main className="px-4 md:px-8 lg:px-32">
            <h1>New page</h1>
            <section>
                {page.body ?
                    <PortableText value={page.body} components={RichTextComponent} />
                    : null
                }
            </section>
        </main>
    )
}