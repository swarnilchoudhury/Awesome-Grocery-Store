import './headers.css'


const Headers=()=>(

<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <h2 className="navbar-brand">Awesome Grocery Store</h2>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <Link className="nav-link active" to="/">Home Page</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/create">Create</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
        </>

);

export default Headers;