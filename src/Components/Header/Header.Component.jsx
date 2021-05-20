import React ,{useState,useEffect}from 'react';
import {AiFillDatabase} from 'react-icons/ai'
import haasyl_logo from '../../Assets/haasyl_logo.png';
import {Link} from 'react-router-dom';
import './Header.styles.scss';

const List= function()
{
    return(
        <div className='list_header'>
            <div style={{margin:'20px', fontWeight:'400', fontSize:'13px' , cursor:'pointer'}}>Already have an Account?</div>
            <div style={{border:'1px solid #EFEDED', width:'60px', padding:'4px 19px' ,borderRadius:'5px', boxShadow:'0px 0px 2px #EFEDED', cursor:'pointer'}}>Sign in</div>
        </div>
    )
}


const Header = function()
{        

    const [isVisible,setIsVisible]=useState(false);
    const [isMobile,setIsMobile]=useState(window.matchMedia("(max-width:660px)").matches);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setIsMobile(window.matchMedia("(max-width:660px)").matches);
        })
    })

    const toggleNav=()=>{
        setIsVisible(!isVisible);
    }

    if(isMobile)
    {
        return(
            <div className='header'>
                <Link to='/' className='logo'>
                    <img src={haasyl_logo} alt='LOGO' style={{height:'50px'}}></img>
                </Link>
                {isVisible?<List></List>:null}
                <AiFillDatabase className='mobile_dropdown_button' onClick={toggleNav}></AiFillDatabase>
            </div>
        )
    }
    else 
    {
        return(
            <div className='header'>
                <Link to='/' className='logo'>
                    <img src={haasyl_logo} alt='LOGO' style={{height:'50px'}}></img>
                </Link>
                <List></List>
            </div>
        )
    }
}

export default Header;