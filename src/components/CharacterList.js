import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};
const mapStateToProps = state => ({
  character: state.character,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps, { getCharacter })(CharacterList);
