import { RichTextComponent } from "@/components/RichTextComponent";
import { allPages } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity"
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const query = groq`*[_type == "pages" && !(slug.current match "portfolio") && !(slug.current match "contact")]{ slug }`;

    const slugs: any[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug
    }))
}

export default async function Page({params: {slug}}: PageProps) {
    const page: any = await client.fetch(allPages, { slug });

    if (!page) {
        notFound()
    }

    return (
        <main className="px-4 md:px-8 lg:px-32">
            <h1>{page.title}</h1>
            <section>
                {page.body ?
                    <PortableText value={page.body} components={RichTextComponent} />
                    : null
                }
            </section>
        </main>
    )
}