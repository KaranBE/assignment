import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./sampleData", () => () => testData);

const testData = [
    {
        "ticker": "ALPHA",
        "price": 3150.67,
        "assetClass": "Credit"
    },
    {
        "ticker": "BETA",
        "price": 3791.37,
        "assetClass": "Equities"
    },
    {
        "ticker": "GAMMA",
        "price": 2299.1,
        "assetClass": "Equities"
    },
    {
        "ticker": "DELTA",
        "price": 3132.66,
        "assetClass": "Equities"
    },
    {
        "ticker": "EPSILON",
        "price": 1168.46,
        "assetClass": "Credit"
    },
    {
        "ticker": "ZETA",
        "price": 2716.78,
        "assetClass": "Credit"
    },
];

describe("App", () => {
  test("renders default app", () => {
    render(<App />);
    const pageHeading = screen.getByRole("heading");
    const table = screen.getByRole("table");

    expect(pageHeading).toHaveTextContent("Finance App");
    expect(table).toBeVisible();
    expect(table).toHaveAttribute("aria-label", "Financial Details");
    expect(table).toMatchSnapshot();
  });
});