import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobListPage from './pages/JobListPage';
import CandidateList from './pages/CandidateList';
import ExportJobsPage from './pages/ExportJobsPage';
import Preview from './pages/Preview';
import CvUpload from './pages/CvUpload';

function App() {
  return (
    <div className="App">
      <div style={{ width: "90%", margin: "auto" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<JobListPage />} />
            <Route path="/create-job" element={<ExportJobsPage />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/candidate" element={<CandidateList />} />
            <Route path="/upload" element={<CvUpload />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
