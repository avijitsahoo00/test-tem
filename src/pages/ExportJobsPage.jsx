import React from 'react';
import Form from 'react-bootstrap/Form';
import PageHadderAndButton from '../components/PageHadderAndButton';

export default function ExportJobsPage() {
    const [timeoutId, setTimeoutId] = React.useState(null);
    const [data, setData] = React.useState({jobTitle:"", text: ""});

    const saveData = () => {
        localStorage.setItem("job_post", JSON.stringify(data));
    };

    let component = {
        name: "Import Existing Job",
        buttons: [
            {
                name: "Add Job post",
                style: {
                    padding: "4px"
                },
                variant :"primary",
                link : "/preview"
            }
        ]
    }

    const handleChange = (event) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          saveData();
        }, 1500);
    
        setTimeoutId(newTimeoutId);
      };

    console.log(data);
    return (
        <>
        <PageHadderAndButton  component={component}/>
        <br />
        <div style={{maxWidth: "825px", margin: "auto", marginTop : "40px" }}>
            <Form onChange={handleChange}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="jobTitle" onChange={(e)=> {setData({...data,jobTitle: e.target.value})}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Paste your job post details (Linkedin/Naukri/Wellfound)</Form.Label>
                    <Form.Control as="textarea" rows={12} onChange={(e)=> {setData({...data,text: e.target.value})}} />
                </Form.Group>
            </Form>
            </div>
        </>
    )
}