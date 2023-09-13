import { useState } from "react";

const Section = ({title,discription,isVisible,SetIsVisible}) =>{
    // const [isvisible,setIsvisible] = useState(false);
    return(
        <>
            <h2>{title}</h2>
            {isVisible ? 
            <button onClick={()=>SetIsVisible(false)}>
            Hide
            </button>:
            <button onClick={()=>SetIsVisible(true)}>
            Show
            </button>

        }
            {isVisible && <p>{discription}</p>}
            
        </>
    )
}
const Instamart = () =>{
    const [visibleSection,setVisibleSection] = useState("about");
    return(
        <>
        <h1>Instamart</h1>
        <Section 
        title={"About Instamart"} 
        discription={"Aghfh Bjuidkj Cgfguyiug"}
        isVisible = {visibleSection === "about"}
        SetIsVisible = {()=>setVisibleSection(visibleSection === "about" ? "" : "about")}
        ></Section>
        <Section 
        title={"News Instamart"} 
        discription={"Aghfh Bjuidkj Cgfguyiug"}
        isVisible = {visibleSection === "news"}
        SetIsVisible = {()=>setVisibleSection(visibleSection === "news" ? "" : "news")}
        ></Section>
        <Section title={"Contact Instamart"} 
        discription={"Aghfh Bjuidkj Cgfguyiug"}
        isVisible = {visibleSection === "contact"}
        SetIsVisible = {()=>setVisibleSection(visibleSection === "contact" ? "" : "contact")}
        ></Section>
        </>
    );
}
export default Instamart;