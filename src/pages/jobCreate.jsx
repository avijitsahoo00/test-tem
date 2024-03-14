import React from 'react'
import PageHadderAndButton from '../components/PageHadderAndButton';
import TableWithChecking from '../components/TableWithChecking';


export default function JobCreate() {
    const [jobsData, setJobsData] = React.useState(null);
    let component = {
        buttons: [
            {
                name: "Import Existing Job",
                style: {
                    padding: "4px"
                }
            },
            {
                name: "Post Job",
                style: {
                    padding: "4px"
                }
            }
        ]
    }
    let get_all_job = async () => {
        try {
            let data = await fetch("http://44.198.34.124:5000/view_all_jobs", {method: 'GET'}).then((res) => {return res.json()});
            setJobsData(data || []);
            return data
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        get_all_job()
    }, []);

    let tableData = { jobsData: jobsData, tableName: ["Name", "Criteria A", "Category B", "Category C"] };
    return (
        <>
            <PageHadderAndButton component={component} />
            <br />
            
        </>
    )
}
