import { React, Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/addForm.css";
class AddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal show={this.props.showModel} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.props.addnewBook}>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter The Title"
              />
              <input
                type="text"
                name="status"
                id="status"
                placeholder="Enter The Status"
              />
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Enter The Img Url"
              />
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter The Description"
              />
              <button type="submit" value="addItems" className="form-btn">
                Add
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddForm;
