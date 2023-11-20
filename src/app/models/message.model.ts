export interface Message {
  type: "text";
  text: string;
  // reply: boolean;
  sender: string;
  timestamp: number;
}
