import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <Link to="/" className="navbar-brand">  ONLINE SHOPPING <FontAwesomeIcon icon={faStore} />  </Link>

    

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">

          <FontAwesomeIcon icon={faHome} />

            </Link>
          
        </li>
        <li className="nav-item">
          <Link to={'/cart'} className="nav-link active" aria-current="page">
          
          <FontAwesomeIcon icon={faCartShopping} /> {/* Use FontAwesomeIcon */}
          </Link>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    );
};

export default Header;
