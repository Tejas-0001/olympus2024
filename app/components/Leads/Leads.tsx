import React from "react";
import  styles from "./Leads.module.css";
import {LeadsDB} from "./LeadsDB";
import PeopleCard from "./PeopleCard";

const Leads = () => {
    return (
        <div className={"w-full"}>
            <div className={"w-full h-1/2 bg-base-200 flex justify-center items-center rounded-lg"}>
                <h1 className={"text-xl lg:text-4xl text-center font-normal my-5"}>Meet The Team</h1>
            </div>
            <div >
                <div className={"w-[85%] flex-col mx-auto py-8"}>
                    <div>
                        <div className={"flex justify-center gap-5 row-gap-16 flex-wrap"}>
                            {LeadsDB.map((Lead, index) => (
                                <PeopleCard key={index} {...Lead} index={index % 4}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leads;
