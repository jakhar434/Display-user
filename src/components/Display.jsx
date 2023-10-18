import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; //BsReception4
import "../App.css";

export default function Displayuser() {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <div>
              <div className="dashboard" style={{ backgroundColor: "whitesmoke" }}  key={index}>
                <div className="cardHeading1">
                  <div className="sideView1" style={{ display: "flex", alignItems: "center" }}>
                    {!user ? (
                      <BsReception4 />
                    ) : (
                      <>
                        <div className="image">
                          <img src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" alt="QuickSell" />
                        </div>
                      </>
                    )}
                    <span>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <BsPlusLg />
                    <span style={{ letterSpacing: "2px", paddingLeft:"12px",paddingBottom:"5px"}}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (

                      <div className="container my-3" style={{boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)"}}>
                        <div style={{ width: "90%" }} className='row'>
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
                            <h7 style={{ color: "grey" }}>{element.id}</h7>
                            <img alt="sells" className="image" src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg" />
                          </div>
                        </div>

                        <div className="title">
                          <p>{element.title}</p>
                        </div>
                        <div style={{width:"90%"}}className='row'>
                          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center", paddingBottom: "4px" }}>
                            <img style={{ width: "20px", height: "20px", border: "0.4px solid grey",padding:"2px", borderRadius:"5px", borderRadius:"0%", marginRight:"3px"}} src="https://cdn-icons-png.flaticon.com/128/39/39934.png" />
                            <div style={{ border: "0.5px solid grey", padding:"3px", borderRadius:"5px"}}>
                              <span>●</span>
                              <h style={{color: "grey", marginLeft:"1px"}}>{element.tag}</h>
                            </div>
                          </div>
                        </div>
                      </div>
                    );

                  })}
                </div>
              </div>
            </div>
          
          );
        })}
      </div>
    )
  );
};


