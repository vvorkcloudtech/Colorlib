import React, { Component } from "react";

class Newsletter extends Component {

    render() {
        let news = this.props.data[0].newsletter.map((v, i) => {
            return (
                <div key={i}>
                    <div className="container-fluid bg-warning background d-flex justify-content-center align-items-center">
                        <div className="d-flex mt-3">
                            <h3 className="mr-5 mt-2" style={{ marginLeft: "-50px" }}><i className="mr-3 far fa-paper-plane"></i>{v.newsletter_heading}</h3>
                            <div className="form-group">
                <input className="form-control email" type="email" name="" placeholder={v.email}/>
                <div class="input-group-append">
                <button className="btn btn-dark button" type="button" style={{borderTopRightRadius:"20px", borderBottomRightRadius:"20px", marginLeft:"248px", marginTop:"-48px"}}>{v.button}</button></div>
                </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {news}
            </div>
        )
    }
}
export default Newsletter;
