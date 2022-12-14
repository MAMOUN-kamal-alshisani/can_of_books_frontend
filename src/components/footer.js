import React,{Component} from "react";
import '../css/footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

class Footer extends Component{


    render(){

        return(
            <>
            <footer>

<h3>&copy;Mamoun Alshishani</h3>
   <div className='react-icons-container'>
          <a href="https://www.linkedin.com/in/mamounalshishani-350277210" target={'_blank'} rel="noreferrer" > <BsLinkedin className='linkedin-icon'/> </a> 
          <a href="https://github.com/MAMOUN-kamal-alshisani" target={'_blank'} rel="noreferrer" > <BsGithub className='Github-icon'/> </a> 
          <a href="mailto:mamoun.alshishani@yahoo.com" target={'_blank'} rel="noreferrer" > <AiTwotoneMail className='Github-icon'/> </a> 
              </div>
            </footer>
            
            </>
        )
    }
}

export default Footer