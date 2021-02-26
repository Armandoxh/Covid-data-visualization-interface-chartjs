const SupplimentalHappy = ({ covidData }) => {
  console.log(covidData);

  return <div>{covidData.data.death}</div>;
};
export default SupplimentalHappy;
