import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rahul's Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row
          className="d-flex"
          style={{ justifyContent: "center", position: "relative" , marginBlock:"8px" , gap:"8px"}}
        >
          {/* <div > */}
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev Page
          </Button>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            disabled={page === 2}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next Page
          </Button>
          {/* </div> */}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
