import styled from "styled-components";
import Image from "next/image";

export const CountryCardContainer = styled.div`
  background-color: ${(props) => props.theme.elements};
  border-radius: 0.5rem;
  max-width: 100%;
  padding-bottom: 2rem;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const CountryFlag = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const CountryInfoContainer = styled.div`
  padding: 1rem;
`;

export const CountryName = styled.h3`
  font-size: 1.3em;
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.75rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const FlagContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;
