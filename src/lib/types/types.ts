type OrderStatus =
  | "PLACED"
  | "APPROVED"
  | "REJECTED"
  | "IN_TRANSIT"
  | "COMPLETED";

export type Order = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  date: Date;
  status: OrderStatus;
  amount: number;
  reference: string;
  customerName?: string | null;
};

export type OrderQueryParams = {
  page?: string;
  size?: string;
};
