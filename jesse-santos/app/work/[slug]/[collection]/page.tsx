import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveCollection, archiveCollections, archivePath, archiveSlug } from "@/components/ArchiveShowcase";

type CollectionPageProps = {
  params: Promise<{ slug: string; collection: string }>;
};

export function generateStaticParams() {
  return archiveCollections.map(({ slug }) => ({ slug: archiveSlug, collection: slug }));
}

async function getCollection(params: CollectionPageProps["params"]) {
  const { slug, collection } = await params;
  if (slug !== archiveSlug) notFound();

  const selected = archiveCollections.find((entry) => entry.slug === collection);
  if (!selected) notFound();
  return selected;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const selected = await getCollection(params);
  return { title: `${selected.title} · Arquivo Vivo — Jesse Santos` };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const selected = await getCollection(params);

  return (
    <article className="archive-showcase bg-[#F7F4EB] px-5 pb-24 pt-28 text-[#24221F] md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1376px]">
        <header className="archive-collection-header">
          <Link href={archivePath} className="editorial-num inline-block text-[#655b4c]">
            ← Arquivo Vivo
          </Link>
          <h1 className="archive-collection-title">{selected.title}</h1>
        </header>
        <ArchiveCollection collection={selected.slug} />
        <nav aria-label="Outras coleções" className="archive-collection-nav">
          {archiveCollections.filter(({ slug }) => slug !== selected.slug).map(({ slug, title }) => (
            <Link key={slug} href={`${archivePath}/${slug}`} className="archive-collection-link">
              {title} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
}
