import React from 'react';
import LeftPanel from '../components/left-panel.js';
import RightPanel from '../components/right-panel.js';

import '../styles/layout.css';

export default class Layout extends React.Component {
	constructor() {
		super();
		// binding This to getFeedByID Function
		this._getFeedByID = this._getFeedByID.bind(this);

		// binding This to Change Default Feed function
		this._changeFeed = this._changeFeed.bind(this);

		// binding This to Unsubscribe Function
		this._unSubscribe = this._unSubscribe.bind(this);
	}

	componentWillMount() {
			this.state = {
				feeds : [
							{ id : '1' , icon : 'circle-o', name : 'ZoomIT' , link : '#', categorized : false , category : '' , starred : false },
							{ id : '2' , icon : 'circle-o', name : 'Techrunch', link : '#', categorized : false , category : '', starred : false},
							{ id : '3' , icon : 'circle-o', name : 'IT News' , link : '#' , categorized : false , category : '', starred : false}
				],
				defaultFeedId : 1
			};
	}

	render() {
		const feed = this._getFeedByID( this.state.defaultFeedId );
		return(
			<div className="fluid-container">
					<LeftPanel feeds = { this.state.feeds } changeFeed = { this._changeFeed }></LeftPanel>
					<RightPanel feed = { feed } unsub = { this._unSubscribe }></RightPanel>
			</div>
		);
	}

	//Get Information Of Current User Feeds
	_getFeeds() {

		// inja miaim va feed haro load mikonim
		// inja bayad bejaye tarife local , az GET request estefade konim

		return this.state.feeds;
	}

	// Get Feed by id
	_getFeedByID(id) {

		// Get Information Of all Feeds
		const feeds = this.state.feeds;

		// find feed by given id
		const feed = feeds[id - 1];

		//returning Specified feed's Information
		return feed;
	}

	// Changing Default Feed ID when use click on left panel links
	_changeFeed(id) {
		this.setState({ defaultFeedId : id });
	}

	// unsubscribe feed by ID
	_unSubscribe(id) {
		const temp = this.state.feeds;
		temp.splice(id,1);

		this.setState({
			feeds : temp
		});
	}
}
