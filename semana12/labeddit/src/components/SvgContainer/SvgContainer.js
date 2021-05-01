import React from "react";
import styled from "styled-components";

export default function SvgContainer({
  width,
  fillColor,
  hoverFillColor,
  children,
  hover,
}) {
  return (
    <Main
      hoverFill={hoverFillColor}
      fill={fillColor}
      width={width}
      hover={hover}
    >
      {children}
    </Main>
  );
}

const Main = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  svg {
    width: ${(props) => props.width};
    fill: ${(props) => props.fill};
    transition: all 0.6s;
  }

  ${(props) =>
    props.hover &&
    `
            &:hover {
                svg { 
                    transition: fill .6s;
                    fill: ${props.hoverFill};
                    transform: scale(1.08);
                }
            }
        `}
`;
