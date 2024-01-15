export type FormItem = {
  typeQuestion?: number;
  answerValue?: number;
  mandatory: boolean;
  content: string;
  horizontal?: boolean;
  itens?: [{ value: number; description: string }];
};

export type FormRequest = {
  itens: FormItem[];
  error: string;
  warning: string;
};

export type GetRequest = {
  error: string;
  warning: string;
};
