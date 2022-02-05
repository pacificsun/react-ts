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

// event better way is below since above code block don't makes sure it's react component.

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
