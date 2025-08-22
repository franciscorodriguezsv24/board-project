import { data } from "../mock/data";

const companiesPromise = Promise.resolve(data);

export function getComapnies() {
  return companiesPromise;
}
