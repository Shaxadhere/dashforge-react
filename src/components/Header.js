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
                    <ul class="nav navbar-menu">
                      <li class="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>
                      <li class="nav-item with-sub">
                        <a href="../components.html" class="nav-link"><i data-feather="pie-chart"></i> Dashboard</a>
                        <ul class="navbar-menu-sub">
                          <li class="nav-sub-item"><a href="../template/classic/dashboard-one.html" class="nav-sub-link"><i data-feather="bar-chart-2"></i>Sales Monitoring</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/dashboard-two.html" class="nav-sub-link"><i data-feather="bar-chart-2"></i>Website Analytics</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/dashboard-three.html" class="nav-sub-link"><i data-feather="bar-chart-2"></i>Cryptocurrency</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/dashboard-four.html" class="nav-sub-link"><i data-feather="bar-chart-2"></i>Helpdesk Management</a></li>
                        </ul>
                      </li>
                      <li class="nav-item with-sub">
                        <a href="../components.html" class="nav-link"><i data-feather="package"></i> Apps</a>
                        <ul class="navbar-menu-sub">
                          <li class="nav-sub-item"><a href="../template/classic/app-calendar.html" class="nav-sub-link"><i data-feather="calendar"></i>Calendar</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/app-chat.html" class="nav-sub-link"><i data-feather="message-square"></i>Chat</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/app-contacts.html" class="nav-sub-link"><i data-feather="users"></i>Contacts</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/app-file-manager.html" class="nav-sub-link"><i data-feather="file-text"></i>File Manager</a></li>
                          <li class="nav-sub-item"><a href="../template/classic/app-mail.html" class="nav-sub-link"><i data-feather="mail"></i>Mail</a></li>
                        </ul>
                      </li>
                      <li class="nav-item with-sub">
                        <a href="../components.html" class="nav-link"><i data-feather="layers"></i> Pages</a>
                        <div class="navbar-menu-sub">
                          <div class="d-lg-flex">
                            <ul>
                              <li class="nav-label">Authentication</li>
                              <li class="nav-sub-item"><a href="../template/classic/page-signin.html" class="nav-sub-link"><i data-feather="log-in"></i> Sign In</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-signup.html" class="nav-sub-link"><i data-feather="user-plus"></i> Sign Up</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-verify.html" class="nav-sub-link"><i data-feather="user-check"></i> Verify Account</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-forgot.html" class="nav-sub-link"><i data-feather="shield-off"></i> Forgot Password</a></li>
                              <li class="nav-label mg-t-20">User Pages</li>
                              <li class="nav-sub-item"><a href="../template/classic/page-profile-view.html" class="nav-sub-link"><i data-feather="user"></i> View Profile</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-connections.html" class="nav-sub-link"><i data-feather="users"></i> Connections</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-groups.html" class="nav-sub-link"><i data-feather="users"></i> Groups</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-events.html" class="nav-sub-link"><i data-feather="calendar"></i> Events</a></li>
                            </ul>
                            <ul>
                              <li class="nav-label">Error Pages</li>
                              <li class="nav-sub-item"><a href="../template/classic/page-404.html" class="nav-sub-link"><i data-feather="file"></i> 404 Page Not Found</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-500.html" class="nav-sub-link"><i data-feather="file"></i> 500 Internal Server</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-503.html" class="nav-sub-link"><i data-feather="file"></i> 503 Service Unavailable</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-505.html" class="nav-sub-link"><i data-feather="file"></i> 505 Forbidden</a></li>
                              <li class="nav-label mg-t-20">Other Pages</li>
                              <li class="nav-sub-item"><a href="../template/classic/page-timeline.html" class="nav-sub-link"><i data-feather="file-text"></i> Timeline</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-pricing.html" class="nav-sub-link"><i data-feather="file-text"></i> Pricing</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-help-center.html" class="nav-sub-link"><i data-feather="file-text"></i> Help Center</a></li>
                              <li class="nav-sub-item"><a href="../template/classic/page-invoice.html" class="nav-sub-link"><i data-feather="file-text"></i> Invoice</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item active"><a href="index.html" class="nav-link"><i data-feather="box"></i> Components</a></li>
                      <li class="nav-item"><a href="../collections.html" class="nav-link"><i data-feather="archive"></i> Collections</a></li>
                    </ul>
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