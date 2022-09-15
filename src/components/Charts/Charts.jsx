import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class Charts extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "HTML",
          total: 90,
        },
        {
          name: "CSS",
          total: 80,
        },
        {
          name: "JS",
          total: 70,
        },
        {
          name: "ES6",
          total: 70,
        },

        {
          name: "REACT",
          total: 70,
        },
        {
          name: "XML",
          total: 80,
        },
        {
          name: "C++",
          total: 60,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Container>
          <h1 className="mainTitle">Technology used</h1>
          <Row>
            <Col style={{ height: "300px" }} lg={6} md={12} sm={12}>
              <ResponsiveContainer className="barChart">
                <BarChart data={this.state.data}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <YAxis />
                  <Bar dataKey="total" fill="#3d405b" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="chartPara">
                Many articles on web development technologies are geared towards
                developers. They often stray too far into technical talk to be
                digestible or useful to people in other areas of the business,
                especially business owners and marketers. But it’s valuable for
                people in these roles to understand some of the technical
                aspects of web design and development services if only so they
                can have informed discussions with their development teams or
                vendors. It can give them a conceptual understanding of how a
                project will be built technically-speaking. That’s what this
                article is all about .In this tutorial, we’ll show how to build
                an interactive tic-tac-toe game with React. You can see what
                we’ll be building here: Final Result. If the code doesn’t make
                sense to you, or if you are unfamiliar with the code’s syntax,
                don’t worry! The goal of this tutorial is to help you understand
                React and its syntax. We recommend that you check out the
                tic-tac-toe game before continuing with the tutorial. One of the
                features that you’ll notice is that there is a numbered list to
                the right of the game’s board.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Charts;
