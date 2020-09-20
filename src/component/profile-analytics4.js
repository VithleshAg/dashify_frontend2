import React, { Component } from 'react'
import { MDBRow, MDBCol,  MDBContainer  ,MDBBtn} from 'mdbreact';

export default class Profile_setting extends Component {
    render() {
        return (
            <div>
                            
                <MDBContainer>
                <div className='setting-10'>
                            <h3>Profile Setting</h3>
                            </div>
                <MDBRow>
                  <MDBCol md="3">
                      <MDBRow>
                      <MDBCol className='profile_container'>
                        <div className='profile1'>Account</div>
                        <div className='profile1'>Notification Setting</div>
                        <div className='profile1'>People</div>
                        <div className='profile1'>Biling</div>
                        <div className='profile1'>Integrations</div>
                        <div className='profile1'>Agency Setting</div>
                    </MDBCol>
                      </MDBRow>

                      <MDBRow>
                      <MDBCol className='profile_container' style={{textAlign:'center'}}>
                        <div></div>
                        <div className='profile1'>People</div>
                        <div className='profile2'>Learn more about managing users</div>
                        <div><MDBBtn id='profile_here_btn'>Here</MDBBtn></div>
                    </MDBCol>
                      </MDBRow>
                  </MDBCol>

                  <MDBCol md="8" className='offset-md-1' className='profile_container'>
                      <div className='profile1'> Update your card</div>
                      <MDBRow>
                        <MDBCol md="6" className='profileSpacing'>
                        <span className='profile3'>Card Number</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="6 " className='profileSpacing'>
                        <span className='profile3'>Expiry date</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="6" className='profileSpacing'>
                        <span className='profile3'>Name of card</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="6" className='profileSpacing'>
                        <span className='profile3'>Security code</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>
                      </MDBRow>
                      <div className='profile1'>Billing Address</div>
                      <MDBRow>
                      <MDBCol md="12" className='profileSpacing'>
                        <span className='profile3'>Address</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="12" className='profileSpacing'> 
                        <span className='profile3'>Country</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="12" className='profileSpacing'>
                        <span className='profile3'>City</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        <MDBCol md="12" className='profileSpacing'>
                        <span className='profile3'>ZipCode</span>
                        <input className='profile4' placeholder=""/>
                        </MDBCol>

                        
                      </MDBRow>
                      <MDBBtn id='profile_update_card'>Update Card</MDBBtn>
                  </MDBCol> 
                </MDBRow>
                </MDBContainer>
                
            </div>
        )
    }
}
