import "./style.css"
import {Card, Col, Popover} from "antd";

export const Fact = ({fact}) => {
  const content = (
    <div>
      <h3>Fact: {fact.text}</h3>
      <h4 className="secondary-info">Source: {fact.source}</h4>
      <h4 className="secondary-info">Animal: {fact.type}</h4>
      <h5 className="secondary-info">Created at: {fact.createdAt.substring(0, 10)}</h5>
    </div>
  )

  return (
    <Col span={8}>
      <Popover content={content} title="Description" trigger="click">
        <Card bodyStyle={{
          width: "90%",
          margin: "0 auto 20px",
          cursor: "pointer",
          boxShadow: "0 2px 10px -3px rgba(0, 0, 0, 0.4)"
        }} bordered={false}>
          <h2>{fact.text}</h2>
        </Card>
      </Popover>
    </Col>
  )
}