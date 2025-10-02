import investmentCalculatorLogo from "/src/assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <>
      <div id="header">
        <img src={investmentCalculatorLogo} />
        <h1>React Investment Calculator</h1>
      </div>
    </>
  );
}
