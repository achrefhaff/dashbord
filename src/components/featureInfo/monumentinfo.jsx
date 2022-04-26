import {useState,useEffect} from 'react'
import"./monumentinfo.css"
export default function Monumentinfo() {
    const [monument,setMonuments]=useState([]); 
    useEffect(() => {
        fetch("http://localhost:8000/api/v1/monuments")
          .then((monument) => monument.json())
          .then((monument) => setMonuments(monument))
        }, []) 
        let prnique=0;
        let colonial=0
        let byzantine =0
        let romaine =0 
        let medivale = 0
        for (let i = 0; i < monument.length-1; i++) {
        if (monument[i].epoque_dominante == "coloniale") {
            colonial=colonial+1
        }
        else if (monument[i].epoque_dominante =="punique"){
            prnique=prnique+1;
        }
        else if (monument[i].epoque_dominante =="byzantine"){
            byzantine=byzantine+1;
        }
        else if (monument[i].epoque_dominante =="romaine"){
            romaine=romaine+1;
        }
        else if (monument[i].epoque_dominante =="médivale"){
            medivale=medivale+1;
        }
    console.log("monument punique:",prnique)
    console.log("colonial",colonial)
    console.log("byzantine",byzantine) 
    console.log("romaine",romaine)}
  return (
    
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Number of Monuments</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{monument.length}</span>
       
      </div>
      
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Punique Monuments</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{prnique}</span>
       
      </div>
     
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Monuments Colonial</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{colonial}</span>
        
      </div>
    </div>


    <div className="featuredItem">
      <span className="featuredTitle">Monuments byzantine</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{byzantine}</span>
       
      </div>
     
    </div> 


    <div className="featuredItem">
      <span className="featuredTitle">Monuments romaine</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{romaine}</span>
       
      </div>
     
    </div> 
    <div className="featuredItem">
      <span className="featuredTitle">Monuments médivale</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{medivale}</span>
       
      </div>
     
    </div>
  </div>
  )
}
