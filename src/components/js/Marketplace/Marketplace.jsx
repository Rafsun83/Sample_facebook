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
                 {/* <!-- mobile view nav bar  --> */}
          <div className="Yourpages-mobile-bar">
            {/* mobile view bar item-1 start */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify pages-icon"
                  data-icon="mdi:flag-variant"
                ></span>
                <div>
                  <strong className="mobile_nav">Your pages</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-1 end  */}
            {/* mobile view bar item-2 start  */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify modify-icon"
                  data-icon="mdi:account-child-circle"
                ></span>
                <div>
                  <strong className="mobile_nav">Discover</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-2 end  */}
            {/* mobile view bar item-3 start  */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify modify-icon"
                  data-icon="mdi:thumb-up"
                ></span>
                <div>
                  <strong className="mobile_nav">Like page</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-3 end  */}
          </div>
          {/* <!-- mobile view nab bar end  --> */}
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
