import React from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Container} from 'react-bootstrap';
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo-blue.png'

const NavigationBar = () => {
  return (
    <header>
      <Navbar className='navbar navbar-default navbar-fixed white no-background bootsnav' collapseOnSelect>
        {/* Start Top Search */}
        <div className='top-search'>
          <Container>
            <div className='input-group'>
              <span class="input-group-addon"><FaSearch/></span>
              <input type="text" class="form-control" placeholder="Search" />
              <span class="input-group-addon close-search"><FaTimes /></span>
            </div>
          </Container>
        </div>
        {/* End Top Search */}

        <div class="container-full">

          {/* Start Atribute Navigation */}
          <div class="attr-nav">
            <ul class="button">
              <li>
                {/* <Link to ="#">Login</Link> */}
                <Link to='/'>Login</Link>
              </li>
              <li>
              <Link to='/'>Sign Up</Link>
              </li>
            </ul>
          </div>
          {/* End Atribute Navigation */}

          {/* Start Header Navigation */}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <FaBars />
            </button>
            <Link to='/' class="navbar-brand">
              <img src={logo} class="logo" alt="Logo" />
            </Link>
          </div>
          {/* <!-- End Header Navigation --> */}

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <Navbar.Toggle aria-controls='navbar-menu'/>
          <Navbar.Collapse id='navbar-menu'>
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
              <li class="dropdown">
                <Link to ="#" class="dropdown-toggle active" data-toggle="dropdown" >Home</Link>
                <ul class="dropdown-menu">
                  <li><Link to ="/index-it-solution.html">It Solution</Link></li>
                  <li><Link to ="/index-startup-agency.html">Startup Agency</Link></li>
                  <li><Link to ="index.html">Marketing Agency</Link></li>
                  <li><Link to ="index-digital-agency.html">Digital Agency</Link></li>
                  <li><Link to ="index-software-landing.html">Software Landing</Link></li>
                  <li><Link to ="business-blue.html">Business Conlusting</Link></li>
                  <li><Link to ="creative-agency.html">Creative Agency</Link></li>
                  <li><Link to ="minimal-ecommerce.html">Minimal Ecommerce</Link></li>
                  <li><Link to ="corporate-business.html">Corporate Business</Link></li>
                  <li><Link to ="app-landing.html">App Landing</Link></li>
                  <li><Link to ="consulting-business.html">Consulting Business</Link></li>
                  <li><Link to ="index-ebook.html">eBook landing</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to ="#" class="dropdown-toggle" data-toggle="dropdown" >Pages</Link>
                <ul class="dropdown-menu">
                  <li class="dropdown">
                    <Link to ="#" class="dropdown-toggle" data-toggle="dropdown" >Projects</Link>
                    <ul class="dropdown-menu">
                      <li><Link to ="projects.html">Our Projects</Link></li>
                      <li><Link to ="project-details.html">Projects Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to ="about-us.html">About Us</Link></li>
                  <li><Link to ="pricing-table.html">Pricing Table</Link></li>
                  <li><Link to ="team.html">Team</Link></li>
                  <li><Link to ="contact.html">Contact Us</Link></li>
                  <li><Link to ="404.html">Error Page</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to ="#" class="dropdown-toggle" data-toggle="dropdown" >Shop</Link>
                <ul class="dropdown-menu">
                  <li><Link to ="shop.html">shop</Link></li>
                  <li><Link to ="shop-single.html">Product Details</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to ="#" class="dropdown-toggle" data-toggle="dropdown" >Services</Link>
                <ul class="dropdown-menu">
                  <li><Link to ="services.html">Services Version One</Link></li>
                  <li><Link to ="services-2.html">Services Version Two</Link></li>
                  <li><Link to ="services-details.html">Services Details</Link></li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to ="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</Link>
                <ul class="dropdown-menu">
                  <li><Link to ="blog-standard.html">Blog Standard</Link></li>
                  <li><Link to ="blog-with-sidebar.html">Blog With Sidebar</Link></li>
                  <li><Link to ="blog-2-colum.html">Blog Grid Two Colum</Link></li>
                  <li><Link to ="blog-3-colum.html">Blog Grid Three Colum</Link></li>
                  <li><Link to ="blog-single.html">Blog Single</Link></li>
                  <li><Link to ="blog-single-with-sidebar.html">Blog Single With Sidebar</Link></li>
                </ul>
              </li>
              <li><Link to ="contact.html">contact</Link></li>
            </ul>
          </div>
          </Navbar.Collapse>
          {/* <!-- /.navbar-collapse --> */}
        </div>
      </Navbar>
      {/* <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Link to='/'>
                <Navbar.Brand className='header-logo-text'>
                    <img src={logo} alt="eShop" />
                    TOPHER SCENTS</Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                       
                        <Link to='/cart'>
                        <Nav.Link>
                            <FaShoppingCart/>
                            
                        </Nav.Link>
                        </Link>
                       
                            <NavDropdown id='username'>
                                <Link to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item >
                                    Logout
                                </NavDropdown.Item>

                            </NavDropdown>
                       
                            <Link to='/login'>
                            <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>
                            </Link>
                       
                        
                            <NavDropdown title='Admin' id='adminmenu'>
                                <Link to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </Link>
                                <Link to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </Link>
                                <Link to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}
    </header>
  )
}

export default NavigationBar;