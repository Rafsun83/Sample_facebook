import React from 'react'
import { Link } from 'react-router-dom'
// import css file 
import '../../css/Marketplace/Marketplace.css'
import funimg from '../../images/fun.png'
import HomeLeftContent from '../Home/HomeLeftContent'

const Marketplace = () => {
    return (
        <div className='main'>
            <div>
               <HomeLeftContent/>
            </div>
            <div>
            {/* <!--  second middle section  --> */}
            <div className="Marketplace-middle-section">
                <div className="middle-Marketplace">
                    {/* mobile bar */}
          <div className="like-mobile-bar">
            <div className="mobile-bar-like-pages">
              <span
                className="iconify pages-icon"
                data-icon="mdi:flag-variant"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Your pages</strong>
              </div>
            </div>
            <div className="mobile-bar-like-pages">
              <span
                className="iconify like-icon-mobile"
                data-icon="mdi:account-child-circle"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Discover</strong>
              </div>
            </div>
            <div className="mobile-bar-like-pages">
              <span
                className="iconify like-icon-mobile"
                data-icon="mdi:thumb-up"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Like page</strong>
              </div>
            </div>
          </div>
          {/* mobile bar end        */}
                    <div class="Marketplace-invites">
                        <h4><strong>Electronics</strong></h4>
                        <a href="">See All</a>

                    </div>

                    {/* <!-- full card design 1 --> */}

                    <div className="Marketplace-card">
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p >i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design second  --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design third --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                    </div>







                </div>
                <hr/>
              {/* second middle section  */}
                <div className="middle-Marketplace">
                    <div class="Marketplace-invites">
                        <h4><strong>Electronics</strong></h4>
                        <a href="">See All</a>

                    </div>

                    {/* <!-- full card design 1 --> */}

                    <div className="Marketplace-card">
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p >i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design second  --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design third --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                    </div>







                </div>
                <hr/>
                <hr/>


                {/* <!-- Third middle section  --> */}
                <div className="middle-Marketplace">
                    <div class="Marketplace-invites">
                        <h4><strong>Electronics</strong></h4>
                        <a href="">See All</a>

                    </div>

                    {/* <!-- full card design 1 --> */}

                    <div className="Marketplace-card">
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p >i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design second  --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design third --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} class="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- card design fourth --> */}
                        <div className="card card-Marketplace">
                            <a href="">
                                <img src={funimg} className="card-img-top" alt="..."/>
                            </a>
                            <a href="">
                                <div className="card-body">
                                    <div className="Marketplace-name">
                                        <h6><strong>BDT. &#2547 3550</strong></h6>
                                        {/* style="margin-block-start: 0 !important; margin-block-end:0 !important;" */}
                                        <p>i5 66500 9.9ghz gigabyte 8GB Ram DDR4 Ram hnohreoighregh9g9ujg9uj0uj43ujf9heoihgfhvgifhgvoierhgvioheroigheriheiuorh </p>
                                        {/* style="font-size: .9rem; margin-block-end:0 !important;" */}
                                        <p className="text-muted">Dhaka,Dhaka</p>
                                    </div>
                                </div>
                            </a>
                        </div>



                    </div>







                </div>
                <hr/>


            </div>
            </div>
            
        </div>
    )
}

export default Marketplace
