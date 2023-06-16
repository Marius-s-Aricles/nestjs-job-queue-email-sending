export interface Mail {
  from: string;
  to: string;
  subject: string;
  text: string;
  [key: string]: any;
}
