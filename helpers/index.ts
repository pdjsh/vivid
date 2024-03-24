import { getAddress } from "viem";

export const shortFormatAddress = (address: string) => {
  try {
    const verifiedAddress = getAddress(address);
    const firstChars = verifiedAddress.substr(0, 6);
    const lastChars = verifiedAddress.substr(38);
    return `${firstChars}...${lastChars}`;
  } catch {
    throw `Provided address is invalid: ${address}`;
  }
};

export const shortFormatTransaction = (transaction: string) => {
  try {
    const firstChars = transaction.substr(0, 8);
    const lastChars = transaction.substr(60);
    return `${firstChars}...${lastChars}`;
  } catch {
    throw `Provided transaction is invalid: ${transaction}`;
  }
};

export const capitalize = (characters: string) =>
  characters.charAt(0).toUpperCase() + characters.slice(1);
