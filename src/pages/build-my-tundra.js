import React, {useState, useEffect} from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"

import PriceFinanceBar from "../components/buildMyTundra/priceFinanceBar"
import MainImage from "../components/buildMyTundra/mainImage"
import FeatureBar from "../components/buildMyTundra/featureBar";
import MobileFeatureSection from "../components/buildMyTundra/mobileFeatureSection";
import MobileSelectionTab from "../components/buildMyTundra/mobileSelectionTab";

//import 1794 images
import Black1794 from "../images/tundra/1794/Black1794.png"
import Blue1794 from "../images/tundra/1794/Blue1794.png"
import Grey1794 from "../images/tundra/1794/Grey1794.png"
import Green1794 from "../images/tundra/1794/Green1794.png"
import Mesquite1794 from "../images/tundra/1794/Mesquite1794.png"
import Pearl1794 from "../images/tundra/1794/Pearl1794.png"
import Red1794 from "../images/tundra/1794/Red1794.png"
import Silver1794 from "../images/tundra/1794/Silver1794.png"

//import Capstone Images
import BlackCapstone from "../images/tundra/Capstone/BlackCapstone.png"
import BlueCapstone from "../images/tundra/Capstone/BlueCapstone.png"
import GreyCapstone from "../images/tundra/Capstone/GreyCapstone.png"
import PearlCapstone from "../images/tundra/Capstone/PearlCapstone.png"
import RedCapstone from "../images/tundra/Capstone/RedCapstone.png"
import SilverCapstone from "../images/tundra/Capstone/SilverCapstone.png"

//import Limited Images
import BlackLimited from "../images/tundra/Limited/BlackLimited.png"
import BlueLimited from "../images/tundra/Limited/BlueLimited.png"
import GreenLimited from "../images/tundra/Limited/GreenLimited.png"
import GreyLimited from "../images/tundra/Limited/GreyLimited.png"
import MesquiteLimited from "../images/tundra/Limited/MesquiteLimited.png"
import PearlLimited from "../images/tundra/Limited/PearlLimited.png"
import RedLimited from "../images/tundra/Limited/RedLimited.png"
import SilverLimited from "../images/tundra/Limited/SilverLimited.png"
import WhiteLimited from "../images/tundra/Limited/WhiteLimited.png"

//import Platinum Images
import BlackPlatinum from "../images/tundra/Platinum/BlackPlatinum.png"
import BluePlatinum from "../images/tundra/Platinum/BluePlatinum.png"
import GreyPlatinum from "../images/tundra/Platinum/GreyPlatinum.png"
import PearlPlatinum from "../images/tundra/Platinum/PearlPlatinum.png"
import RedPlatinum from "../images/tundra/Platinum/RedPlatinum.png"
import SilverPlatinum from "../images/tundra/Platinum/SilverPlatinum.png"

//import SR Images
import BlackSR from "../images/tundra/SR/BlackSR.png"
import GreySR from "../images/tundra/SR/GreySR.png"
import SilverSR from "../images/tundra/SR/SilverSR.png"
import WhiteSR from "../images/tundra/SR/WhiteSR.png"

//import SR5 Images
import BlackSR5 from "../images/tundra/SR5/BlackSR5.png"
import BlueSR5 from "../images/tundra/SR5/BlueSR5.png"
import GreenSR5 from "../images/tundra/SR5/GreenSR5.png"
import GreySR5 from "../images/tundra/SR5/GreySR5.png"
import RedSR5 from "../images/tundra/SR5/RedSR5.png"
import RockSR5 from "../images/tundra/SR5/RockSR5.png"
import SilverSR5 from "../images/tundra/SR5/SilverSR5.png"
import WhiteSR5 from "../images/tundra/SR5/WhiteSR5.png"

//import TRDPRO Images
import BlackTRDPRO from "../images/tundra/TRDPRO/BlackTRDPRO.png"
import RockTRDPRO from "../images/tundra/TRDPRO/RockTRDPRO.png"
import SolarTRDPRO from "../images/tundra/TRDPRO/SolarTRDPRO.png"
import WhiteTRDPRO from "../images/tundra/TRDPRO/WhiteTRDPRO.png"

const pageStyles = {
    padding: 0,
    margin: "100px 0 0 0",
    backgroundColor: "white"
  }

