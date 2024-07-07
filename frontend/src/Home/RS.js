import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'

const RS = () => {
    const [jsonData, setJsonData] = useState(null);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/Scientists`, {
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
				<h2 className="head-medicineTaken">Radar & Sensor Employees Details</h2>
        <div className="medicine-item2" >
				{/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */
				jsonData.allScientistRecords.map((item) => (
					<div key={item._id}>
            <div className="medicinecard2">
            <img src={item.image} alt={item.name} />
            <div className="medicine-detail2">
            
						<div><b>Name:</b> {item.name}</div>
						<div><b>position:</b> {item.position}</div>
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

export default RS



