import React from 'react';
import PageHadderAndButton from '../components/PageHadderAndButton';
import TableWithChecking from '../components/TableWithChecking';

export default function JobListPage() {
    const [jobsData, setJobsData] = React.useState(null);
    let component = {
        name: "Your job listings",
        buttons: [
            {
                name: "Show Candidates",
                style: {
                    padding: "4px"
                },
                link : "/candidate"
            },
            {
                name: "Import Existing Job",
                style: {
                    padding: "4px"
                },
                link : "/create-job"
            },
            {
                name: "Post Job",
                style: {
                    padding: "4px"
                },
                link : "/create-job"
            }
        ]
    }
    let letSetIndex = (i) => {
        console.log(i);
    }
    let get_all_job = async () => {
        try {
            let data = await fetch("http://44.198.34.124:5000/view_all_jobs", {method: 'GET'}).then((res) => {return res.json()});
            setJobsData(data.response?.jobs);
            return data.response.jobs
        } catch (error) {
            console.log(error);
            setJobsData([]);
        }
    }
    React.useEffect(() => {
        get_all_job()
    }, []);

    let tableData = { jobsData: jobsData, tableName: ["Name", "Criteria A", "Category B", "Category C"] };
    if (jobsData) {
        return (
            <>
                <PageHadderAndButton component={component} />
                <br />
                <TableWithChecking  tableData={tableData} setIndex={letSetIndex}/>
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
