import { useState } from "react";
import Navigation from "../header/navigation";
import SportsInfo from "../header/sportsInfo";
import Banner from "./banner";

export default function Content() {
    const [value, setValue] = useState(false);

    return (
        <div className="h-content w-full flex justify-center">
            <div className="w-mainWidth h-full flex flex-row justify-end">
                <div >
                    <Banner />
                </div>
            </div>
        </div>
    );
}