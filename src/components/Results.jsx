import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{yearData.interest}</td>
                <td>{yearData.interest}</td>
                <td>{yearData.valueEndOfYear}</td>
                <td>{yearData.annualInvestment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <p>Results go here!</p> */}
    </>
  );
}
