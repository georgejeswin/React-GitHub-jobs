import React, { useState } from "react";
import { Badge, Button, Card, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title style={{ wordBreak: "break-all" }}>
              {job.title} -
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge style={{ wordBreak: "break-all" }} variant="success mr-2">
              {job.type}
            </Badge>
            <Badge style={{ wordBreak: "break-all" }} variant="warning">
              {job.location}
            </Badge>
            <div style={{ wordBreak: "break-all" }}>
              {/* <a href={job.how_to_apply}> */}
              <ReactMarkdown source={job.how_to_apply} />
              {/* </a> */}
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={job.company_logo}
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>

        <Collapse in={open}>
          <div className="mt-4">
            {/* <ReactMarkdown source={job.descrition} /> */}
            <p>{job.description}</p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
