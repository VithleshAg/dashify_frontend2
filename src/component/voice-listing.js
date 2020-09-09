import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBContainer } from 'mdbreact';
import vl_img1 from './assets/vl_img1.png'
import vl_img2 from './assets/vl_img2.png'
import vl_img3 from './assets/vl_img3.png'
import vl_img4 from './assets/vl_img4.png'
import vl_img5 from './assets/vl_img5.png'
import vl_img6 from './assets/vl_img6.png'
import vl_img7 from './assets/vl_img7.png'
import vl_img8 from './assets/vl_img8.png'
import vl_img9 from './assets/vl_img9.png'
import vl_img10 from './assets/vl_img10.png'
import vl_img11 from './assets/vl_img11.png'

export default class Voice_listing extends Component {
    render() {
        return (
            <div>
                {/* <div className='left-side-menu'></div> */}
                    {/* <div className='content-page' > */}
                    <div>
                        <div className="container mt-5 ">
                            <div className='setting-10'>
                            <h3>Voice Listing</h3>
                            </div>
                            <MDBContainer className='voice_container'>
                        <MDBRow >
                        <MDBCol sm="12" md="5" lg="5">
                            <MDBRow>
                                <MDBCol sm="5" md='5' lg="5" >
                                <img src={vl_img1} alt='vl_img1' className='responsive' id='vl_img1'/>
                                </MDBCol>
                                <MDBCol  sm="7" md="7" lg="7">
                                <div id='vl_heading'>Dolce Vita Hair Salon</div>
                            <div className='vl_contant'>Satmasjid Road, Moham, Dhak</div>
                            <div className='vl_subhead' style={{marginTop:'10%'}}>ADDRESS AND CONTACT</div>
                            <div className='vl_contant'>Satmasjid Road, Moham, Dhaka 1207 Р 407-650-448</div>
                            <MDBBtn id='vl_btn_edit'>Edit</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCol>
                        <MDBCol xs="12" md="7" lg="7">
                            <div className='vl_subhead' id='buss_desc' >BUSINESS DESCRIPTION</div>
                            <div className='vl_contant'>
                            Business vocabulary and commonly used phrases are also detailed in the texts,
                             and all this information - including the texts themselves, the vocabulary, 
                            </div>
                            <MDBRow>
                            <img src={vl_img2} alt='vl_img2' className='vl_img'/>
                            <img src={vl_img3} alt='vl_img3' className='vl_img'/>
                            <img src={vl_img4} alt='vl_img4' className='vl_img'/>
                            <img src={vl_img5} alt='vl_img5' className='vl_img'/>
                            <img src={vl_img6} alt='vl_img6' className='vl_img'/>
                            </MDBRow>
                        </MDBCol>
                        </MDBRow>
                        </MDBContainer>
                        <MDBContainer className='voice_container'>
                            <MDBRow >
                                <MDBCol style={{marginLeft:'10px' }}>
                                    <MDBRow className='vl_container2_cards'> 
                                       <MDBCol md='4'>
                                       <img src={vl_img7} alt='vl_img' className='vl_c2_icon'/>
                                       </MDBCol>
                                       <MDBCol md='8'>
                                           <div className='vl_card_head'>Google Assistant</div>
                                           <MDBBtn id='vl_btn_optimize'>Optimize</MDBBtn>
                                       </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol>
                                    <MDBRow className='vl_container2_cards'> 
                                       <MDBCol className='col-md-4'>
                                       <img src={vl_img8} alt='vl_img' className='vl_c2_icon' />
                                       </MDBCol>
                                       <MDBCol className='col-md-8'>
                                           <div className='vl_card_head'>Amazon Alexa</div>
                                           <div className='vl_link'>Optimizacion in progress</div>
                                       </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol>
                                    <MDBRow className='vl_container2_cards'> 
                                       <MDBCol className='col-md-4'>
                                       <img src={vl_img9} alt='vl_img' className='vl_c2_icon' />
                                       </MDBCol>
                                       <MDBCol className='col-md-8'>
                                           <div className='vl_card_head'>Apple Siri</div>
                                           <div className='vl_link'>Optimizacion in progress</div>
                                       </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol>
                                    <MDBRow className='vl_container2_cards'> 
                                       <MDBCol className='col-md-3'>
                                       <img src={vl_img10} alt='vl_img' className='vl_c2_icon' />
                                       </MDBCol>
                                       <MDBCol className='col-md-9'>
                                           <div className='vl_card_head'>Microsoft Cortana</div>
                                           <div className='vl_link'>Optimizacion in progress</div>
                                       </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol>
                                    <MDBRow className='vl_container2_cards'> 
                                       <MDBCol className='col-md-4'>
                                       <img src={vl_img11} alt='vl_img' className='vl_c2_icon' />
                                       </MDBCol>
                                       <MDBCol className='col-md-8'>
                                           <div className='vl_card_head'>Samsung Bixby</div>
                                           <div className='vl_link'>Optimizacion in progress</div>
                                       </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            </MDBContainer>

                            <MDBContainer className='voice_container'>
                            <MDBRow >
                                <MDBCol className='col-md-7' >
                                <div id='vl_c3_head'>Voice FAQs</div>
                                <div id='vl_c3_contant'>Add FAQs that will help you to customize your location to appear in voice search </div>
                                </MDBCol>
                                <MDBCol className='col-md-5' >
                                    <MDBBtn id='vl_btn_FAQ'>+ Add FAQs</MDBBtn>
                                    <MDBBtn id='vl_btn_wedgets'>Install Wedgets</MDBBtn>
                                </MDBCol>
                                </MDBRow>
                                <hr className='voice_hr'/>
                                <MDBRow>
                                    
                                    <MDBCol className='col-sm-7 offset-sm-1'  >
                                        <div className='vl_c3_subhead'> Who is the best partner near me?</div>
                                        <div className='vl_contant'>
                                        Business vocabulary and commonly used phrases are also detailed in the texts, and all
                                         this information - including the texts themselves, the vocabulary,
                                        </div>
                                    </MDBCol>
                                    <MDBCol className=' col-md-2 offset-md-2' > 
                                        <MDBBtn className='vl_btn_c3_edit'>Edit</MDBBtn>
                                        </MDBCol>
                                </MDBRow>
                            
                            <hr className='voice_hr'/>

                            <MDBRow>
                                    
                                    <MDBCol className='col-sm-7 offset-sm-1'  >
                                        <div className='vl_c3_subhead'> Who is the best partner near me?</div>
                                        <div className='vl_contant'>
                                        Business vocabulary and commonly used phrases are also detailed in the texts, and all
                                         this information - including the texts themselves, the vocabulary,
                                        </div>
                                    </MDBCol>
                                    <MDBCol className='col-md-2 offset-md-2' > 
                                        <MDBBtn className='vl_btn_c3_edit'>Edit</MDBBtn>
                                        </MDBCol>
                                </MDBRow>
                            
                            <hr className='voice_hr'/>

                            <MDBRow>
                                    
                                    <MDBCol className='col-sm-7 offset-sm-1'  >
                                        <div className='vl_c3_subhead'> Who is the best partner near me?</div>
                                        <div className='vl_contant'>
                                        Business vocabulary and commonly used phrases are also detailed in the texts, and all
                                         this information - including the texts themselves, the vocabulary,
                                        </div>
                                    </MDBCol>
                                    <MDBCol className='col-md-2 offset-md-2' > 
                                        <MDBBtn className='vl_btn_c3_edit'>Edit</MDBBtn>
                                        </MDBCol>
                                </MDBRow>
                            
                            <hr className='voice_hr'/>

                            <MDBRow>
                                    
                                    <MDBCol className='col-sm-7 offset-sm-1'  >
                                        <div className='vl_c3_subhead'> Who is the best partner near me?</div>
                                        <div className='vl_contant'>
                                        Business vocabulary and commonly used phrases are also detailed in the texts, and all
                                         this information - including the texts themselves, the vocabulary,
                                        </div>
                                    </MDBCol>
                                    <MDBCol className='col-md-2 offset-md-2' > 
                                        <MDBBtn className='vl_btn_c3_edit'>Edit</MDBBtn>
                                        </MDBCol>
                                </MDBRow>
                        
                            </MDBContainer>
                    </div>
                </div>

            </div>
        )
    }
}
