import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Content.css';


export const Content = props => {
    const contentClass = props.isOpen ? "content open" : "content";
    const [table, setTable] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        return fetch('./data.json')
        .then(data => data.json())
        .then(rows => setTable(rows))
        .catch(err => console.log('error reading json', err))
    } 

    return (
        <div className={contentClass}>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div className="bold">Benefit Code</div></TableCell>
                            <TableCell><div className="bold">Province</div></TableCell>
                            <TableCell><div className="bold">Program of choice</div></TableCell>
                            <TableCell><div className="bold">Rate</div></TableCell>
                            <TableCell><div className="bold">Description</div></TableCell>
                            <TableCell><div className="bold">Effective date</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {table.map((row) => (
                        <TableRow key={row.beneficCode}>
                            <TableCell component="th" scope="row">{row.beneficCode}</TableCell>
                            <TableCell>{row.province}</TableCell>
                            <TableCell>{row.programOfChoice}</TableCell>
                            <TableCell>{row.rate}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.effectiveDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}