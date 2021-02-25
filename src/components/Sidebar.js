import React, {Component} from 'react'
import {Link} from 'react-router';

class Sidebar extends React.Component{
    render(){
        return(
            <div>
    <div id="sidebarMenu" class="sidebar sidebar-fixed sidebar-components">
      <div class="sidebar-header">
        <a href="../components.html" id="mainMenuOpen"><i data-feather="menu"></i></a>
        <h5>Components</h5>
        <a href="../components.html" id="sidebarMenuClose"><i data-feather="x"></i></a>
      </div>
      <div class="sidebar-body">
        <ul class="sidebar-nav">
          <li class="nav-label mg-b-15">Browse Components</li>
          <li class="nav-item"><a href="index.html" class="nav-link active"><i data-feather="layout"></i> Dashboard</a></li>
          <li class="nav-item"><a href="grid.html" class="nav-link"><i data-feather="grid"></i> Sales</a></li>
          <li class="nav-item"><a href="grid.html" class="nav-link"><i data-feather="grid"></i> Investments</a></li>
         </ul>
      </div>
    </div>

            </div>
        )
    }
}

export default Sidebar