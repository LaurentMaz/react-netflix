import { UserAuth } from "../context/AuthContext";
import Row from "./Row";
import { useState } from "react";

const SavedMovies = () => {
  return (
    <>
      <Row accountRow={true} title={"Films et séries sauvegardés"} />
    </>
  );
};

export default SavedMovies;
