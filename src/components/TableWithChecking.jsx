import React from 'react';

// import data from "../data.json"

export default function TableWithChecking({tableData, setIndex}) {

    // const data1 = data.response.response[0]

    // let candidates = { name: "Avijit", CatA: "9/10", CatB: "8/10", CatC: "7/10" }
    let tableData1 = tableData;
    // console.log(tableData);
    return (
        <>

            <table className="container">
                <thead>
                    <tr style={{ maxWidth: "94%", margin: "auto" }}>
                        {tableData1.tableName.map((data) =>
                            (<th key={data} style={{ color: "#7B8698", minWidth: "28%", width: "30%", margin: "auto" }}>{data}</th>)
                        )}
                    </tr>
                </thead>
                <br />
                <tbody>
                    {tableData1?.jobsData.map((job, i) => (
                        <>
                            <tr key={i} onClick={()=> {setIndex(i)}} >

                                <td style={{ paddingLeft: "10px" }}>
                                    <input type="checkbox" name={job?.job_title || job?.personal_information.name} id={job?.job_title || job?.personal_information.name} style={{ marginRight: "10px" }} />
                                    {job?.job_title || job?.personal_information.name || "--"}
                                    <hr style={{ width: "120%" }} />
                                </td>
                                <td style={{ paddingLeft: "10px" }}>{job?.applicants || job?.relevant_skill_compatibility || "--"} <hr style={{ width: "120%" }} /></td>
                                <td style={{ paddingLeft: "10px" }}>{job?.shortlisted || job?.experience_score || "--"} <hr style={{ width: "120%" }} /></td>
                                <td style={{ paddingLeft: "10px" }}>{job.hired || job?.employee_loyalty_score || "--"} <hr style={{ width: "120%" }} /></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}
