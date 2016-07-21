var React = require('react');

function createProps(props) { return {	 __html: 'window.PROPS=' + JSON.stringify(props) };

module.exports = React.createClass({
  _handleClick: function() {
    alert();
  },
  render: function(){
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>
          <script dangerouslySetInnerHTML={createProps(this.props)} />
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  },
})