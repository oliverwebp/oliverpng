import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './Contact.css'
import transition from "./transition";
import {motion} from 'framer-motion';
class Contact extends React.Component {


    render() {
        return <>   
        <motion.div className="bgact">
        <Navbar></Navbar>
        <Footer></Footer>
        </motion.div>
    </>
    }
}

export default transition(Contact);