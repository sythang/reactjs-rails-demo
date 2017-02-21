var User = React.createClass({
  render(){
    var user = this.props.user;
    return(
      <tr>
        <td id={user.id}>{ user.id }</td>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.bod }</td>
      </tr>
    );
  }
})
