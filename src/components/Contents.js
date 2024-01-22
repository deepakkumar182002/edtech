import React from 'react'
import card1 from "../img/card1.png"
import card2 from "../img/card2.png"
import card3 from "../img/card3.png"
import card4 from "../img/card4.png"
import card5 from "../img/card5.png"
import card6 from "../img/card6.png"
export default function Contents() {
    return (
        <>
            <div className="container">
                <div className="deadings my-5 text-center ">
                    <h1>Discover Our Popular</h1>
                    <h1>Courses</h1>
                    <p>it is a long established fact that a reader will be distracted by the readable</p>
                    <p>content of a page when looking at its layout.</p>
                </div>

                {/* ############  1  ############# */}
                <div className="row align-items-start">
                    <div class="col card mb-3 mx-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card1} class="img-fluid rounded-start" alt="..." />
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
                    <div class=" col card mb-3 " style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card2} class="img-fluid rounded-start" alt="..." />
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
                    <div class="col card mb-3 mx-3 " style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card3} class="img-fluid rounded-start" alt="..." />
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
                    <div class="col card mb-3 " style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card4} class="img-fluid rounded-start" alt="..." />
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
                    <div class=" col card mb-3 mx-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card5} class="img-fluid rounded-start" alt="..." />
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
                    <div class="col card mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card6} class="img-fluid rounded-start" alt="..." />
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
            </div>
        </>
    )
}
