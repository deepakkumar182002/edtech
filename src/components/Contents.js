import React from 'react'
import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"
import card5 from "../img/card5.png"
import card6 from "../img/card6.png"
import card7 from "../img/card7.png"
import card8 from "../img/card8.png"
import card9 from "../img/card9.png"
import card10 from "../img/card10.png"
import card11 from "../img/card11.png"
import card12 from "../img/card12.png"
import card13 from "../img/card13.png"
import profileimg from "../img/profileimg.png"
import profileimg2 from "../img/profileimg2.png"

import "../App.css"
export default function Contents() {
    return (
        <>
            <div className="container">
                <div className="deadings my-5 text-center ">
                    <h1>Discover Our Popular</h1>
                    <h1>Courses</h1>
                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>

                {/* ############  1  ############# */}
                <div className="row align-items-start">
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card1} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card2} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ############  2  ############# */}
                <div className="row align-items-start">
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card3} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card4} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ############  3  ############# */}
                <div className="row align-items-start">
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card5} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 m-1" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 align-self-center">
                                <img src={card6} class="img-fluid rounded-start m-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <button type="button" className="btn btn-primary d-flex m-auto">See more Courses</button>

                <div class="row mb-3 mt-5" style={{ maxWidth: "1800px", background: "#e7f1f5" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={card7} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mt-5">
                                <h2 class="card-title">Explore The E-Learning Instutute</h2>
                                <p class="card-text text-muted">Lorem ipsum dolor sit ametero modi aperiam, et dolorem ipsa quia, ea maiores delectus doloribus quasi tempora odit dolor molestiae quae ullam error vel tenetur alias corrupti quo. Quia neque itaque nobis facere doloribus. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className='card-text text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium deleniti tenetur saepe, a voluptate itaque distinctio molestias architecto assumenda tempore?</p>

                                <div className="d-flex flex-row ">
                                    <p className='fw-bold col'>
                                        <h2>3.2k+</h2>
                                        <span className='text-muted'>Online courses</span>
                                    </p>
                                    <p className='fw-bold col'>
                                        <h2>600+</h2>
                                        <span className='text-muted'>Expert members</span>
                                    </p>
                                    <p className='fw-bold col'>
                                        <h2>1k+</h2>
                                        <span className='text-muted'>Rating & Review</span>
                                    </p>
                                </div>
                                <button type="button" className="btn btn-primary m-auto">Read more</button>
                            </div>

                        </div>
                    </div>
                </div>{/* learning car end */}
                {/* </div> cards container end */}
                <br />
                <br />
                <div class="row justify-content-center" style={{ background: "#289bde", color: "#fff" }}>
                    <div class="row" style={{ maxWidth: "800px" }} >
                        <div className='row fw-bold m-4'>
                            <h1>Ready to join?</h1>
                            <span className='text'>Lorem ipsum dolor sit amet consectetur lorem200 adipisicing elit. Vero soluta assumenda nostrum ex ipsum atque expedita beatae, voluptatum voluptatibus ullam.</span>
                        </div>
                    </div>
                    <div class="row m-2">
                        <div className='col mt-5'>
                            <a href="#" class="btn btn-primary" style={{ background: "#fff", color: "#0096FF", display: "flex", justifyContent: "center" }}>Register Now</a>
                        </div>
                    </div>
                </div>

                <div className="meet-students my-5">
                    <h1>Meet Our Successfull Students</h1>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur eveniet repellat provident facilis cupiditate perspiciatis accusamus. Repellendus, nesciunt quae.</p>
                </div>

                <div className="row justify-content-center">
                    <div class="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                        <img src={card8} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Alina </h5>
                            <p className='text-muted'>UX Designer</p>
                            <a href="#" class="btn btn-primary">Profile</a>
                        </div>
                    </div>
                    <div class="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                        <img src={card9} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Christy</h5>
                            <p className='text-muted'>Mearn Stack Developer </p>
                            <a href="#" class="btn btn-primary">Profile</a>
                        </div>
                    </div>
                    <div class="card m-1 mb-3" style={{ maxWidth: "17rem" }}>
                        <img src={card10} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Deniels</h5>
                            <p className='text-muted'>Graphics Designer</p>
                            {/* <a href="#" class="btn btn-primary">Profile</a> */}
                        </div>
                    </div>
                    <div class="card m-1 mb-1" style={{ maxWidth: "17rem" }}>
                        <img src={card11} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Harward </h5>
                            <p className='text-muted'>Full Stack Developer</p>
                            <a href="#" class="btn btn-primary">Profile</a>
                        </div>
                    </div>
                </div>
                <br />
                <button type="button" className="btn btn-primary d-flex m-auto">View more</button>
                <div className="deadings my-5 text-center ">
                    <h1>Some Student Feedback</h1>

                    <p className='text-muted'>it is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugit dolorem velit impedit laudantium delectus aperiam eveniet culpa atque ea. a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="row justify-content-center">
                    <div class="card" style={{ width: "25rem" }}>
                        <div className="review-img d-flex justify-content-between m-3">
                            <img src={card12} alt="" style={{ width: "2rem" }} />
                            <img src={card13} alt="" />
                        </div>
                        <div class="card-body">
                            <p class="text-muted" style={{ fontSize: "0.8rem" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, blanditiis! Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="profile-img d-flex">
                                <img src={profileimg} alt="" />
                                <div className="text ml-2">
                                    <h5 class="card-title " style={{ fontSize: "0.8rem" }}>Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "0.8rem" }}>Card subtitle</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>{/* main container end */}
        </>
    )
}
