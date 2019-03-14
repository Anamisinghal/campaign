import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ShowCampaign.scss';

export default class ShowCampaign extends React.Component{
  constructor(props){
    super(props);
  }
  updateHandler = (e) => {
    let actions = [];
    if(e.target.innerText == 'Delete')
      this.props.campaign.isDeleted = 1;
    let tempModel = {
      modification_type: e.target.innerText,
      modified_by: 'user',
      modified_at: new Date(),
      modification: "xyz"
    }
    if (!this.props.campaign.actions && !this.props.campaign.actions.length) 
      this.props.campaign.actions = [];
     
    this.props.campaign.actions.push(tempModel);

    return this.props.updateItem(this.props.campaign, this.props.itemIndex)
  }
  render() {
    const {campaign, itemIndex} = this.props;
    const deletedItemClass = this.props.campaign.isDeleted ? "deleted-item item" : "item";
    return (
      <Row className={deletedItemClass}>
        <Col md={1}>
          <span className="item-index align-line">{itemIndex}</span>
        </Col>
        <Col md={6}>
          <Row>{campaign.name}</Row>
          <Row className="small-text">{campaign.created_at}</Row>
        </Col>
        <Col md={1} className="btn btn-primary buttons-section" onClick={this.updateHandler}>Pause</Col>
        <Col md={1} className="btn btn-primary buttons-section" onClick={this.updateHandler}>Comment</Col>
        <Col md={1} className="btn btn-primary buttons-section" onClick={this.updateHandler}>Rename</Col>
        <Col md={1} className="btn btn-primary buttons-section" onClick={this.updateHandler}>Delete</Col>
      </Row>
    )
  }
}