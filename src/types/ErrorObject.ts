export type ErrorObject = {
  title: string;
  detail: string;
  [key: string]: string | number | Record<string, string>;
};
