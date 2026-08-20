import { notFound } from "next/navigation";
import { Container } from "@/shared/ui/Container/Container";
import { JsonLd } from "@/shared/ui/JsonLd";
import { SITE_URL } from "@/shared/config/site";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "@/widgets/home/Cases/ProjectCard";
import { getStackIcon } from "./icons";
import styles from "./ProjectDetailPage.module.css";
import { Faq } from "../home/Faq/Faq";
import { Form } from "../home/Form/Form";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PROJECTS.filter((item) => item.slug !== project.slug);

  return (
    <article className={styles.page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Case Studies",
              item: `${SITE_URL}/cases`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.company,
              item: `${SITE_URL}/cases/${project.slug}`,
            },
          ],
        }}
      />
      <Container className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </div>

        <div className={styles.stackRow}>
          {project.stack.map((tech) => {
            const Icon = getStackIcon(tech);
            return (
              <span key={tech} className={styles.stackChip}>
                {Icon && (
                  <span className={styles.stackChipIcon}>
                    <Icon size={18} />
                  </span>
                )}
                {tech}
              </span>
            );
          })}
        </div>

        <div className={styles.gallery}>
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.imageAlt} — screen ${index + 1}`}
              className={
                index === 0
                  ? `${styles.galleryImage} ${styles.galleryImageLead}`
                  : styles.galleryImage
              }
            />
          ))}
        </div>

        <div className={styles.textSection}>
          <div>
            <h2 className={styles.columnHeading}>About project</h2>
            <p className={styles.columnText}>{project.overview}</p>
          </div>

          <div>
            <h2 className={styles.columnHeading}>The challenge</h2>
            <p className={styles.columnText}>{project.challenge}</p>
          </div>

          <div>
            <h2 className={styles.columnHeading}>The solution</h2>
            <p className={styles.columnText}>{project.solution}</p>
          </div>

          <div>
            <h2 className={styles.columnHeading}>Work process</h2>
            <ul className={styles.approachList}>
              {project.approach.map((step) => (
                <li key={step} className={styles.approachItem}>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.columnHeading}>Result</h2>
            <p className={styles.columnText}>{project.resultsSummary}</p>
          </div>
        </div>

        <blockquote className={styles.testimonial}>
          <p className={styles.testimonialQuote}>
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <footer className={styles.testimonialAttribution}>
            <span className={styles.testimonialAvatar} aria-hidden="true">
              {initials(project.testimonial.name)}
            </span>
            <span className={styles.testimonialAttributionText}>
              <span className={styles.testimonialName}>
                {project.testimonial.name}
              </span>
              <span className={styles.testimonialRole}>
                {project.testimonial.role}
              </span>
            </span>
          </footer>
        </blockquote>
      </Container>
      <Container>
        <div className={styles.moreSection}>
          <h2 className={styles.columnHeading}>Other projects</h2>
          <div className={styles.moreGrid}>
            {otherProjects.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </Container>

      <Form />
      <Faq />
    </article>
  );
}
