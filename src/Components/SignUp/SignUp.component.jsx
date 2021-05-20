import React from 'react';
import './SignUp.styles.scss'

class SignUp extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            mobile_no:'',
            salary:'',
            salary_date:''
        }
    }


    handleSubmit=async event=>{
        event.preventDefault();
        console.log(event);
    }

    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }


    render()
    {
        return(
            <div className='signup'>
                <h2 style={{fontSize:'20px' , padding:'0px' ,margin:'0px' }}>Get Started</h2>
                <h3 style={{fontSize:'15px' , padding:'0px' ,margin:'0px' , fontWeight:200}}>Please fill in the details</h3>
                <form onSubmit={this.handleSubmit} className='signupform'>
                    <div className='form_input_block'>
                        <div className='input_label'>First Name</div>
                        <input className='input_box' type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name' required></input>
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Last Name</div>
                        <input className='input_box' type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name' required></input>
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Mobile Number</div>
                        <input className='input_box' type='tel' value={this.state.mobile_no} onChange={this.handleChange} name='mobile_no' pattern="^\d{10}$" required></input>
                        <div style={{fontSize:'0.8vw' , padding:'0px' ,margin:'0px', color:'grey' }}>Note: An OTP will be sent to your number for verification</div>
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Basic Salary Per Month (in Rupees)</div>
                        <input className='input_box' type='number' value={this.state.salary} onChange={this.handleChange} name='salary' min='0'required></input>
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Salary Date</div>
                        <input className='input_box' type='number' min='1' max='10' value={this.state.salary_date} onChange={this.handleChange} name='salary_date' required></input>
                    </div>
                    <button type='submit' className='submit_button'>Register Now</button>
                </form>
                <h6 style={{width:'100%', textAlign:'center'}}>By registering you agree to hassly's Terms Of Service and Privacy Policy</h6>
            </div>
        )
    }
}

export default SignUp;