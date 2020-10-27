import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Toast,
	ToastHeader,
	ToastBody,
	Badge,
} from "reactstrap";

function RenderDish({ dish }) {
	return (
		<Card>
			<CardImg top src={dish.image} alt={dish.name} />
			<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
			</CardBody>
		</Card>
	);
}

function RenderComments({ comments }) {
	return comments.map((comment) => {
		return (
			<Toast key={comment.id}>
				<ToastHeader>
					{comment.author} --{" "}
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "short",
						day: "2-digit",
					}).format(new Date(Date.parse(comment.date)))}{" "}
					<Badge color="warning">{comment.rating}/5 Stars!</Badge>
				</ToastHeader>
				<ToastBody>{comment.comment}</ToastBody>
			</Toast>
		);
	});
}

const DishDetail = (props) => {
	if (props.dish == null) {
		return <div></div>;
	} else {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish}></RenderDish>
					</div>
					<div className="col-12 col-md-5 m-1">
						<h4>Comments!</h4>
						<RenderComments
							comments={props.dish.comments}
						></RenderComments>
					</div>
				</div>
			</div>
		);
	}
};

export default DishDetail;
