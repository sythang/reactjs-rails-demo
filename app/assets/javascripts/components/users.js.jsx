var Users = React.createClass({
  getInitialState(){
    return {users: this.props.users, is_admin: this.props.is_admin}
  },
  getDefaultState(){
    return {users: []}
  },
  render(){
    var users = this.state.users;
    return(
      <div>
        <div className="page-header">
          <h2 className="page-title">Users</h2>
        </div>
        <div className="row">
          <UserForm handleNewUser={ this.addNewUser } />
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(function(user) {
                  return <User user={ user } key={ user.id } />;
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  addNewUser(user){
    users = this.state.users;
    users.push(user);
    this.setState(users);
  }
});


// ReactDOM.render(<Users />, document.querySelector('.container'))
