import React, { Component } from 'react'
import logo from '../static/logo.png'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:false,
        }
    }
    toggleNav = (e)=>{
        this.setState({
            display:!this.state.display
        })
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a class="navbar-brand" href="#"><img style={{"height":"30px", "width":"30px;"}} src={logo}></img></a>
                    <button class="navbar-toggler" onClick={this.toggleNav}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" >
                                    Clothing and Fashion
                                </a>
                                <ul class="dropdown-menu first_menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Men's Fashion</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Shirts</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Formal Shirts</a></li>
                                                    <li><a class="dropdown-item submenu3" href="#">Casual Shirts</a></li>
                                                    <li><a class="dropdown-item submenu3" href="#">T-Shirts</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Shalwar kameez</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Kurtas</a></li>
                                                    <li><a class="dropdown-item submenu3" href="#">Shalwar kameez</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Pents</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Jeans Pents</a></li>
                                                    <li><a class="dropdown-item submenu3" href="#">Cotton Jeans</a></li>
                                                    <li><a class="dropdown-item submenu3" href="#">Dress Pents</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Women's Fashion</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Kurtas</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">kurtis</a></li>
                                                    <li><a class="dropdown-item" href="#">branded pret</a></li>
                                                    <li><a class="dropdown-item" href="#">Shalwar kameez</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Tops</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Tunics</a></li>
                                                    <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                                                    <li><a class="dropdown-item" href="#">Blouses and shirts</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Pants jeans</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">pants</a></li>
                                                    <li><a class="dropdown-item" href="#">lagging</a></li>
                                                    <li><a class="dropdown-item" href="#">jeans</a></li>
                                                    <li><a class="dropdown-item" href="#">shorts</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Accessories</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">belts</a></li>
                                                    <li><a class="dropdown-item" href="#">hasts and caps</a></li>
                                                    <li><a class="dropdown-item" href="#">scarves</a></li>
                                                    <li><a class="dropdown-item" href="#">tie</a></li>
                                                    <li><a class="dropdown-item" href="#">tights</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Children Clothes</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item" href="#">baby boy Clothes</a></li>
                                            <li><a class="dropdown-item" href="#">baby girl Clothes</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" >
                                    Electronics
                                </a>
                                <ul class="dropdown-menu first_menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Mobile Phones</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">Apple Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Samsung Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Oppo Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Motrolla Phones</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Audios</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">bluetooth speakers</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Headphones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">portable players</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Mobile Phones</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">Apple Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Samsung Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Oppo Phones</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">Motrolla Phones</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" >
                                    Sports &amp; Outdoor
                                </a>
                                <ul class="dropdown-menu first_menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Excersice &amp; fitness</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">gym machines</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">weights</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">cardio equipments</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Sports Accessories</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">footbal equipment</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">cricket equipment</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Shoes and kits</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item submenu3" href="#">men's section</a></li>
                                            <li><a class="dropdown-item submenu3" href="#">women's section</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;