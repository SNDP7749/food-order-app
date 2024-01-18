import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
   
  }

  async componentDidMount() {
    

    const data = await fetch();
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Sandeep</h4>
      </div>
    );
  }
}

export default UserClass;


