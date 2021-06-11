import React, { Component } from 'react';
import "../testimonial.scss";
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col } from 'react-bootstrap';


class Testimonial extends Component {

  componentDidMount() {
    this.props.sharedBasicInfo[0]['image'] = '../hello_vedant.jpg'
    console.log(this.props.sharedBasicInfo[0]['image'])

  }

  render() {
    //Owl Carousel Settings
    const options = {
      responsiveClass: true,
      nav: false,
      margin: 1,
      autoplay: true,
      loop: true,
      //navText: ["Prev", "Next"],
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 1,
        }
      },
    };
    return (
      <section id="testimonial">


        <div class="container">
          <div class="row justify-center">
            <div class="col-md-12">
              <h1 className="section-title">
                <span className="text-black">Testimonials</span>
              </h1>
            </div>
            <div className="col-md-12 text-center">
              <OwlCarousel className="owl-theme" {...options}>
                {this.props.sharedBasicInfo.map((data, ind) => {
                  return (
                    <div class="pn_testimonial_box mt-4">
                      <p class="text-justify">{data.testimonial}</p>

                      <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src={data.image} class="border-radius-12 float-right" alt="client image" /> <span> {data.name} </span> </div>
                        {/* <p class="text-justify">{data.testimonial}</p>
                          <div class="row pt-3">
                            <div class="col-md-6 pn_review_profile"><img src={data.image} class="border-radius-12 float-right" alt="client image" /> <span> {Col.name} </span> </div>
                           </div> */}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>
            </div>

          </div>
        </div>

        {/* <div className="col-md-12">
              <div className="col-md-12">
                <h1 className="section-title">
                  <span className="text-black">Hello</span>
                </h1>
              </div>
              <div className="col-md-6 center margin-auto">
              <OwlCarousel className="owl-theme" {...options}>
                    {this.props.sharedBasicInfo.map((col, ind) => {
                      return (
                        <div className="item">
                          <div className="shadow-effect">
                            <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                            <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                          </div>
                          <div class="testimonial-name">EMILIANO AQUILANI</div>
                        </div>
                      )
                    })}
                  </OwlCarousel>
              </div>
            </div> */}


        {/* <div className="col-md-9">
              <div className="col-md-10 center">
                <div className="col-md-10">
                  <h1>Reactjs OwlCarousel Working</h1>
                  <OwlCarousel className="owl-theme" {...options}>
                    {this.props.sharedBasicInfo.map((col, ind) => {
                      return (<div className="col-md-6">
                        {col.image}

                      </div>)
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div> */}
      </section>
    );
  }
}

export default Testimonial;