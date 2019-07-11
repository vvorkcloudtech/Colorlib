import React, { Component } from "react";

class header extends Component {
    render() {
  let header = this.props.data[0].header[0].map((v,i)=>{
      return(
          <div key={i}>
              <div className="d-flex justify-content-center align-items-center image flex-column" style={{backgroundImage:`linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,.0)),url(${v.header_main_img})`}}>
              <h2>{v.header_title}</h2>
              <div>
                  <span className="text-warning" style={{fontWeight:"700"}}>{v.header_sub_title_1}</span>
                  <span className="ml-3">{v.header_sub_title_2}</span>
              </div>
              </div>
          </div>
      )
  })

    return(
      <div>
          {header}
      </div>
    )
  }
}
export default header;
