import React, { ReactNode, useEffect, useState } from 'react';
import ModalProps from '../models/ModalProps';

const Modal: React.FC<ModalProps> = ({ onClose, show, header, data }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputValueNum, setInputValueInt] = useState(0);
    // const data = {
    //     countryCode: 'BB', 
    //     countryName: 'DTXDZK', 
    //     population: 100
    // };

    useEffect(() => {
        //console.log(data["countryCode"])
        // Generate the HTML elements dynamically based on the keys of the data object
        // const htmlElements = Object.keys(data).map((key) => {
        //     //document.getElementById(key)?.innerText
        // });
        console.log(data);
        if(data != undefined){
            console.log(data)
            //return data[key.toString()];
        }  
      }, []);
  
    if (!show) {
    return null;
  }

  function getStringValue(key: string) {
    if(data != undefined){
        //console.log(data)
        //console.log("tae");
        return data[key];
    }  
  }

  function getIntValue(key: string) {
    if(data != undefined){
        return parseInt(data[key]);
    }  
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    data[event.currentTarget.id] = event.target.value;
    
  };

  const handleChangeInt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueInt(parseInt(event.currentTarget.value));
    data[event.currentTarget.id] = parseInt(event.currentTarget.value);  
    console.log(parseInt(event.currentTarget.id));
  };

  const styles = {
    width: "100px",
    display: "inline"
  };


  return (
    <div className="">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
      {header.map((header, headerIndex) => {
        if (header.dataType == "int"){
            return (
                <div className="row">
                    <label style={styles}>{header.key}</label>
                    {/* <input id={header.key} type="number" style={styles} value={getIntValue(header.key)}  onChange={handleChangeInt}></input> */}

                    <select className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                
            )
        }
        else if (header.dataType == "string") {
            return (
                <div className="row">
                    <label style={styles}>{header.key}</label>
                    <input id={header.key} type="string" style={styles} value={getStringValue(header.key)} onChange={handleChange}></input>
                </div>
            )
        }
      }
      )}
      </div>
    </div>
  );
};

export default Modal;
