import { useEffect, useState } from "react";
import ReferentialTable from "../components/ReferentialTable"
import ColumnDefinition from "../models/ColumnDefinition";

const ReferentialPage = () => {
    const [header, setHeader] = useState([]);
    const [body, setBody] = useState([]);

    const headerData: ColumnDefinition[] = [
        {
            key: "utCode",
            dataType: "string",
            isPrimary: true,
            limit: 20
        },
        {
            key: "firstName",
            dataType: "string",
            isPrimary: false,
            limit: 20
        },
        {
            key: "lastName",
            dataType: "string",
            isPrimary: false,
            limit: 20
        }
    ];

    const bodyData = [
        {
            "utCode": "UT2LNY",
            "firstName": "Bon Vincent",
            "lastName": "Cabuco"
        }
    ];

    useEffect(() => {
        fetch("/referential/header")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setHeader(data)
            })
            .catch((error) => console.log(error));

        fetch("referential/data")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setBody(data)
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <ReferentialTable columnDefinitions={header} bodyData={body}></ReferentialTable>
    )
}

export default ReferentialPage