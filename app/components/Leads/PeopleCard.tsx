'use client'

import React from "react";
import styles from "./PeopleCard.module.css";
import SvgLogo from "../SVG_Logos/SvgLogo";
import Image from "next/image";
import Link from "next/link";


interface links {
    github:string;
    linkedin:string;
}

interface PeopleCardProps {
    image: string;
    name: string;
    domain: string;
    contact: links;
    index?: number;
}

const PeopleCard:React.FC<PeopleCardProps> = ({image, name, domain, contact, index}) => {

    const green = "#0F9D58";
    const yello = "#F4B400";
    const red = "#DB4437";
    const blue = "#4285F4";

    const [textCol, setTextCol] = React.useState('black')

    return (
        <>        
        <div className={"h-[27rem] w-[17rem] shadow-md rounded-lg overflow-hidden"}
        onMouseEnter={() => setTextCol('white')}
        onMouseLeave={() => setTextCol('black')}
        >
            <div 
            className={styles.personcard + 
                " relative w-full h-full flex flex-col justify-center items-center z-10 overflow-hidden transition-colors duration-300 ease-in hover:transform hover:translate-y-0 hover:rounded-md "
            }>
                <div className={`w-[${textCol==='black' ? '70' : '100'}%] h-[60%] relative flex items-center overflow-hidden transition-all duration-[0.3s]`}>
                        <Image src={image} alt="Image" width="140" height="140" 
                        className={"border-3 border-solid border-green rounded-full transition-all duration-500 ease-in-out w-full overflow-hidden " + (textCol==='white' ? '' : '')}
                        /> 
                </div>
                <div className={"w-full h-[40%] flex flex-col justify-center items-center gap-4"}>
                    <h2 className={`flex justify-center items-center text-center text-2xl font-bold text-${textCol}`}>{name}</h2>
                    <p className={`text-${textCol}`}>{domain}</p>
                    {/* <p className={"w-full h-[40px] flex justify-center gap-[10%]"}>
                        {Object.entries(contact).map(([platform, link], index) =>
                            <Link href={link.toString()} key={index} className={styles.linksa}>
                                        <SvgLogo name={platform} color={textCol}/>
                            </Link>
                        )}
                    </p> */}
                </div>
            </div>
        </div>
        </>
    );
};

export default PeopleCard;
