var UserForm = React.createClass({
  getInitialState(){
    return {email: '', name: '', bod: ''}
  },
  render(){
    return(
      <div>
        <form className="form-inline" onSubmit={ this.onSubmit }>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" onChange={ this.handleOnChange } value={this.state.email} /><br/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control"  name="name" onChange={ this.handleOnChange } value={this.state.name} /><br/>
          </div>
          <div className="form-group">
          <label>BOD</label>
          <input type="text" className="form-control"  name="bod" onChange={ this.handleOnChange } value={this.state.bod} /><br/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={ !this.validate() }>Submit</button>
        </form>
      </div>
    )
  },
  handleOnChange(event){
    var new_state = {};
    new_state[event.target.name] = event.target.value;
    this.setState(new_state);
  },
  onSubmit(event){
    event.preventDefault();
    var component = this;
    $.post('/users', {user: component.state} , function(data) {
      component.props.handleNewUser(data);
      component.setState({email: '', name: '', bod: ''});
    });
  },
  validate(){
    return (this.state.email != "" && this.state.name != "" && this.state.bod != "")
  }
})
