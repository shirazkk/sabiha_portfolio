import { projects } from "@/src/data/projects";
import { notFound } from "next/navigation";
import ProjectClientPage from "./ProjectClientPage";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectClientPage project={project} />;
}
