'use client';

import {motion} from 'framer-motion';
import {ProjectList} from "@/components/landing-page/sections/project-list-section/components/ProjectList";
import {
  PinnedProject,
  PinnedProjects
} from "@/components/landing-page/sections/project-list-section/components/PinnedProjects";
import {ProjectPreview} from "@/components/landing-page/sections/project-list-section/components/ProjectCardPreview";


export function ProjectsSection(props: { pinnedProjects: PinnedProject[], projectPreviews: ProjectPreview[] }) {


  const {pinnedProjects, projectPreviews} = props;
  return (
    <section className="py-20 px-4">

      <motion.h2
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white"
      >
        Mes projets
      </motion.h2>

      <ProjectList projectsPreview={projectPreviews}/>
      <PinnedProjects pinnedProjects={pinnedProjects}/>

    </section>
  );
}
