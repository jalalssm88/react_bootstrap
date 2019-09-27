import React, { Component } from 'react'
import slider2 from '../static/slider2.jpg';

export default class Slider extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <hr class="style1"></hr>

                    <div className="carousel slide">
                        <img src={slider2} style={{width:"100%"}}></img>
                    </div>
                    <hr class="style1"></hr>
                </div>
            </div>
        )
    }
}
