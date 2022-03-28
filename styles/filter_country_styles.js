import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-top: 2rem;
  width: max-content;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  :focus {
    outline: none;
  }

  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

export const FilterButton = styled.select`
  background-color: ${(props) => props.theme.elements};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const FilterOption = styled.option`
  border: 0;
`;
