import React, { Component } from "react";

class Gallery extends Component {
    render() {
        let images = this.props.data[0].gallery[0].pictures.map((v,i)=>{
            return (
                <div className="col-md-4 mt-5">
                <div className="card text-center border-0">
                    <img src={v.img} className="card-img-top gallery-imgs" alt="..." />
                    <div className="card-body">
                        <p className="card-text">FLORAL DRESS</p>
                        <p className="card-text text-warning">$300.00</p>
                    </div>
                </div>
            </div>
            )
        })    
    let res = this.props.data[0].aside.map((v,i) =>{
        console.log(this.props.data[0].gallery[0].pictures[0].img)
        return(
            <div key={i}>
                 <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="categories ml-5">
                            <div className="border">
                                <h5 className="text-center mt-3">{v.categories[0].categories_name}</h5>
                                <div className="accordion" id="accordionExample">
                                    <div className="card border-0">
                                        <div className="card-header customHeader" style={{ backgroundColor: "white" }} id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link text-decoration-none text-dark" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    {v.categories[0].category_men}
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <li>{v.categories[0].categories_type[0].type}</li>
                                                <li>{v.categories[0].categories_type[1].type}</li>
                                                <li>{v.categories[0].categories_type[2].type}</li>
                                                <li>{v.categories[0].categories_type[3].type}</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0">
                                        <div className="card-header customHeader" style={{ backgroundColor: "white" }} id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn btn-link text-decoration-none text-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    {v.categories[0].category_women}
        </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <li>{v.categories[0].categories_type2[0].type}</li>
                                                <li>{v.categories[0].categories_type2[1].type}</li>
                                                <li>{v.categories[0].categories_type2[2].type}</li>
                                                <li>{v.categories[0].categories_type2[3].type}</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0">
                                        <div className="card-header customHeader" style={{ backgroundColor: "white" }} id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link text-decoration-none text-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    {v.categories[0].category_jewelry}
        </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <li>{v.categories[0].categories_type3[0].type}</li>
                                                <li>{v.categories[0].categories_type3[1].type}</li>
                                                <li>{v.categories[0].categories_type3[2].type}</li>
                                                <li>{v.categories[0].categories_type3[3].type}</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card border-0">
                                        <div className="card-header customHeader" style={{ backgroundColor: "white" }} id="headingFour">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link text-decoration-none text-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                {v.categories[0].category_jewelry}
        </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                            <li>{v.categories[0].categories_type3[0].type}</li>
                                            <li>{v.categories[0].categories_type3[1].type}</li>
                                            <li>{v.categories[0].categories_type3[2].type}</li>
                                            <li>{v.categories[0].categories_type3[3].type}</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="price_range border mt-3">
                                <h5 className="text-center mt-3">{v.price.price_range[0].price_name}</h5>
                                <p className="pl-4">{v.price.price_range[0].start_heading}</p>
                                <select className="form-control form1">
                                    <option selected >{v.price.price_range[0].start_number[0]}</option>
                                    <option>{v.price.price_range[0].start_number[1]}</option>
                                    <option>{v.price.price_range[0].start_number[2]}</option>
                                    <option>{v.price.price_range[0].start_number[3]}</option>
                                    <option>{v.price.price_range[0].start_number[4]}</option>
                                </select>
                                <p className="pl-4">Price To:</p>
                                <select className="form-control form1 mb-4">
                                    <option selected >{v.price.price_range[0].end_number[0]}</option>
                                    <option>{v.price.price_range[0].end_number[1]}</option>
                                    <option>{v.price.price_range[0].end_number[2]}</option>
                                    <option>{v.price.price_range[0].end_number[3]}</option>
                                    <option>{v.price.price_range[0].end_number[4]}</option>
                                </select>
                            </div>
                            <div className="border mt-3">
                                <h5 className="ml-4 mt-3">{v.colors.title}</h5>
                                <div className="Colors mt-4 ml-3 mb-5 d-flex">
                                    <div className="clr" style={{backgroundColor:v.colors.colors_shades[0]}}></div>
                                    <div className="clr" style={{backgroundColor:v.colors.colors_shades[1]}}></div>
                                    <div className="clr" style={{backgroundColor:v.colors.colors_shades[2]}}></div>
                                    <div className="clr" style={{backgroundColor:v.colors.colors_shades[3]}}></div>
                                    <div className="clr" style={{backgroundColor:v.colors.colors_shades[4]}}></div>
                                </div>
                            </div>

                            <div className="mt-3 border">
                                <h5 className="ml-4 mb-4 mt-3">{v.size.title}</h5>
                                <div className="d-flex ml-3">
                                    <div className="box border text-center">{v.size.sizes[0]}</div>
                                    <div className="box border text-center">{v.size.sizes[1]}</div>
                                    <div className="box border text-center">{v.size.sizes[2]}</div>
                                </div>
                                <div className="d-flex ml-3 mb-5">
                                    <div className="box border text-center">{v.size.sizes[3]}</div>
                                    <div className="box border text-center">{v.size.sizes[4]}</div>
                                    <div className="box border text-center">{v.size.sizes[5]}</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-10">
                        <div className="row gallery pl-4">
                           {images}
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination ml-3" style={{fontSize:"16px", marginTop:"40px"}}>
                                <li className="page-item ml-2">
                                    <a className="page-link px-4 py-2 text-dark" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item ml-2"><a className="page-link px-4 py-2 text-dark bg-warning" href="#">1</a></li>
                                <li className="page-item ml-2"><a className="page-link px-4 py-2 text-dark" href="#">2</a></li>
                                <li className="page-item ml-2"><a className="page-link px-4 py-2 text-dark" href="#">3</a></li>
                                <li className="page-item ml-2"><a className="page-link px-4 py-2 text-dark" href="#">4</a></li>
                                <li className="page-item ml-2">
                                    <a className="page-link px-4 py-2 text-dark" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
            </div>
        )
    })
        return(
           <div>
               {res}
           </div>
        )
    }
}

export default Gallery;