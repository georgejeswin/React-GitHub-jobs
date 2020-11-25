import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";
import logo from "./logo.png";
import Footer from "./components/Footer";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <div className="app">
      <Container className="my-4">
        <div className="app__logo">
          <img className="mt-3 mb-3" src={logo} width="50" alt="" />
          <h4 className="ml-2">Jobs</h4>
        </div>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && (
          <img
            className="ml-3 mt-5 app__spinner"
            src="https://fuselabcreative.com/wp-content/themes/fuselab/img/loading.gif"
            alt="Loading..."
          />
        )}
        {error && <h1>error Refresh the page</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
