import React from 'react';
import { FaAngleUp, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';
import AreaChart from '../Charts/AreaChart';
import PieChart from '../Charts/PieChart';
import Project from '../ProjectCard/Project';
import ColorBox from '../ColorSystem/ColorBox';
import Illustration from '../Illustrations/Illustration';
import DevApproach from '../Approach/DevApproach';

const Homepage = () => {
  return (
    <>
      <div class="container-fluid">

        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#!" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-0">
            {/* <i class="fas fa-download fa-sm text-white-50"></i> */}
            <FaDownload class="fas fa-download fa-sm text-white-50 me-2" />
            Generate Report
          </a>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">
          <Card />
        </div>

        {/* <!-- Content Row --> */}

        <div class="row">
          {/* <!-- Area Chart --> */}
          <AreaChart />
          {/* <!-- Pie Chart --> */}
          <PieChart />
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">

          {/* <!-- Content Column --> */}
          <div class="col-lg-6 mb-4">

            {/* <!-- Project Card Example --> */}
            <Project />

            {/* <!-- Color System --> */}
            <ColorBox />

          </div>

          <div class="col-lg-6 mb-4">

            {/* <!-- Illustrations --> */}
            <Illustration />

            {/* <!-- Approach --> */}
            <DevApproach />

          </div>
        </div>

      </div>
      <Link class="scroll-to-top rounded" to="#page-top">
        <FaAngleUp class="fas fa-angle-up" />
      </Link>
    </>
  );
};

export default Homepage;