import React, {Component} from 'react'

class Home extends React.Component{
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
        <a href="http://dribbble.com/themepixels" class="btn btn-social"><i class="fab fa-dribbble"></i></a>
        <a href="https://github.com/themepixels" class="btn btn-social"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/themepixels" class="btn btn-social"><i class="fab fa-twitter"></i></a>
        <a href="https://themeforest.net/item/dashforge-responsive-admin-dashboard-template/23725961" class="btn btn-buy"><i data-feather="shopping-bag"></i> <span>Buy Now</span></a>
      </div>
    </header>

    <div id="sidebarMenu" class="sidebar sidebar-fixed sidebar-components">
      <div class="sidebar-header">
        <a href="../components.html" id="mainMenuOpen"><i data-feather="menu"></i></a>
        <h5>Components</h5>
        <a href="../components.html" id="sidebarMenuClose"><i data-feather="x"></i></a>
      </div>
      <div class="sidebar-body">
        <ul class="sidebar-nav">
          <li class="nav-label mg-b-15">Browse Components</li>
          <li class="nav-item"><a href="index.html" class="nav-link active"><i data-feather="layout"></i> Introduction</a></li>
          <li class="nav-item"><a href="grid.html" class="nav-link"><i data-feather="grid"></i> Grid System</a></li>
          <li class="nav-item show">
            <a href="../components.html" class="nav-link with-sub"><i data-feather="layers"></i> UI Elements</a>
            <nav class="nav">
              <a href="el-accordion.html">Accordion</a>
              <a href="el-alerts.html">Alerts</a>
              <a href="el-avatar.html">Avatar</a>
              <a href="el-badge.html">Badge</a>
              <a href="el-breadcrumbs.html">Breadcrumbs</a>
              <a href="el-buttons.html">Buttons</a>
              <a href="el-button-groups.html">Button Groups</a>
              <a href="el-cards.html">Cards</a>
              <a href="el-carousel.html">Carousel</a>
              <a href="el-collapse.html">Collapse</a>
              <a href="el-dropdown.html">Dropdown</a>
              <a href="el-icons.html">Icons</a>
              <a href="el-images.html">Images</a>
              <a href="el-list-group.html">List Group</a>
              <a href="el-marker.html">Marker</a>
              <a href="el-media-object.html">Media Object</a>
              <a href="el-modal.html">Modal</a>
              <a href="el-navs.html">Navs</a>
              <a href="el-navbar.html">Navbar</a>
              <a href="el-off-canvas.html">Off-Canvas</a>
              <a href="el-pagination.html">Pagination</a>
              <a href="el-placeholder.html">Placeholder</a>
              <a href="el-popovers.html">Popovers</a>
							<a href="el-progress.html">Progress</a>
              <a href="el-steps.html">Steps</a>
              <a href="el-scrollbar.html">Scrollbar</a>
              <a href="el-scrollspy.html">Scrollspy</a>
              <a href="el-spinners.html">Spinners</a>
              <a href="el-tab.html">Tab</a>
              <a href="el-toast.html">Toast </a>
              <a href="el-tooltips.html">Tooltips</a>
              <a href="el-table-basic.html">Table Basic</a>
              <a href="el-table-advanced.html">Table Advanced</a>
            </nav>
          </li>
          <li class="nav-item show">
            <a href="../components.html" class="nav-link with-sub"><i data-feather="package"></i> Utilities</a>
            <nav class="nav">
              <a href="util-animation.html">Animation</a>
              <a href="util-background.html">Background</a>
              <a href="util-border.html">Border</a>
              <a href="util-display.html">Display</a>
              <a href="util-divider.html">Divider</a>
              <a href="util-flex.html">Flex</a>
              <a href="util-height.html">Height</a>
              <a href="util-margin.html">Margin</a>
              <a href="util-padding.html">Padding</a>
              <a href="util-position.html">Position</a>
              <a href="util-typography.html">Typography</a>
              <a href="util-width.html">Width</a>
              <a href="util-extras.html">Extras</a>
            </nav>
          </li>
          <li class="nav-item show">
            <a href="../components.html" class="nav-link with-sub"><i data-feather="inbox"></i> Forms</a>
            <nav class="nav">
              <a href="form-elements.html">Form Elements</a>
              <a href="form-input-group.html">Input Group</a>
              <a href="form-input-tags.html">Input Tags</a>
              <a href="form-input-masks.html">Input Masks</a>
              <a href="form-layouts.html">Form Layouts</a>
              <a href="form-validation.html">Form Validation</a>
              <a href="form-wizard.html">Form Wizard</a>
              <a href="form-text-editor.html">Text Editor</a>
              <a href="form-rangeslider.html">Range Slider</a>
              <a href="form-datepicker.html">Date Pickers</a>
              <a href="form-select2.html">Select2</a>
              <a href="form-search.html">Search</a>
            </nav>
          </li>
          <li class="nav-item show">
            <a href="../components.html" class="nav-link with-sub"><i data-feather="pie-chart"></i> Charts</a>
            <nav class="nav">
              <a href="chart-flot.html">Flot</a>
              <a href="chart-chartjs.html">ChartJS</a>
              <a href="chart-peity.html">Peity</a>
              <a href="chart-sparkline.html">Sparkline</a>
              <a href="chart-morris.html">Morris</a>
            </nav>
          </li>
          <li class="nav-item show">
            <a href="../components.html" class="nav-link with-sub"><i data-feather="map-pin"></i> Maps</a>
            <nav class="nav">
              <a href="map-google.html">Google Maps</a>
              <a href="map-leaflet.html">Leaflet Maps</a>
              <a href="map-vector.html">Vector Maps</a>
            </nav>
          </li>
        </ul>
      </div>
    </div>

