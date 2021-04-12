import NumberFormat from "react-number-format";

export const formatPopulation = (population) => {
  return (
    <NumberFormat
      value={population}
      displayType="text"
      thousandSeparator={true}
    />
  );
};
