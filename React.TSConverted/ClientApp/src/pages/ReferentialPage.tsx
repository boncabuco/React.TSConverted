import { useEffect, useState } from "react";
import ReferentialTable from "../components/ReferentialTable"
import ColumnDefinition from "../models/ColumnDefinition";
import Modal from "../components/Modal"
import ModalProps from '../models/ModalProps';

const ReferentialPage = () => {
    const [header, setHeader] = useState([]);
    const [body, setBody] = useState([]);
    

    const headerData: ColumnDefinition[] = [
        {
            key: "utCode",
            display: "UTCode",
            dataType: "string",
            isPrimary: true,
            limit: 20
        },
        {
            key: "firstName",
            display: "First Name",
            dataType: "string",
            isPrimary: false,
            limit: 20
        },
        {
            key: "lastName",
            display: "Last Name",
            dataType: "string",
            isPrimary: false,
            limit: 20
        },
        {
            key: "age",
            display: "Age",
            dataType: "int",
            isPrimary: false,
            limit: 20
        }
    ];

    useEffect(() => {
        
        const searchParams = new URLSearchParams(window.location.search);
        const model = searchParams.get("model");

        fetch("/referential/header/" + model)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setHeader(data)
            })
            .catch((error) => console.log(error));


        fetch('referential/data/' + model)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setBody(data)
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <ReferentialTable columnDefinitions={header} bodyData={body}></ReferentialTable>
        </>
        
    )
}

export default ReferentialPage