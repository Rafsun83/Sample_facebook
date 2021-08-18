import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// Icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Imported files
import "../../css/Friends/FriendRequests.css";
import personImg from "../../images/profile.jpg";
import friendImg from "../../images/friend.png";

const FriendRequests = () => {
  return (
    <>
      {/* Friend requests desktop version section starts */}
      <div className="friend__requestSection">
        {/* Friend requests left section starts */}
        <div className="friend__requestsLeftSection pt-3">
          {/* Friend requests header section starts */}
          <div className="friend__requestsHeader px-2">
            <Link to="/friends/">
              <NavigateBeforeIcon className="me-2" />
            </Link>
            <div>
              <Link to="/friends/" className="friend__smallLink">
                <small>Friends</small>
              </Link>
              <h4 className="fw-bold">Friend Requests</h4>
            </div>
          </div>
          {/* Friend requests header section ends */}

          {/* Friend requests border line section starts */}
          <div className="friend__requestsBorderLine"></div>
          {/* Friend requests border line section ends */}

          {/* Friend requests context section starts */}
          <div className="friend__requestsContext mt-3">
            <h6 className="fw-bold px-3">25 Friend Requests</h6>
            <div className="sent__friendRequests px-3 mb-3">
              <small className="fw-bold text-primary">View Sent Requests</small>
            </div>

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">aegeafef Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">aegeafef Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">aegeafef Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">aegeafef Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>

              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* Friend requests person body section starts */}
                <div className="friend__requestsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">hello Alam Arko</p>
                    <small>1w</small>
                  </Link>

                  {/* Friend request button section starts */}
                  <div className="friend__requestsBtn mt-1">
                    <Button variant="contained" className="fw-bold">
                      Confirm
                    </Button>
                    <Button variant="contained" className="fw-bold">
                      Delete
                    </Button>
                  </div>
                  {/* Friend request button section ends */}
                </div>
                {/* Friend requests person body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}
          </div>
          {/* Friend requests context section ends */}
        </div>
        {/* Friend requests left section ends */}

        {/* Friend request right section starts */}
        <div className="friend__requestsRightSection">
          <div className="friend__requestsRightContent">
            <div className="friend__requestRightImg">
              <img src={friendImg} alt="" />
            </div>
            <p className="fw-bold mt-3">
              Select a person's name to preview their profile
            </p>
          </div>
        </div>
        {/* Friend request right section ends */}
      </div>
      {/* Friend requests desktop version section ends */}

      {/* Friend request mobile version section starts */}
      {/* Friends mobile/tab screen section starts */}
      <div className="friend__requestsMobileSection">
        {/* Friends mobile top section starts */}
        <div className="friends__mobileTopSection mt-3">
          <Link to="/friends/suggestions" className="fw-bold">
            Suggestions
          </Link>
          <Link to="/friends/" className="fw-bold">
            Friends
          </Link>
        </div>
        {/* Friends mobile top section ends */}

        <div className="border__line"></div>

        <div className="mobile__friendRequest">
          {/* mobile friend request header section starts */}
          <div className="mobile__friendRequestHeader">
            <div>
              <h4 className="fw-bold">
                Friend Requests <span className="text-primary fw-bold">25</span>
              </h4>
            </div>
            {/* Expand more icon section starts */}
            <div className="friends__mobileExpandMoreIcon">
              <ExpandMoreIcon />
            </div>
            {/* Expand more icon section ends */}
          </div>
          {/* mobile friend request header section ends */}

          {/* Mobile friend request body section starts */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>
          {/* Mobile friend request body section ends */}

          {/* Extra */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>
        </div>
      </div>
      {/* Friends mobile/tab screen section ends */}

      {/* Friend request mobile version section ends */}
    </>
  );
};

export default FriendRequests;
