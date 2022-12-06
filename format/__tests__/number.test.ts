import exp from "constants";
import { abbreviateNumber, formattedToNumber } from "../number";

describe("formattedToNumber", () => {
  it.each`
    value          | expectedValue
    ${"100"}       | ${100}
    ${"1,000"}     | ${1000}
    ${"5,200,000"} | ${5200000}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(formattedToNumber(value)).toBe(expectedValue);
    }
  );
});

describe("abbreviateNumber", () => {
  it.each`
    value            | expectedValue
    ${900000}        | ${"900000"}
    ${9000000}       | ${"9M"}
    ${9230000}       | ${"9.23M"}
    ${9234000}       | ${"9.23M"}
    ${90000000}      | ${"90M"}
    ${900000000}     | ${"900M"}
    ${9000000000}    | ${"9B"}
    ${9000000000000} | ${"9T"}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(abbreviateNumber(value)).toBe(expectedValue);
    }
  );
});
