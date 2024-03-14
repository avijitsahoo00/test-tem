import React from 'react';
import PageHadderAndButton from '../components/PageHadderAndButton';
import TableWithChecking from '../components/TableWithChecking';
import SlideModal from '../components/SlideModal';
import data from "../data.json"

export default function CandidateList() {
    const [candidatesData, setCandidatesData] = React.useState(null);
    const [index, setIndex] = React.useState(0);
    let data1 = candidatesData || data.response?.candidates || data.response?.response;
    let component = {
        name: "Candidate List",
        buttons: [
            {
                name: "Upload CV",
                style: {
                    padding: "4px"
                },
                link : "/upload"
            },
        ]
    }
    let tableData = { jobsData: data1, tableName: ["Name", "Criteria A", "Category B", "Category C"] };
    let get_all_candiate = async () => {
        try {
            let job_data = await fetch("http://44.198.34.124:5000/view_all_jobs", {method: 'GET'}).then((res) => {return res.json()});
            let candidates = []
            let resdata = await fetch("http://44.198.34.124:5000/view_all_candidates", {method: 'GET'}).then((res) => {return res.json()});
            resdata = resdata.response?.candidates
            for (let i = 0; i < 2; i++) {
                candidates.push(resdata[i].candidate_id);
            }
            // console.log(job_data.response.jobs[0]);
            let job_id = job_data.response.jobs[0].job_id;
            console.log(job_id);
            let mainData = await fetch("http://44.198.34.124:5000/rate_candidate" , {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                cache: "force-cache",
                method: "POST",
                body: JSON.stringify({job_id, candidates})
            }).then((d)=> d.json() );
            console.log(mainData.response.response);
            setCandidatesData(resdata);
            return resdata
        } catch (error) {
            console.log(error);
            setCandidatesData([]);
        }
    }
    React.useEffect(() => {
        get_all_candiate()
    }, []);
    let letSetIndex = (i) => {
        setIndex(i)
        document.getElementById("btn-Launch").click()
    }
    if (candidatesData) {
        return (
            <>
                <PageHadderAndButton  component={component} />
                <br />
                <TableWithChecking tableData={tableData} setIndex={letSetIndex} />
                <SlideModal  data={data1[index]}/>
            </>
        )
    } else {
        return (
            <>
                Loading
            </>
        )
    }

}
