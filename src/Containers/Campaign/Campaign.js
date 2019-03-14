import React, { Component } from "react";
import {
  Button,
  Row
} from "react-bootstrap";
import './Campaign.scss';
import CreateCampaign from '../../Components/CreateCampaign/CreateCampaign';
import ShowCampaign from '../../Components/ShowCampaign/ShowCampaign';

class Campaign  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            campaignList: []
        }
    }

    componentDidMount() {
        if(localStorage.getItem('campaigns'))
            this.setState({campaignList: JSON.parse(localStorage.getItem('campaigns'))});
        else
            localStorage.setItem('campaigns', []);
    }

    onSubmit = (value) => {
        let currentCampaigns = localStorage.getItem('campaigns');
        if(currentCampaigns.length > 0){
            currentCampaigns = JSON.parse(currentCampaigns);
        }
        else
            currentCampaigns = [];
        let campaignModel = {
            name: value,
            created_at: new Date(),
            isDeleted: 0,
            id: currentCampaigns.length
        }
        currentCampaigns.push(campaignModel);
        localStorage.setItem('campaigns', JSON.stringify(currentCampaigns));
        this.setState({campaignList: JSON.parse(localStorage.getItem('campaigns'))});
        this.toggleModal();
    }
    toggleModal = () => {
        this.setState({'showModal': !this.state.showModal});
    }
    updateItem = (item, itemIndex) => {
        let currentCampaigns = JSON.parse(localStorage.getItem('campaigns'));
        currentCampaigns[itemIndex] = item;
        localStorage.setItem('campaigns', JSON.stringify(currentCampaigns));
        this.setState({campaignList: JSON.parse(localStorage.getItem('campaigns'))});
    }
    render = () => {
        const {showModal, campaignList} = this.state;
        return (
            <React.Fragment>
                <div className="title-section">
                    <label className="title">Campaign List</label>
                    <Button onClick={this.toggleModal}> + Create new</Button>
                    <CreateCampaign onSubmit={this.onSubmit} showModal={showModal} toggleModal={this.toggleModal}></CreateCampaign>
                </div>
                <Row className="list-section">
                    {campaignList.map((campaigns, key)=>
                        <ShowCampaign itemIndex={key} key={key} campaign={campaigns} updateItem={this.updateItem}></ShowCampaign>
                    )}
                </Row>
            </React.Fragment>
        )
    }
}

export default Campaign;