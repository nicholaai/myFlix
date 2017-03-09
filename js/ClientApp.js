import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

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
    );
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
