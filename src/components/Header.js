import { useState } from "react";


const Header = () => {

    const [tracks, setTracks] = useState([]);

    const getTracks = async () => {
        const response = await fetch('');
        const data = await response.json();
        setTracks(data.results);
    }

    getTracks();
    

    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">J2Z-MUSIC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      
      <form className="d-flex w-75 " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>

  </div>
</nav>
</div>
    )
}

export default Header;