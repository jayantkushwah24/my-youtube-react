import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div>
      <Button name={"All"} />
      <Button name={"Music"} />
      <Button name={"Live"} />
      <Button name={"News"} />
      <Button name={"Cricket"} />
      <Button name={"Podcast"} />
      <Button name={"New to you"} />
      <Button name={"Wed development"} />
      <Button name={"Recently uploaded"} />
      <Button name={"Watched"} />
    </div>
  );
};

export default ButtonList;
