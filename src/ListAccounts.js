import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from "axios";
import {API_BASE_URL} from "./constants";

function ListAccounts() {

    const [allAccounts, setAllAccounts] = useState([]);

    useEffect(() => {

        axios.get(`${API_BASE_URL}/api/accounts`)
            .then((response) => setAllAccounts(response.data))
            .catch((error) => console.log(error));

    }, []);

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 130, sortable: false,},
        {field: 'middleName', headerName: 'Middle name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {field: 'dateOfBirth', headerName: 'Date of Birth', width: 130},
        {field: 'phoneNumber', headerName: 'Phone Number', width: 130},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'pin', headerName: 'Pin', width: 130}, //, valueGetter: (params) => `${'*'.repeat(params.row.pin..toString().length)}`},
        {field: 'balance', headerName: 'Balance', width: 130, sortable: false,},
        {field: 'openingDate', headerName: 'Opening Date', width: 130},
    ];

    return (
        <div style={{height: 400, width: '100%', marginTop: '30px'}}>
            <DataGrid
                columns={columns}
                rows={allAccounts}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default ListAccounts;
