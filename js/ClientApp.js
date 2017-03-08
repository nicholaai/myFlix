var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color }}, this.props.title)
      )
    )
  }
})

var myTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        myTitleFactory({ title: 'hi bro', color: 'peru' }),
        myTitleFactory({ title: 'sup dawg', color: 'mediumaquamarine' }),
        myTitleFactory({ title: 'hey hello', color: 'rebeccapurple' }),
        myTitleFactory({ title: 'yo yo yo', color: 'blue' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
