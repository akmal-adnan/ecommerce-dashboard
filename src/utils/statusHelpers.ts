export type OrderStatus =
  | 'delivered'
  | 'shipped'
  | 'processing'
  | 'pending'
  | 'cancelled';

export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'var(--text-success-bold)';
    case 'shipped':
      return 'var(--text-info-bold)';
    case 'processing':
      return 'var(--text-pending-bold)';
    case 'pending':
      return 'var(--text-pending-bold)';
    case 'cancelled':
      return 'var(--text-warning-bold)';
    default:
      return 'var(--text-gentle)';
  }
};
