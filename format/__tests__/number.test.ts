import exp from "constants";
import {
  abbreviateNumber,
  formatNumberInThousand,
  formattedToNumber,
  fulfillDecimal,
  roundEpsilon,
  trimDecimalZero,
} from "../number";

describe("formatNumberInThousand", () => {
  it.each`
    value         | expectedValue
    ${100}        | ${"100"}
    ${1000}       | ${"1,000"}
    ${1200000}    | ${"1,200,000"}
    ${1200000.34} | ${"1,200,000.34"}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(formatNumberInThousand(value)).toBe(expectedValue);
    }
  );
});

describe("formattedToNumber", () => {
  it.each`
    value             | expectedValue
    ${"100"}          | ${100}
    ${"1,000"}        | ${1000}
    ${"1,200,000"}    | ${1200000}
    ${"1,200,000.34"} | ${1200000.34}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(formattedToNumber(value)).toBe(expectedValue);
    }
  );
});

describe("trimDecimalZero", () => {
  it.each`
    value      | expectedValue
    ${"1.100"} | ${"1.1"}
    ${"1.010"} | ${"1.01"}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(trimDecimalZero(value)).toBe(expectedValue);
    }
  );
});

describe("roundEpsilon", () => {
  it.each`
    value          | expectedValue
    ${10.6 + 70.1} | ${80.7}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(roundEpsilon(value)).toBe(expectedValue);
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

describe("fulfillDecimal", () => {
  it.each`
    value        | expectedValue
    ${"1"}       | ${"1.00"}
    ${"1.2"}     | ${"1.20"}
    ${"1.200"}   | ${"1.20"}
    ${"1.23"}    | ${"1.23"}
    ${"1.234"}   | ${"1.234"}
    ${"1,000.2"} | ${"1,000.20"}
  `(
    "should return $expectedValue when given value is $value",
    ({ value, expectedValue }) => {
      expect(fulfillDecimal(value)).toBe(expectedValue);
    }
  );
});
