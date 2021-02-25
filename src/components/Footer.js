import React, {Component} from 'react'

class Footer extends React.Component{
    render(){
        return(
            <div>
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
        )
    }
}

export default Footer