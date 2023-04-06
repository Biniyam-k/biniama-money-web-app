import React from 'react';
import Header from "./Header";
import {Routes, Route} from "react-router-dom";
import ListAccounts from "./ListAccounts";
import CreateAccount from "./CreateAccount";

const App = () => {
    // <> </> is a React Fragment
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListAccounts/>}/>
                <Route path='/create' element={<CreateAccount/>}/>
            </Routes>
        </>
    );
}

export default App;
