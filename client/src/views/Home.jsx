import BuyWater from "../components/BuyWater"
import NavBar from "../components/NavBar"
import Slide from "../components/Slide"
import { useState } from 'react'
import Products from "../components/Products"
import  Footerr  from "../components/Footerr"



const Home = () => {

    const [clients, setClients] = useState([])

    const updateClient = (client) => {
        setClients([...clients, client])
    }

    return (
        <>
        <div className="homeContainer">
            <NavBar />
            <Slide />
            <Products />
            <BuyWater updateClient={updateClient} />
            <Footerr></Footerr>
        </div>

        </>

    )
}

export default Home