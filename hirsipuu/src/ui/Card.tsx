import styled from "styled-components";

export const Card = styled.div`
  background: rgb(53, 64, 158);
  background: radial-gradient(circle, #fff 0%, #e4e1d2 120%);
  border-radius: 8px;

  &.victory {
    background: rgb(25, 25, 27);
    background: radial-gradient(circle, #0c0c0e 0%, #1b1b1d 120%);
  }

  &.defeat {
    background: rgb(25, 25, 27);
    background: radial-gradient(circle, #f5e5e5 0%, #2c2020 120%);
  }
`;
