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
            salary_date:'',
            errors :{
                first_name:'',
                last_name:'',
                mobile_no:'',
                salary:'',
                salary_date:''
            }
        }
    }


    handleSubmit=async event=>{
        event.preventDefault();
    }

    handleChange=event=>{

        const validNameRegex=RegExp(/^[a-zA-Z ]{0,20}$/);
        const validMobileRegex=RegExp(/^\d{10}$/);
        const {value,name}=event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'first_name': 
                    errors.first_name = 
                        (value.length < 3)
                        ? 'First Name must be atleast 3 characters long!'
                        : '';
                    errors.first_name = 
                        (!validNameRegex.test(value))
                        ? 'First Name can only contain alphabets!'
                        : errors.first_name;
                    break;
            case 'last_name':
                    errors.last_name = 
                        (value.length < 3)
                        ? 'Last Name must be atleast 3 characters long!'
                        : ''; 
                    errors.last_name = 
                        (!validNameRegex.test(value))
                        ? 'Last Name can only contain Alphabets!'
                        : errors.last_name;
                    break;
            case 'mobile_no':
                    errors.mobile_no = 
                        (validMobileRegex.test(value))
                        ? ''
                        : 'Mobile number should be a 10 digit number';
                    break;
            case 'salary':
                    errors.salary = 
                    (value <= 100)
                    ? 'Salary must be greater than 1000!'
                    : ''; 
                    break;
            case 'salary_date':
                    errors.salary_date = 
                    (value < 0 || value >10)
                    ? 'SalaryDate must be between 1 and 10'
                    : ''; 
                    break;
            default:
            break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }


    render()
    {
        const {errors} = this.state;
        return(
            <div className='signup'>
                <h2 style={{fontSize:'20px' , padding:'0px' ,margin:'0px' }}>Get Started</h2>
                <h3 style={{fontSize:'15px' , padding:'0px' ,margin:'0px' , fontWeight:200}}>Please fill in the details</h3>
                <form onSubmit={this.handleSubmit} className='signupform'>
                    <div className='form_input_block'>
                        <div className='input_label'>First Name</div>
                        <input className='input_box' type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name' required></input>
                        {errors.first_name.length > 0 && <span className='error'>{errors.first_name}</span>}
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Last Name</div>
                        <input className='input_box' type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name'  required></input>
                        {errors.last_name.length > 0 && <span className='error'>{errors.last_name}</span>}
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Mobile Number</div>
                        <input className='input_box' type='number' value={this.state.mobile_no} onChange={this.handleChange} name='mobile_no' required></input>
                        <div style={{fontSize:'10px' , padding:'0px' ,margin:'0px', color:'grey' }}>Note: An OTP will be sent to your number for verification</div>
                        {errors.mobile_no.length > 0 && <span className='error'>{errors.mobile_no}</span>}
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Basic Salary Per Month (in Rupees)</div>
                        <input className='input_box' type='number' value={this.state.salary} onChange={this.handleChange} name='salary' required></input>
                        {errors.salary.length > 0 && <span className='error'>{errors.salary}</span>}
                    </div>
                    <div className='form_input_block'>
                        <div className='input_label'>Salary Date</div>
                        <input className='input_box' type='number' value={this.state.salary_date} onChange={this.handleChange} name='salary_date' required></input>
                        {errors.salary_date.length > 0 && <span className='error'>{errors.salary_date}</span>}
                    </div>
                    <button type='submit' className='submit_button'>Register Now</button>
                </form>
                <h6 style={{width:'100%', textAlign:'center'}}>By registering you agree to hassly's Terms Of Service and Privacy Policy</h6>
            </div>
        )
    }
}

export default SignUp;