import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './Contact.css'
import transition from "./transition";
class Contact extends React.Component {


    render() {


        return <>   
        <div className="bgact">
        <Navbar></Navbar>
        <Footer></Footer>
        </div>
    </>
    }
}

export default transition(Contact);