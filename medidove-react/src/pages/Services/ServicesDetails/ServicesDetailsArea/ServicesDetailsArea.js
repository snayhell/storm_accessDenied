import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ServicesDetailsArea = () => {
   const data = [
      {
         name: 'Page A',
         uv: 4000,
         pv: 2400,
         amt: 2400,
      },
      {
         name: 'Page B',
         uv: 3000,
         pv: 1398,
         amt: 2210,
      },
      {
         name: 'Page C',
         uv: 2000,
         pv: 9800,
         amt: 2290,
      },
      {
         name: 'Page D',
         uv: 2780,
         pv: 3908,
         amt: 2000,
      },
      {
         name: 'Page E',
         uv: 1890,
         pv: 4800,
         amt: 2181,
      },
      {
         name: 'Page F',
         uv: 2390,
         pv: 3800,
         amt: 2500,
      },
      {
         name: 'Page G',
         uv: 3490,
         pv: 4300,
         amt: 2100,
      },
   ];
   return (
      <>
         <div className="service-details-area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-details-thumb1.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">Dental Care</h5>
                              <h1>We are here to help when you need us.</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>Maternal and child care is a fundamental aspect of public health, focusing on the well-being of mothers and their offspring. During pregnancy, maternal care ensures the health and safety of both mother and baby through regular check-ups, nutritional support, and monitoring for potential complications. Skilled healthcare professionals play a pivotal role in guiding mothers through childbirth, ensuring a safe and positive experience.</p>
                           <p>Child care, beginning at birth, encompasses a continuum of services aimed at promoting the healthy development of children. This includes vaccinations, routine health check-ups, and nutritional interventions crucial for growth and well-being. Early childhood is a critical phase, and effective maternal and child care not only safeguards the health of individuals but also lays the foundation for resilient and thriving communities. The integration of maternal and child care services is essential for fostering a holistic approach to healthcare, ensuring the best possible start in life for both mothers and their children.</p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-1.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Personal care</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Cillum dolore eu fugiat nulla.</li>
                                    <li><i className="fas fa-check"></i>Lorem ipsum dolor sit amet.</li>
                                    <li><i className="fas fa-check"></i>Consectetur adipisicing elit,</li>
                                    <li><i className="fas fa-check"></i>Sed do eiusmod tempor inci.</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="ser-fea-box f-left me-0">
                              <div className="ser-fea-icon f-left">
                                 <img src="img/services/ser-fea-icon-2.png" alt="" />
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>Lifestyle support</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Didunt ut labore et dolore magna.</li>
                                    <li><i className="fas fa-check"></i>Aliqua. Ut enim ad minim veniam.</li>
                                    <li><i className="fas fa-check"></i>Quis nostrud exercitation ullamco.</li>
                                    <li><i className="fas fa-check"></i>Laboris nisi ut aliquip ex ea.</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="service-chart mb-55">
                           {/* <img src="img/services/service-chart.jpg" alt=""/> */}
                           <ResponsiveContainer width="100%" height={300}>
                              <AreaChart
                                 width={500}
                                 height={400}
                                 data={data}
                                 margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                 }}
                              >
                                 <CartesianGrid strokeDasharray="3 3" />
                                 <XAxis dataKey="name" />
                                 <YAxis />
                                 <Tooltip />
                                 <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                 <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                 <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                              </AreaChart>
                           </ResponsiveContainer>
                        </div>
                        <div className="service-doctors mb-55">
                           <img src="img/services/service-doctors.png" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-50">
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case">download</h5>
                              <h1>Free Download Resources</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="download-area">
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/pdf.png" alt="" />
                                 <span>The Balanced Care Method Flyer.pdf</span>
                                 <span className="download-size">57KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/doc.png" alt="" />
                                 <span>Infomation sheet 2 2016-17.doc</span>
                                 <span className="download-size">87KB</span>
                              </div>
                           </a>
                           <a className="download-box mb-20" href="#">
                              <div className="single-download-inner">
                                 <img src="img/icon/zip.png" alt="" />
                                 <span>What_is_home_care_manual.zip</span>
                                 <span className="download-size">112KB</span>
                              </div>
                           </a>
                        </div>
                        <div className="testi-box text-center pos-rel mb-0">
                           <div className="testi-content testi-service-content pos-rel">
                              <div className="testi-quato-icon">
                                 <img src="img/testimonials/testi-quato-icon.png" alt="" />
                              </div>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                 perspiciatis unde omnis iste natus error sit voluptatem.</p>
                              <span></span>
                           </div>
                           <div className="testi-author">
                              <h2 className="testi-author-title">Rosalina D. Williamson</h2>
                              <span className="testi-author-desination">founder, uithemes</span>
                           </div>
                           <div className="test-author-icon mb-10">
                              <img src="img/testimonials/testi-author-icon.png" alt="" />
                           </div>
                        </div>
                     </article>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">More Services</h3>
                        </div>
                        <div className="more-service-list">
                           <ul>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-1.png" alt="" /></div>
                                    <div className="more-service-title">Doctor's Appointment</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-2.png" alt="" /></div>
                                    <div className="more-service-title">Prenatal Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-3.png" alt="" /></div>
                                    <div className="more-service-title">Postpartum Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-4.png" alt="" /></div>
                                    <div className="more-service-title">Child Healthcare</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                    <div className="more-service-title">Vaccination Tracking</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-6.png" alt="" /></div>
                                    <div className="more-service-title">Home Remedies for minor Ailments </div>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">

                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }}
                              tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>
                     <div className="service-widget mb-50 border-0 p-0">
                        <div className="banner-widget">
                           <Link to="/contact">
                              <img src="img/services/services-banner.png" alt="" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicesDetailsArea;