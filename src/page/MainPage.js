import React from 'react';
import HeaderComponent from "../component/HeaderComponent";
import HeroComponent from "../component/HeroComponent";
import SectionEmbedComponent from "../component/SectionEmbedComponent";
import SectionGroupComponent from "../component/SectionGroupComponent";
import MainBlockComponents from "../component/MainBlockComponents";
import ProofComponent from "../component/ProofComponent";
import WrapperComponent from "../component/WrapperComponent";
import HubGroupComponent from "../component/HubGroupComponent";
import CircleComponent from "../component/CircleComponent";
import LastCtaComponents from "../component/LastCTAComponents";
import FooterComponents from "../component/FooterComponents";

function MainPage(props) {
    return (
        <>
            <MainBlockComponents>
                <HeaderComponent/>
                <HeroComponent/>
                <SectionEmbedComponent/>
                <ProofComponent/>
            </MainBlockComponents>
            <WrapperComponent/>
            <SectionGroupComponent/>
            {/*<CircleComponent />*/}
            <MainBlockComponents>
                <HubGroupComponent />
            </MainBlockComponents>
            <LastCtaComponents/>
            <FooterComponents />
        </>
    );
}

export default MainPage;
