import React, { Component } from 'react'

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
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" onClick={this.toggleNav}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
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
                                            <li><a class="dropdown-item" href="#">local</a></li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Branded</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Jeans pents</a></li>
                                                    <li><a class="dropdown-item" href="#">dress pents</a></li>
                                                    <li><a class="dropdown-item" href="#">cotton pents</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Children Clothes</a>
                                        <ul class="dropdown-menu dropdown_menu1">
                                            <li><a class="dropdown-item" href="#">local</a></li>
                                            <li class="dropdown-submenu submenu2"><a class="dropdown-item dropdown-toggle" href="#">Branded</a>
                                                <ul class="dropdown-menu dropdown_menu2">
                                                    <li><a class="dropdown-item submenu3" href="#">Jeans pents</a></li>
                                                    <li><a class="dropdown-item" href="#">dress pents</a></li>
                                                    <li><a class="dropdown-item" href="#">cotton pents</a></li>
                                                </ul>
                                            </li>
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
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;