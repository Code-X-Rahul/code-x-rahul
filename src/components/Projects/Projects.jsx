import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { TbLoader2 } from "react-icons/tb";

function Projects() {
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjects = () => {
      fetch("https://my-portfolio-backend-nine.vercel.app/api/v1/projects")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("failed to get projects");
          }
        })
        .then((response) => setProjects(response.message))
        .catch((err) => console.log(err?.message))
        .finally(() => setIsLoading(false));
    };
    getProjects();
  }, []);

  const loop =
    projects &&
    projects.map((project) => {
      return (
        <Col key={project._id} md={4} className="project-card">
          <ProjectCard
            imgPath={project.image}
            isBlog={false}
            title={project.name}
            description={project.description}
            ghLink="https://github.com/Code-X-Rahul"
            demoLink={project.url}
          />
        </Col>
      );
    });
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {isLoading ? (
            <TbLoader2 size={40} color="white" className="loader" />
          ) : (
            loop
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
