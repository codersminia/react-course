import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";

const JobPage = () => {

    const {id} = useParams();
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchjob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data)
            } catch (error) {
                console.log('Error Fetching Job:', error);
            } finally{
                setLoading(false);
            }
        }

        fetchjob()
    }, [])

    return loading ? <Spinner/> : (
        <h1>{job.title}</h1>
    )
}

export default JobPage;