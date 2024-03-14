import React from 'react';
import PageHadderAndButton from '../components/PageHadderAndButton';
import Card from 'react-bootstrap/Card';

export default function Preview() {
    let component = {
        name: "Preview",
        buttons: [
            {
                name: "post",
                style: {
                    padding: "4px"
                },
                variant: "primary"
            }
        ]
    }
    let postData = JSON.parse(localStorage.getItem("job_post"));
    let hldlevnt = async (e) => {
        console.log(e);
        await fetch('http://44.198.34.124:5000/create_job', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({"job_desc": postData.jobTitle + "\n" + postData.text}),
        });
    }
    return (
        <>
            <PageHadderAndButton component={component} event={hldlevnt}/>
            <br />
            <div style={{ maxWidth: "825px", margin: "auto", marginTop: "40px" }}>
                <Card style={{ width: '48rem', padding: "17px" }}>
                    <Card.Body>
                        <Card.Title>{postData?.jobTitle || "jobTitle"}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{postData?.locationType || "location type"} • {postData?.location || "location"}</Card.Subtitle>
                        <hr />
                        <Card.Text>
                            {postData?.text || `Creating storyboards creatively and effectively
Producing various types of video assets like animation videos, gifs, infographics, statics, carousels, etc. 
Editing reels & shorts for social media
Generating video deliverables for different media platforms
Managing and prioritizing projects to meet deadlines
Staying updated with the latest design techniques and technologies
Providing creative ideas to solve problems
Adhering to brand guidelines while pushing creative boundaries


The requirements for the Motion Designer position include:
Holding a bachelor's degree from a reputed institute` }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
