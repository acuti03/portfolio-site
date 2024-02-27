import React from "react";

type Props = {
	children: React.ReactNode;
	style?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const IconButton = ( {children, style, onClick}: Props) => {
  return (
    <button className={style} onClick={onClick}>
			{children}
    </button>
  );
}

export default IconButton;