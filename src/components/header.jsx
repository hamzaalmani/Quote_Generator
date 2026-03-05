import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to ="/"> 
          <img src="/logo.png" alt="LSA Logo" />
        </Link>
      </div>

      <div className="welcome">
        Welcome to LSA Quote Generator
      </div>
    </div>
  );
}

export default header;