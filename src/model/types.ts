export interface TableRowA {
  id: number;
  name: string;
  value: string;
}

export interface TableRowB {
  id: number;
  title: string;
  description: string;
}

export type TableRow = TableRowA | TableRowB;
