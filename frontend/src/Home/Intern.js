import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'
import { useEffect } from "react";

const Intern = () => {
    const [jsonData, setJsonData] = useState(null);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/intern`, {
            withCredentials: true,
          });
          setJsonData(response.data);
                  console.log(response);
        } catch (error) {
          console.log('Error fetching JSON data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <Nav/>
        


      {jsonData ? (
				<>
				<h2 className="head-medicineTaken">Intern Details</h2>
        <div className="medicine-item2" >
				{/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */
				jsonData.allinternRecords.map((item) => (
					<div key={item._id}>
            <div className="medicinecard2">
            <img src={item.image} alt={item.name} />
            <div className="medicine-detail2">
            
						<div><b>Name:</b> {item.name}</div>
						<div><b>Department:</b> {item.department}</div>
                        <div><button>Details</button></div>
						</div>
						</div>
					</div>

				))}
        </div>
				</>
      ) : (
       <div></div>
      )}


    </div>
  )
}
export default Intern
