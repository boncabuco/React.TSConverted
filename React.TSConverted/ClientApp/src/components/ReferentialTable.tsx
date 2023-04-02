import React, { useEffect } from "react";
import ColumnDefinition from "../models/ColumnDefinition";


interface ReferentialTableProps {
    columnDefinitions: ColumnDefinition[],
    bodyData: any[];
}

const ReferentialTable: React.FC<ReferentialTableProps> = ({ columnDefinitions, bodyData }) => {
    
    // Get the header keys from column definitions
    const headers = columnDefinitions.map((column) => column.key);
    
    // Define function to handle cell click event
    const handleCellClick = (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
        // Get the clicked cell and its row and column indices
        const target = event.target as HTMLTableCellElement;
        const row = target.parentElement as HTMLTableRowElement;
        const rowData = bodyData[row.rowIndex - 1];
        const columnIndex = target.cellIndex;
        
        // Find the primary column in column definitions
        const primaryColumn = columnDefinitions.find(column => column.isPrimary) as ColumnDefinition;
        
        // Check if clicked cell belongs to the primary column
        if (primaryColumn && columnDefinitions[columnIndex].key === primaryColumn.key) {
            // Get the data of the clicked cell and display it in an alert
            const rowKey = Object.keys(rowData).find(key => key.toLowerCase() == primaryColumn.key.toLowerCase()) ?? '';
            alert(`Cell (${row.rowIndex}, ${columnIndex}) has primary header. Value: ${rowData[rowKey]}`);
        }
    };

    useEffect(() => {
        // console.log(bodyData);
        // Code here will execute once the component has mounted
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {bodyData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, columnIndex) => {
                            const headerKey = header.toLowerCase();
                            const rowKey = Object.keys(row).find(key => key.toLowerCase() === headerKey);
                            const cellData = rowKey !== undefined ? row[rowKey] : '';

                            return (
                                <td key={`${rowIndex}-${columnIndex}`} onClick={handleCellClick}>
                                    {cellData}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ReferentialTable