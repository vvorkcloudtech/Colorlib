import React, { Component } from "react";

class Footer extends Component {
  render() {
    let footer = this.props.data[0].footer.map((v,i)=>{
      return(
        <div key={i}>
          <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-3">
              <h5 className="pl-5">{v.about_sub_heading}</h5>
              <p className="pt-3 pl-5 text-secondary">{v.description}</p>
              <div className="text-warning ml-5 mt-3">
              <i className="fab fa-facebook-f" style={{fontSize:"23px"}}></i>
              <i class="fab fa-twitter" style={{marginLeft:"15px", fontSize:"23px"}}></i>
              <i class="fab fa-linkedin" style={{marginLeft:"15px",fontSize:"23px"}}></i>
              <i class="fab fa-youtube" style={{marginLeft:"15px",fontSize:"23px"}}></i>
              </div>
            </div>
            <div className="col-md-2">
              <h5 className="pl-5">{v.customer_sub_heading}</h5>
              <div className="mt-3 ml-5 d-flex flex-column">
                <a className="text-secondary py-1" href="#">{v.customer_links[0]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[1]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[2]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[3]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[4]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[5]}</a>
                <a className="text-secondary py-1" href="#">{v.customer_links[6]}</a>
            </div>
            </div>
            <div className="col-md-2">
            <h5 className="pl-5">{v.customer_info_heading}</h5>
              <div className="mt-3 ml-5 d-flex flex-column">
                <a className="text-secondary py-1" href="#">{v.info_links[0]}</a>
                <a className="text-secondary py-1" href="#">{v.info_links[1]}</a>
                <a className="text-secondary py-1" href="#">{v.info_links[2]}</a>
                <a className="text-secondary py-1" href="#">{v.info_links[3]}</a>
                <a className="text-secondary py-1" href="#">{v.info_links[4]}</a>
            </div>
            </div>
            <div className="col-md-2">
            <h5 className="pl-5">{v.customer_news_heading}</h5>
              <div className="mt-3 ml-5 d-flex flex-column">
                <a className="text-secondary py-1" href="#">{v.news_links[0]}</a>
                <a className="text-secondary py-1" href="#">{v.news_links[1]}</a>
                <a className="text-secondary py-1" href="#">{v.news_links[2]}</a>
            </div>
            </div>
            <div className="col-md-3">
            <h5 className="pl-5">{v.customer_contact_heading}</h5>
              <div className="mt-3 ml-5 d-flex flex-column">
                <a className="text-secondary py-1" href="#">{v.contact_links[0]}</a>
                <a className="text-secondary py-1" href="#">{v.contact_links[1]}</a>
                <a className="text-secondary py-1" href="#">{v.contact_links[2]}</a>
                <a className="text-secondary py-1" href="#">{v.contact_links[3]}</a>
            </div>

          </div>
      </div>
      <p className="text-secondary pt-5 text-center">{v.copy_right}</p>
      </div>
        </div>
      )
    })

    return(
      <div>
        {footer}
      </div>
    )
  }
}
export default Footer;
