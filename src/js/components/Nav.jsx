import React, { Component } from "react";

class Nav extends Component {
  render() {
    //   console.log(this.props.data[0].nav)
    let nav = this.props.data[0].nav.map((v,i)=>{
        return(
                <div key={i}>
        <nav className="navbar  navbar-expand-lg navbar-light">
  <a className="ml-5 pl-4 pt-4 navbar-brand" href="#" style={{fontSize:"25px"}}><strong>STORE</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav py-2 mb-3 ml-auto mr-3 pr-5 mt-4">
      <a className="mr-3 nav-item nav-link" href="#">{v.nav_link[0].link}<span className="sr-only">(current)</span></a>
      <a className="mr-3 nav-item nav-link text-warning active" href="#">{v.nav_link[1].link}</a>
      <a className="mr-3 nav-item nav-link" href="#">{v.nav_link[2].link}</a>
      <a className="mr-3 nav-item nav-link" href="#">{v.nav_link[3].link}</a>
      <a className="mr-3 nav-item nav-link" href="#">{v.nav_link[4].link}</a>
      <a className="mr-3 nav-item nav-link" href="#"><i className="fas fa-shopping-cart"></i>{v.nav_link[5].link}</a>
    </div>
  </div>
</nav>
      </div>
         )
    })
    return(
      <div>
          {nav}
      </div>
    )
  }
}
export default Nav;
