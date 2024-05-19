import { CryptoCurrencies } from "@/constants/cryptoCurrencies";

const formatPrice = (price = 0) => {
  const formattedPrice = Math.round(Number(price) * 100) / 100;
  return `$${formattedPrice > 0 ? formattedPrice.toLocaleString() : price}`;
};

const extractValues = (obj = [], prop = "") => {
  return obj.map((item) => item[prop]);
};

const findByValue = (obj = [], value = "", prop = "symbol") => {
  return obj.find((item) => item[prop] === value);
};

const getSymbols = () => {
  return extractValues(CryptoCurrencies as any, "symbol");
};

export { formatPrice, extractValues, findByValue, getSymbols };
