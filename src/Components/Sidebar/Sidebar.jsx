import React from 'react';
import {
  FaChartArea,
  FaCog,
  FaFolder,
  FaLaughWink,
  FaTable,
  FaTachometerAlt,
  FaWrench
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarImage from '../../assets/img/undraw_rocket.svg';

const Sidebar = () => {
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#!">
        <div class="sidebar-brand-icon rotate-n-15">
          {/* <i class="fas fa-laugh-wink"></i> */}
          <FaLaughWink className='fas fa-laugh-wink fs-2' />
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>


      {/* <!-- Divider --> */}
      <hr class="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li class="nav-item active">
        {/* <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
        </a> */}
        <Link class="nav-link" to="/">
          <FaTachometerAlt className='fas fa-fw fa-tachometer-alt me-2' />
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">
        Interface
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a class="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
          aria-expanded="true" aria-controls="collapseTwo">
          {/* <i class="fas fa-fw fa-cog"></i> */}
          <FaCog className='me-2' />
          <span>Components</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            {/* <a class="collapse-item" href="buttons.html">Buttons</a> */}
            {/* <a class="collapse-item" href="cards.html">Cards</a> */}
            <Link class="collapse-item" to="/buttons">Buttons</Link>
            <Link class="collapse-item" to="cards">Cards</Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li class="nav-item">
        <a class="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseUtilities"
          aria-expanded="true" aria-controls="collapseUtilities">
          {/* <i class="fas fa-fw fa-wrench"></i> */}
          <FaWrench className='me-2' />
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <Link class="collapse-item" to="utilities-colors">Colors</Link>
            <Link class="collapse-item" to="utilities-borders">Borders</Link>
            <Link class="collapse-item" to="utilities-animations">Animations</Link>
            <Link class="collapse-item" to="utilities-others">Other</Link>
            {/* <a class="collapse-item" href="utilities-color.html">Colors</a> */}
            {/* <a class="collapse-item" href="utilities-border.html">Borders</a> */}
            {/* <a class="collapse-item" href="utilities-animation.html">Animations</a> */}
            {/* <a class="collapse-item" href="utilities-other.html">Other</a> */}
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div class="sidebar-heading">
        Addons
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li class="nav-item">
        <a class="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapsePages"
          aria-expanded="true" aria-controls="collapsePages">
          {/* <i class="fas fa-fw fa-folder"></i> */}
          <FaFolder className="fas fa-fw fa-folder me-2" />
          <span>Pages</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            {/* <a class="collapse-item" href="login.html">Login</a> */}
            {/* <a class="collapse-item" href="register.html">Register</a> */}
            {/* <a class="collapse-item" href="forgot-password.html">Forgot Password</a> */}
            <Link class="collapse-item" to="login">Login</Link>
            <Link class="collapse-item" to="register">Register</Link>
            <Link class="collapse-item" to="forgot-password">Forgot Password</Link>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <Link class="collapse-item" to="404-Not-found">404 Page</Link>
            <Link class="collapse-item" to="blank">Blank Page</Link>
            {/* <a class="collapse-item" href="404.html">404 Page</a> */}
            {/* <a class="collapse-item" href="blank.html">Blank Page</a> */}
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li class="nav-item">
        {/* <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
        </a> */}
        <Link class="nav-link" to="charts">
          <FaChartArea className="fas fa-fw fa-chart-area me-2" />
          <span>Charts</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li class="nav-item">
        {/* <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
        </a> */}
        <Link class="nav-link" to="tables">
          <FaTable class="fas fa-fw fa-table me-2" />
          <span>Tables</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr class="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src={SideBarImage} alt="..." />

        <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
      </div>

    </ul>
  );
};

export default Sidebar;