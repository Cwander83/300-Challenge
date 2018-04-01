import React from "react";
import {Button,ButtonToolbar} from "react-bootstrap";
import "./style.css"


class Modal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    handleHide() {
      this.setState({ show: false });
    }
  
    render() {
      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>
            nsectetur hic et sunt iste!
                Accusantium atque elit voluptate asperiores corrupti temporibus
                mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis
                id quos dolorum eaque suscipit magni delectus maxime. Sit odit
                provident vel magnam quod. Possimus eligendi non corrupti tenetur
                culpa accusantium quod quis. Voluptatum quaerat animi dolore
                maiores molestias voluptate? Necessitatibus illo omnis laborum hic
                enim minima! Similique. Dolor voluptatum reprehenderit nihil
                adipisci aperiam voluptatem soluta magnam accusamus iste incidunt
                tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo
                animi ratione. Sunt odit similique doloribus temporibus
                reiciendis! Ullam. Dolor dolores veniam animi sequi dolores
                molestias voluptatem iure velit. Elit dolore quaerat incidunt enim
                aut distinctio. Ratione molestiae laboriosam similique laboriosam
                eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
  }
  
export default Modal;