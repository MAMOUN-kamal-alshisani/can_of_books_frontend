import React,{Component} from "react";
import { Modal,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
class UpdateForm extends Component{
constructor(props){
    super(props)

    this.state = {

        index: false
    }
}
   
render(){
    return(
        <>
               <Modal show={this.props.showModel} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e)=>this.props.updateFn(e)}>
                <input type='text' name='description' id='description'  value={this.props.description} placeholder='Enter Description'/>
                <input type='text' name='status' id='status' value={this.props.status} placeholder='Enter Status'/>
                <input type='text' name='img' id='img' value={this.props.img} placeholder='Enter img Url'/>
                <input type='text' name='title' id='title'value={this.props.title}  placeholder='Enter Title'/>
                <button type='submit' className='form-btn'>Update!</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
        </>
    )
}

}

export default UpdateForm