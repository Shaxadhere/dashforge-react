import React, {Component} from 'react'

class Header extends React.Component{
    render(){
        return(
            <div>
                <header class="navbar navbar-header navbar-header-fixed">
                  <a href="../components.html" id="sidebarMenuOpen" class="burger-menu"><i data-feather="arrow-left"></i></a>
                  <div class="navbar-brand">
                    <a href="../index.html" class="df-logo">dash<span>forge</span></a>
                  </div>
                  <div id="navbarMenu" class="navbar-menu-wrapper">
                    <div class="navbar-menu-header">
                      <a href="../index.html" class="df-logo">dash<span>forge</span></a>
                      <a id="mainMenuClose" href="../components.html"><i data-feather="x"></i></a>
                    </div>
                  </div>
                  <div class="navbar-right">
                    <a href="login" class="btn btn-buy"><i data-feather="shopping-bag"></i> <span>Login</span></a>
                  </div>
                </header>
                

            </div>
        )
    }
}

export default Header