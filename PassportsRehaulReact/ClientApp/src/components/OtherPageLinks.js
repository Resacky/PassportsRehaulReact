import { Link } from "react-router-dom";

function OtherPageLinks() {
    return (
        <div>
            <ul>
                <li><Link to="/Home" className="Links">Pass Port Home</Link></li>
                <li><Link to="/AddEntry" className="Links">Add Entry</Link></li>
                <li><Link to="/SearchAndEditEntry" className="Links">Search and Edit Entry</Link></li>
                <li><Link to="/SelectReporting" className="Links">Select a Report</Link></li>
            </ul>
        </div>
    );
}

export default OtherPageLinks;