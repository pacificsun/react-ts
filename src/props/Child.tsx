import React from "react";

interface ChildProps {
  color: string;
}

// export const Child = (props: ChildProps) => {
//   return <div>{props.color}</div>;
// };

// Better way
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};
