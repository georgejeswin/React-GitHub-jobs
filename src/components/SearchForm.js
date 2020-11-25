import React from "react";
import { Form } from "react-bootstrap";

const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group className="col-md-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="search__form"
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
            placeholder="Job Title"
          />
        </Form.Group>
        <Form.Group className="col-md-4">
          <Form.Label>Location</Form.Label>
          <Form.Control
            className="search__form"
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
            placeholder="Location"
          />
        </Form.Group>
        <Form.Group xs="auto" className="ml-2 col-md-3">
          <Form.Check
            className="mb-2"
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            label="Full time"
            type="checkbox"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
