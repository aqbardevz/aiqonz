import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/widgets/cases/ProjectDetailPage";
import { PROJECTS } from "@/shared/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const title = `${project.title} — ${project.company}`;

  return {
    title,
    description: project.overview,
    alternates: {
      canonical: `/cases/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: project.overview,
      url: `/cases/${project.slug}`,
      images: [{ url: project.images[0], alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.overview,
      images: [project.images[0]],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