const Main = styled.div`
padding: 0;
font-family: 'visby',sans-serif;
color: white;
h1 {
    /* margin-top: 100px; */
    text-align: center;
    color: white;
    font-size: 50px;
}
body {
    
    margin: 0;
    padding: 0;
}

video {
    gridArea: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    object-fit: cover;
    object-position: 32%; 
    height: 100vh;
    @media(maxWidth){
        /* object-fit: cover;
        object-position: 32%; 
        height: 100vw;
        */
    }
}
.popup {
    @media (max-width: 1050px){
        top: 15%;
        width: 80%;
        left: 10%;
    }
    left: calc(35vw - 350px);
    text-align: center;
    width: 700px;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 60%;
    z-index: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    /* margin: 10px; */
    /* padding: 20px; */
    background-color: white;
    border-radius: 10px;
    color: black;
    p {
        padding: 20px;
    }
    a {
        margin: 20px;
    }
}
.none {
    display: none;
}
`
const Row = styled.div`
display: flex;
justify-content: right;
flex-direction: row;
align-items: center;
`




//needed so window.width doesn't thow error
const isBrowser = typeof window !== "undefined";


const IndexPage = ({display=false}) => {
    
    const [price, setPrice] = useState(0);
    const [activeGrade, setActiveGrade] = useState(["1794",32000, 0]);
    const [activeColor, setActiveColor] = useState(["Supersonic Red",100, 5]);

    const [selectionStage, setSelectionStage] = useState(0);
    

    const grades = [
        {name: "1794", colors: ["Midnight Black Metallic","Blueprint", "Army Green","Magnetic Grey Metallic", "Smoked Mesquite", "Wind Chill Pearl", "Supersonic Red", "Celestial Silver Metallic"], src: [Black1794, Blue1794, Green1794, Grey1794, Mesquite1794, Pearl1794, Red1794, Silver1794], price: "89,091"},
        {name: "Capstone", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackCapstone, BlueCapstone, GreyCapstone, PearlCapstone, RedCapstone, SilverCapstone], price: "113,553"},
        {name: "Limited", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Smoked Mesquite","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic", "White"], src: [BlackLimited, BlueLimited, GreenLimited, GreyLimited,MesquiteLimited, PearlLimited, RedLimited, SilverLimited, WhiteLimited], price: "72,351"},
        {name: "Platinum", colors: ["Midnight Black Metallic","Blueprint","Magnetic Grey Metallic","Wind Chill Pearl","Supersonic Red","Celestial Silver Metallic"], src: [BlackPlatinum, BluePlatinum, GreyPlatinum, PearlPlatinum, RedPlatinum, SilverPlatinum], price: "88,520"},
        {name: "SR", colors: ["Midnight Black Metallic","Magnetic Grey Metallic","Celestial Silver Metallic", "White"], src: [BlackSR, GreySR, SilverSR, WhiteSR], price: "55,490"},
        {name: "SR5", colors: ["Midnight Black Metallic","Blueprint","Army Green","Magnetic Grey Metallic","Supersonic Red","Lunar Rock","Celestial Silver Metallic", "White"], src: [BlackSR5, BlueSR5, GreenSR5, GreySR5, RedSR5,RockSR5, SilverSR5, WhiteSR5], price: "55,490"},
        {name: "TRDPRO", colors: ["Midnight Black Metallic","Lunar Rock","Solar Octane", "White"], src: [BlackTRDPRO, RockTRDPRO, SolarTRDPRO, WhiteTRDPRO], price: "103,115"},
    ]


    //update price
    useEffect(() => {
        if (price !== grades[activeGrade[2]]){setPrice(grades[activeGrade[2]].price)}
    });
    if (isBrowser && window.innerWidth > 1050){
        // desktop page
  return (
      <Layout hideFooter={true} invertNav={true}>
        <Main style={pageStyles}>
        <title>Home Page</title>
        <PriceFinanceBar price={price}/>
        <Row>
            <MainImage src={grades[activeGrade[2]].src[activeColor[2]]} />
            <FeatureBar grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} />
        </Row>
        </Main>
    </Layout>
  )
    } else {
        // mobile page
        return (
            <Layout hideFooter={true} invertNav={true}>
                <Main style={pageStyles}>
                    <title>Home Page</title>
                    <MainImage src={grades[activeGrade[2]].src[activeColor[2]]}/>
                    <PriceFinanceBar price={price}/>
                    <MobileSelectionTab selectionStage={selectionStage} updateSelectionStage={(newStageNumber) => {setSelectionStage(newStageNumber)}}/>
                    <MobileFeatureSection model="Tundra" selectionStage={selectionStage} grades={grades} activeGrade={activeGrade} activeColor={activeColor} updateActiveColor={(color) => {setActiveColor(color); console.log(color);}} updateActiveGrade={(grade) => {setActiveGrade(grade); setActiveColor(["Midnight Black Metallic",100, 0])}} />
                </Main>
            </Layout>
        )
    }
}

export default IndexPage