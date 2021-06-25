import React from 'react';
import Section from "../components/Section/Section";
import img from "../assets/niños.jpg"
//import img from "https://image.freepik.com/foto-gratis/pancarta-ninos-sorprendidos-mirando-al-borde_155003-13452.jpg"

function Home() {
    return (
        <div>
            <h1>HOME</h1>
           <Section prop= {img}/>
        </div>
    )
}

export default Home;