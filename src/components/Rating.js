import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span style={style} key={index} onClick={() => onClick(index)}>
            {rating > index ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </>
  );
};
