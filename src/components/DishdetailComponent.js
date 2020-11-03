import React, { Component, useState } from "react";

import {
	Button,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Toast,
	ToastBody,
	ToastHeader,
	Badge,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
	ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

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

const CommentForm = (props) => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button outline color="primary" onClick={toggle}>
				<span className="fa fa-pencil fa-lg"></span>
				Submit Comment
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Do Something
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

const DishDetail = (props) => {
	if (props.dish == null) {
		return <div></div>;
	} else {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-2">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/menu">Menu</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>
								{props.dish.name}
							</BreadcrumbItem>
						</Breadcrumb>
					</div>

					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments comments={props.comments} />
						<CommentForm></CommentForm>
					</div>
				</div>
				<Modal></Modal>
			</div>
		);
	}
};

export default DishDetail;
