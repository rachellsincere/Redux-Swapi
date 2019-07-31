import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacter } from "../actions";  // import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.getCharacter()// call our action
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
  }
};
// the characters and the fetching boolean
export default connect(
 mapStateToProps /* mapStateToProps replaces null here */,
  {
    getCharacter/* action creators go here */
  }
)(CharacterListView);
