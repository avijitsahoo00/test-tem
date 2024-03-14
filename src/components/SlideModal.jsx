import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card } from 'react-bootstrap';

export default function SlideModal({data}) {
    let data1 = data;
    let candidates = data?.candidates;
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false)}
    const handleShow = () => setShow(true);
    // console.log(candidates?.CatA , data1.relevant_skill_compatibility , 0)
    return (
        <>
            <Button variant="primary" style={{display: "none"}} onClick={handleShow} id="btn-Launch" >
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" name="end" style={{ width: "900px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ marginLeft: "20px" }}> <h2>{data1.personal_information.name}</h2>
                        {data1.personal_information.contact_number} • {data1?.personal_information.email} •
                        <br />
                        {data1.personal_information.linkedin}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Body style={{ margin: "auto" }}>
                                <Card.Title style={{ textAlign: "center" }}>
                                    {((candidates?.CatA ? candidates?.CatA  : data1?.relevant_skill_compatibility ) * 10)}/10
                                </Card.Title>
                                <Card.Text>
                                    <div > Category A </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }}>
                            <Card.Body style={{ margin: "auto" }}>
                                <Card.Title style={{ textAlign: "center" }}>
                                    {((candidates?.CatB ? candidates?.CatB :  data1?.experience_score ) * 10)}/10
                                </Card.Title>
                                <Card.Text>
                                    <div > Category B </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }}>
                            <Card.Body style={{ margin: "auto" }}>
                                <Card.Title style={{ textAlign: "center" }}>
                                    {((candidates?.CatC ? candidates?.CatC : data1?.employee_loyalty_score || 0) * 10)}/10
                                </Card.Title>
                                <Card.Text>
                                    <div> Category C </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <br />
                    <div className="exprience" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>
                            Experience
                        </h4>
                        {/* {console.log(data1)} */}
                        {data1.professional_experience.map((experience) => (<>
                            <h5> ¶ {experience.company}</h5>
                            <div style={{}} >
                                <h5 > {experience.position} </h5>
                                <p> {experience.duration} </p>
                                <p>{experience.company_url}</p>
                            </div>
                        </>))}
                    </div>
                    <div className="summary" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Summary</h4>
                        <p>
                            {data1.summary}
                        </p>
                    </div>
                    <div className="skills" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Skills</h4>
                        {data1.skills.map((skill) => (<p>{skill}</p>))}
                    </div>
                    <div className="projects" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        {data1.projects.map((project) => (
                            <>
                                <h5>{project.name}</h5>
                                <p>{project.description}</p>
                                <p>{project.url}</p>
                            </>
                        ))}
                    </div>
                    <div className="education" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Education</h4>
                        {data1.education.map((edu) => (<>
                            <h5>{edu.degree}</h5>
                            <p>
                                {edu.graduation_score}
                            </p>
                            <p>{edu.institution} </p>
                        </>))}
                    </div>
                    <div className="certifications" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Certifications</h4>
                        {data1.certifications.map((certification) => (
                            <p>
                                {certification}
                            </p>
                        ))}
                    </div>
                    <div className="achievements" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Achievements</h4>
                        {data1.achievements.map((achievement) => (<p>
                            {achievement}
                        </p>))}
                    </div>
                    <div className="hobbies" style={{ color: "#787676", width: "90%", margin: "auto" }}>
                        <h4>Hobbies</h4>
                        <div style={{ display: "flex", flexDirection: "row", }}>
                            {data1.hobbies.map((hobbie) => (
                                <>
                                    <p>{hobbie},&nbsp;</p>
                                </>
                            ))}
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
