import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const getProjects = () => {
      fetch("https://my-portfolio-backend-nine.vercel.app/api/v1/projects")
        .then((response) => response.json())
        .then((response) => setProjects(response.message))
        .catch((err) => console.log(err));
    }
    getProjects();
  }, [])

  const loop = projects && projects.map((project) => {
    return <Col md={4} className="project-card">
      <ProjectCard
        imgPath={project.image}
        isBlog={false}
        title={project.name}
        description={project.description}
        ghLink="https://github.com/Code-X-Rahul"
        demoLink={project.url}
      />
    </Col>
  })
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
          {loop}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
