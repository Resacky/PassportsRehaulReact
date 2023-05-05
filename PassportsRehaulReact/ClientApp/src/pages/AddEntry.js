import OtherPageLinks from "../components/OtherPageLinks";
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";

function AddEntry() {
    return (
        <>
        // AddEntry Page
            <OtherPageLinks />
            <ApplicantInformation />
            <LockBoxDropdownMenu />
            <TypeOfPassportBox />
            <StateDepartment />
            //potentially add Payment/Travel portion w/ State Department Check Amount and the Date of departure to be a date?
        </>
    );
}

export default AddEntry;