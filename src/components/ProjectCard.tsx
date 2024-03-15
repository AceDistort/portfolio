import Project from "@/types/Project";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props: { project: Project }) => {

    return (
        <a href={props.project.link} target="_blank" rel="noreferrer">
            <div className={styles.projectCard} style={{backgroundImage: `url(${props.project.image})`}}>
                <h3 className={styles.projectTitle}>{props.project.title}</h3>
            </div>
        </a>
    );
}

export default ProjectCard;