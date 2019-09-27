import React, { Component } from 'react'

import men_shirt1 from '../static/men_shirt1.jpg'
import men_shirt2 from '../static/men_shirt2.jpg'
import men_shirt3 from '../static/men_shirt3.jpg'
import men_shirt4 from '../static/men_shirt4.jpg'


export default class BottomSection extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div class="card" >
                        <img class="card_image card-img-top" src={men_shirt1} />
                        <div class="card_body card-body">
                            <h5 class="card-title">New style form shirts for men</h5>
                            <p style={{color:"#f57224"}} class="card-text">Rs. 800</p>
                            <a href="#" class="card_button btn btn-warning btn-block">view Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img class="card_image card-img-top" src={men_shirt2} />
                        <div class="card_body card-body">
                            <h5 class="card-title">New style form shirts for men</h5>
                            <p style={{color:"#f57224"}} class="card-text">Rs. 800</p>
                            <a href="#" class="card_button btn btn-warning btn-block">view Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img class="card_image card-img-top" src={men_shirt3} />
                        <div class="card_body card-body">
                            <h5 class="card-title">New style form shirts for men</h5>
                            <p style={{color:"#f57224"}} class="card-text">Rs. 800</p>
                            <a href="#" class="card_button btn btn-warning btn-block">view Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img class="card_image card-img-top" src={men_shirt4} />
                        <div class="card_body card-body">
                            <h5 class="card-title">New style form shirts for men</h5>
                            <p style={{color:"#f57224"}} class="card-text">Rs. 800</p>
                            <a href="#" class="card_button btn btn-warning btn-block">view Details</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
