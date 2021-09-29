import React from "react";
import { Link } from "react-router-dom";

// import css file

import "../../css/Pages/Managepage.css";
import coverImg from "../../images/cover.jpg";
import HomeLeftContent from "../Home/HomeLeftContent";
const Managepage = () => {
  return (
    <div className="Managepage_full_section">
      {/* left content start  */}
      <div>
        <HomeLeftContent />
      </div>
      {/* left content end  */}
      <div>
        {/* Managepage middle section  */}
        <div className="col-9  middle-part">
          {/* <!-- Managepage middle section start  --> */}
          <h3 className="Ad-Cenetr">Ad Center</h3>
          <div className="col">
            <div className="card middle-card">
              {/* managepage cover picture start */}
              <img className="card-img-top" src={coverImg} alt="" />
              {/* managepage cover picture end  */}
              {/* managepage card details body start  */}
              <div className="card-body ">
                <div className="col-10 card-part">
                  <div>
                    <h5 className="card-title">
                      Get started with a recomendation for your first Ad
                    </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <button type="button" className="btn Get-button ">
                    Get strated
                  </button>
                </div>
                {/* managepage card details body end  */}
              </div>
            </div>
          </div>

          {/* <!--Managepage  middle summary/ads/tools and business card section start --> */}
          <div className="middlebar-grid">
            {/* <!-- summary and Ads section start --> */}
            <div>
              {/* Summary section start  */}
              <div className="summary-section">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Summary</h5>
                  <div className="dropdown">
                    <button
                      className="btn btn-dropdown dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      last 60 days
                    </button>
                    {/* summary section dropdown button start  */}
                    <ul
                      className="dropdown-menu menu-drop"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Link className="dropdown-item">
                        <li>Action</li>
                      </Link>
                      <Link className="dropdown-item">
                        <li>Another action</li>
                      </Link>
                      <Link className="dropdown-item">
                        <li>Something else here</li>
                      </Link>
                    </ul>
                    {/* summary section dropdown button end  */}
                  </div>
                </div>
                <div className="summary-part">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="summary-side">
                    {/* Summary box-1 start  */}
                    <div className="summary-box">
                      <div>
                        <span
                          className="iconify"
                          data-icon="fa-solid:user-friends"
                        ></span>
                        <span
                          className="iconify"
                          data-icon="fluent:book-question-mark-24-filled"
                        ></span>
                      </div>
                      <div>
                        <p>Reach</p>
                      </div>
                    </div>
                    {/* Summary box-1 end  */}
                    {/* Summary box-2 start  */}
                    <div className="summary-box">
                      <div>
                        <span
                          className="iconify"
                          data-icon="fa-solid:user-friends"
                        ></span>
                        <span
                          className="iconify"
                          data-icon="fluent:book-question-mark-24-filled"
                        ></span>
                      </div>
                      <div>
                        <p>Post Engagement</p>
                      </div>
                    </div>
                    {/* Summary box-2 end  */}
                    {/* Summary box-3 start  */}
                    <div className="summary-box">
                      <div>
                        <span
                          className="iconify"
                          data-icon="fa-solid:user-friends"
                        ></span>
                        <span
                          className="iconify"
                          data-icon="fluent:book-question-mark-24-filled"
                        ></span>
                      </div>
                      <div>
                        <p>Link clicks</p>
                      </div>
                    </div>
                    {/* Summary box-3 end  */}
                  </div>
                </div>
              </div>
              {/* Sumarry section end  */}
              {/* <!-- ads section start --> */}
              <div className="mt-2">
                <div className="summary-section">
                  {/* Ads section title start */}
                  <h4>Ads</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  {/* Ads section card end  */}
                  <div className="list-custom">
                    {/* Ads section card start  */}
                    <div className="card ">
                      <ul className="list-group list-group-flush ">
                        <li id="item-text" className="list-group-item">
                          An item
                        </li>
                        <li id="item-text" className="list-group-item">
                          A second item
                        </li>
                        <li id="item-text" className="list-group-item">
                          A third item
                        </li>
                      </ul>
                    </div>
                    {/* Ads section card end  */}
                  </div>
                </div>
              </div>
              {/* Ads section end  */}
            </div>
            {/* summary section end  */}
            {/* <!-- create Ad button /Tools/ busines start  --> */}
            <div>
              {/* Create button start  */}
              <div className="Crate-button">
                <button type="button" className="btn-create">
                  Create Ad
                </button>
              </div>
              {/* Create button end  */}
              {/* <!-- Tools card start  --> */}
              <div className="mt-2">
                <div className="summary-section">
                  {/* Tools card heading start  */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Tools</h4>
                    <span className="iconify" data-icon="bi:three-dots"></span>
                  </div>
                  {/* Tools card heading end  */}
                  {/* Tools card item-1 start  */}
                  <div className="Tools-sub">
                    <span className="iconify" data-icon="bx:bx-news"></span>
                    <div>
                      <h6>Get help building your advertising strategy</h6>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis, voluptas!
                      </p>
                      <hr />
                    </div>
                  </div>
                  {/* Tools card item-1 end  */}
                  {/* Tools card item-2 start */}
                  <div className="Tools-sub">
                    <span
                      className="iconify"
                      data-icon="fa-solid:user-friends"
                    ></span>
                    <div>
                      <h6>Audiences</h6>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis, voluptas!
                      </p>
                      <hr />
                    </div>
                  </div>
                  {/* Tools card item-2 end  */}
                  {/* Tools card item-3 start  */}
                  <div className="Tools-sub">
                    <span
                      className="iconify"
                      data-icon="fluent:payment-28-filled"
                    ></span>
                    <div>
                      <h6>payment settings</h6>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis, voluptas!
                      </p>
                    </div>
                  </div>
                  {/* Tools card item-3 end  */}
                </div>
              </div>
              {/* <!-- grow your business card start --> */}
              <div className="mt-2">
                <div className="summary-section">
                  {/* grow your business heading start */}
                  <div>
                    <h4>Grow Your Business</h4>
                  </div>
                  {/* grow your business heading end  */}
                  {/* grow your business item start  */}
                  <div className="Tools-sub">
                    <span
                      className="iconify"
                      data-icon="healthicons:ui-user-profile-negative"
                    ></span>
                    <div>
                      <h6>Get help building your advertising strategy</h6>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis, voluptas!
                      </p>
                      <hr />
                    </div>
                  </div>
                  {/* grow your business item end  */}
                </div>
              </div>
              {/* grow your business card end  */}
            </div>
            {/* <!-- create Ad button /Tools/ busines end  --> */}
          </div>
          {/* <!--Managepage  middle summary/ads/tools and business card section end --> */}
        </div>
      </div>
    </div>
  );
};

export default Managepage;
