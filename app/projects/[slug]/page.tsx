import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ProjectDetailClient } from "./project-detail-client"

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Chokdup Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
