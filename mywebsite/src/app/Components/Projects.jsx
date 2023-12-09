import React from "react";
import projectstyle from "../styles/projects.module.css";
import { GitHub, Language } from "@mui/icons-material";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Swiptory",
      description:
        "Swiptory is a social media platform where content is presented in the form of stories.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
      githubUrl: "https://github.com/Adwaith13/Swiptory",
      websiteUrl: "https://swiptory-v6yg.vercel.app/",
    },
    {
      id: 2,
      title: "Job Listing",
      description:
        "Job Listing is a job listing platform where recruiters can post jobs and handle their job posts.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
      githubUrl: "https://github.com/Adwaith13/job-listing",
      websiteUrl: "https://job-listing-client.vercel.app/",
    },
    {
      id: 3,
      title: "Pocket Notes",
      description:
        "Pocket Notes is a note taking application where users can take down notes in their respective subject",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Netlify"],
      githubUrl: "https://github.com/Adwaith13/Pocket-Notes",
      websiteUrl: "https://adwaith13.github.io/Pocket-Notes/",
    },
  ];

  return (
    <div className={projectstyle.projectDivision}>
      <h1 className={projectstyle.heading}>Checkout my projects</h1>
      <div className={projectstyle.projectContainer}>
        {projects.map((item, id) => (
          <div key={id} className={projectstyle.projects}>
            <h2 className={projectstyle.title}>{item.title}</h2>
            <p className={projectstyle.description}>{item.description}</p>
            <div className={projectstyle.skillContainer}>
              {item.stack.map((skill, id) => (
                <p key={id} className={projectstyle.skills}>
                  {skill}
                </p>
              ))}
            </div>
            <div className={projectstyle.iconContainer}>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub className={projectstyle.gitHubIcon} />
              </a>
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Language className={projectstyle.webIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/Adwaith13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={projectstyle.button}>More Projects Here</button>
      </a>
    </div>
  );
}
