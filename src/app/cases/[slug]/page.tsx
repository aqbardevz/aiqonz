import { ProjectDetailPage } from "@/widgets/cases/ProjectDetailPage";
import { PROJECTS } from "@/shared/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
