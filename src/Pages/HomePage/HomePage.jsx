import React from 'react';
import SignUp from '../../Components/SignUp/SignUp.component';
import './HomePage.styles.scss';
import hassyl_image from '../../Assets/hassyl.jpeg';

class HomePage extends React.Component
{
    render()
    {
        return(
            <div className='homepage'>
                <div className='leftscreen'>
                    <div className='leftscreen_text'>
                        <h2 style={{fontSize:'20px'}}>Calculate Your Rarned Salary Now!</h2>
                        <h3 style={{fontSize:'10px'}}>Each day of work adds value to your company.How much does it add to you?.Register now to find out.</h3>
                    </div>
                    <div className='hassyl_image'>
                        <img src={hassyl_image} alt='Hassyl_Image' style={{width:'250px', maxHeight:'440px', borderRadius:'40px'}}></img>
                    </div>
                    
                </div>
                <div className='rightscreen'>
                    <SignUp></SignUp>
                </div>
            </div>
        )
    }
}

export default HomePage;