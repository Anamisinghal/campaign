import React, { Component } from "react";
import {
  ControlLabel,
  FormControl,
  FormGroup,
  FormButtons,
  Col,
  Modal,
  Form,
  Button
} from "react-bootstrap";

class CreateCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitDisable: true,
            name: "",
        }
    }
    onSubmit = () => {
        return this.props.onSubmit(this.state.name);
    }
    handleChange = value => {
        this.setState({'submitDisable': false});
        this.setState({'name': value});
      };
    render = () => {
        let showModal = this.props.showModal;
        return (
            <Modal show={showModal}
            onHide={this.props.toggleModal}
             >
                <Modal.Header>
                    <Modal.Title>Create/Edit Campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col md={6} sm={6} xs={12}>
                    <FormGroup>
                        <Form.Label>Campaign Name</Form.Label>
                        <FormControl
                            type="text"
                            onChange={e => this.handleChange(e.target.value)}
                            required
                        />
                    </FormGroup>
                    <FormGroup className="signup-buttons col-md-3 col-sm-6 col-xs-9">
                        <Button
                            onCancel={this.handleCancelButton}
                            disabled={this.state.submitDisable}
                            onClick={this.onSubmit}
                        >Submit</Button>
                        </FormGroup>
                    </Col>
                </Modal.Body>
            </Modal>
                
            
        )

    }
}

export default CreateCampaign;