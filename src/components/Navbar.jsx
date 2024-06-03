// import 'Navbar.css';
export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://app.shiprocket.in/sr_login/assets/images/srlogo.svg " alt="logo"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Home</a></li>
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Contact</a></li>
            <li><a className="dropdown-item" href="#">Shop</a></li>
          </ul>
          <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        </li>
      </ul>
      {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
      <button class="btn btn-primary" type="submit">Button</button>
    </div>
  </div>
</nav>
      
    </div>
  );
}