    <div class="content content-components">
      <div class="container">
        <ol class="breadcrumb df-breadcrumbs mg-b-10">
          <li class="breadcrumb-item"><a href="../components.html#">Components</a></li>
          <li class="breadcrumb-item active" aria-current="page">Introduction</li>
        </ol>

        <h1 class="df-title">Introduction</h1>
        <p class="df-lead">Get started with over a dozen reusable components built on top of Bootstrap with styles enhancement and additional components and options.</p>

        <div class="row tx-14">
          <div class="col-sm-6">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="grid" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">Grid System</h5>
              <p class="mg-b-20">Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</p>
              <a href="grid.html" class="tx-medium">View Grid System <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
          <div class="col-sm-6 mg-t-20 mg-sm-t-0">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="layers" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">UI Elements</h5>
              <p class="mg-b-20">UI Elements are those elements that can be found in any page with a single function and that can exist alone.</p>
              <a href="el-accordion.html" class="tx-medium">View Elements <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
          <div class="col-sm-6 mg-t-20 mg-sm-t-25">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="edit-3" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">Forms</h5>
              <p class="mg-b-20">Examples and usage guidelines for form control styles, layout options, and custom components...</p>
              <a href="form-elements.html" class="tx-medium">View Forms <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
          <div class="col-sm-6 mg-t-20 mg-sm-t-25">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="package" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">Utilities</h5>
              <p class="mg-b-20">For faster mobile-friendly and responsive development, template includes dozens of utility...</p>
              <a href="util-animation.html" class="tx-medium">View Utilities <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
          <div class="col-sm-6 mg-t-20 mg-sm-t-25">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="pie-chart" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">Charts</h5>
              <p class="mg-b-20">A graphical representation of data, in which the data is represented by symbols, such as bar chart.</p>
              <a href="chart-flot.html" class="tx-medium">View Charts <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
          <div class="col-sm-6 mg-t-20 mg-sm-t-25">
            <div class="bg-white bd pd-20 pd-lg-30 ht-sm-300 d-flex flex-column justify-content-end">
              <div class="mg-b-25"><i data-feather="map-pin" class="wd-50 ht-50 tx-gray-500"></i></div>
              <h5 class="tx-inverse mg-b-20">Maps</h5>
              <p class="mg-b-20">Navigate the world faster and easier using these popular map plugins to use in your projects.</p>
              <a href="map-google.html" class="tx-medium">View Maps <i class="icon ion-md-arrow-forward mg-l-5"></i></a>
            </div>
          </div>
        </div>

        <footer class="content-footer">
          <div>
            <span>&copy; 2019 DashForge v1.0.0. </span>
            <span>Made by <a href="http://themepixels.me">ThemePixels</a></span>
          </div>
          <div>
            <nav class="nav">
              <a href="https://themeforest.net/licenses/standard" class="nav-link">Licenses</a>
              <a href="http://themepixels.me/demo/dashforge1.1/change-log.html" class="nav-link">Change Log</a>
              <a href="https://discordapp.com/invite/RYqkVuw" class="nav-link">Get Help</a>
            </nav>
          </div>
        </footer>

      </div>
    </div>
            </div>
        )
    }
}


export default Home