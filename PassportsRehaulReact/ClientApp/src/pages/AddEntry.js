import OtherPageLinks from "../components/OtherPageLinks";
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";

import "../styles/AddEntryStyles/AddEntryStyle.css";

function AddEntry() {
    return (
        <>
            <div className="mainContainer">
                <div>
                    <OtherPageLinks />
                </div>
                <div>
                    <ApplicantInformation />
                    <LockBoxDropdownMenu />
                    <TypeOfPassportBox />
                    <StateDepartment />
                </div>
            </div>
        </>
    );
}

export default AddEntry;