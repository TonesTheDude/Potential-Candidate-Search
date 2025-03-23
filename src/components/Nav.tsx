import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <Link to = "/">Home Page</Link>
      <Link to = "SavedCandidates">Candidate Page</Link>
    </div>
    
  )
};

export default Nav;
