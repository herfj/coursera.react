import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	Breadcrumb,
	BreadcrumbItem,
	Media,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderLeader({ leader }) {
	console.log(leader);
	return (
		<Media>
			<Media left href="#">
				<Media
					object
					src={baseUrl + leader.image}
					alt="Generic placeholder image"
				/>
			</Media>
			<Media body className="ml-5">
				<Media heading>{leader.name}</Media>
				<h6>{leader.designation}</h6>
				{leader.description}
			</Media>
		</Media>
	);
}

function About(props) {
	const leaders = props.leaders.leaders.map((l) => {
		return (
			<FadeTransform
				in
				transformProps={{
					exitTransform: "scale(0.5) translateY(-50%)",
				}}
			>
				<div key={l.id} className="col-12 mt-5">
					<RenderLeader leader={l}></RenderLeader>
				</div>
			</FadeTransform>
		);
	});
	if (props.leaders.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (props.leaders.errMess) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h4>{props.dishes.errMess}</h4>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-2">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/home">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Menu</BreadcrumbItem>
						</Breadcrumb>
					</div>
					<div className="col-12">
						<h3>Menu</h3>
						<hr />
					</div>
				</div>

				<div className="row row-content">
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<h2>Our History</h2>
						<p>
							Started in 2010, Ristorante con Fusion quickly
							established itself as a culinary icon par excellence
							in Hong Kong. With its unique brand of world fusion
							cuisine that can be found nowhere else, it enjoys
							patronage from the A-list clientele in Hong Kong.
							Featuring four of the best three-star Michelin chefs
							in the world, you never know what will arrive on
							your plate the next time you visit us.
						</p>
						<p>
							The restaurant traces its humble beginnings to{" "}
							<em>The Frying Pan</em>, a successful chain started
							by our CEO, Mr. Peter Pan, that featured for the
							first time the world's best cuisines in a pan.
						</p>
					</div>
					<div className="col-sm">
						<Card>
							<CardHeader className="bg-primary text-white">
								<h3> Facts At a Glance</h3>
							</CardHeader>
							<CardBody>
								<dl className="row">
									<dt className="col-6">Started</dt>
									<dd className="col-6">3 Feb. 2013</dd>
									<dt className="col-6">
										Major Stake Holder
									</dt>
									<dd className="col-6">
										HK Fine Foods Inc.
									</dd>
									<dt className="col-6">
										Last Year's Turnover
									</dt>
									<dd className="col-6">$1,250,375</dd>
									<dt className="col-6">Employees</dt>
									<dd className="col-6">40</dd>
								</dl>
							</CardBody>
						</Card>
					</div>
					<div className="col-12">
						<div className="card card-body bg-light">
							<blockquote className="blockquote">
								<p className="mb-0">
									You better cut the pizza in four pieces
									because I'm not hungry enough to eat six.
								</p>
								<footer className="blockquote-footer">
									Yogi Berra,
									<cite title="Source Title">
										The Wit and Wisdom of Yogi Berra, P.
										Pepe, Diversion Books, 2014
									</cite>
								</footer>
							</blockquote>
						</div>
					</div>
					<div className="col-12">
						<Stagger in>{leaders}</Stagger>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
