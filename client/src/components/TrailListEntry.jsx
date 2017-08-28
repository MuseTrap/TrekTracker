import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class TrailListEntry extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card className='trail-entry'>
        <CardHeader
          title={this.props.trail.name}
          subtitle={this.props.trail.city + ', ' + this.props.trail.state}
        />
        <CardActions>
          <FlatButton label='View on Map' onClick={this.props.onClick.bind(this, this.props.trail)} />
          <FlatButton className='view-posts' label='More Info' onClick={() => {window.location.href = '/trail?id=' + this.props.trail.trailId}} />
        </CardActions>
      </Card>
    );
  }
}

export default TrailListEntry;
