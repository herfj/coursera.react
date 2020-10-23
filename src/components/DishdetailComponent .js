import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
	Toast,
	ToastHeader,
	ToastBody,
	Badge,
} from "reactstrap";

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}
	renderComments(comments) {
		return comments.map((comment) => {
			return (
				<Toast key={comment.id}>
					<ToastHeader>
						{comment.author} -- {comment.date}{" "}
						<Badge color="warning">{comment.rating}/5 Stars!</Badge>
					</ToastHeader>
					<ToastBody>{comment.comment}</ToastBody>
				</Toast>
			);
		});
	}
	render() {
		const listOfComments = this.renderComments(this.props.dish.comments);
		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg
							top
							src={this.props.dish.image}
							alt={this.props.dish.name}
						/>
						<CardBody>
							<CardTitle>{this.props.dish.name}</CardTitle>
							<CardText>{this.props.dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments!</h4>
					{listOfComments}
				</div>
			</div>
		);
	}
}
export default DishDetail;
