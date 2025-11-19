export const Revenue = {
  dashboardStats: {
    totalRevenue: {
      value: 459870,
      currency: 'MYR',
      change: {
        percentage: 10.23,
        status: 1,
      },
    },
    totalOrders: {
      value: 1245,
      change: {
        percentage: 12.87,
        status: 1,
      },
    },
    averageOrderValue: {
      value: 5698,
      currency: 'MYR',
      change: {
        percentage: 7.8,
        status: 1,
      },
    },
    totalCustomers: {
      value: 29817,
      change: {
        percentage: -6.52,
        status: 0,
      },
    },
  },
};

const ChartsData = [
  { month: 'Jan', unitsSold: 420, inventoryAvailable: 1200 },
  { month: 'Feb', unitsSold: 390, inventoryAvailable: 1100 },
  { month: 'Mar', unitsSold: 480, inventoryAvailable: 950 },
  { month: 'Apr', unitsSold: 520, inventoryAvailable: 870 },
  { month: 'May', unitsSold: 610, inventoryAvailable: 800 },
  { month: 'Jun', unitsSold: 700, inventoryAvailable: 780 },
  { month: 'Jul', unitsSold: 650, inventoryAvailable: 720 },
  { month: 'Aug', unitsSold: 740, inventoryAvailable: 680 },
  { month: 'Sep', unitsSold: 810, inventoryAvailable: 600 },
  { month: 'Oct', unitsSold: 790, inventoryAvailable: 550 },
  { month: 'Nov', unitsSold: 850, inventoryAvailable: 500 },
  { month: 'Dec', unitsSold: 920, inventoryAvailable: 480 },
];

const TopSellingProducts = [
  { name: 'Plain T-Shirt', unitsSold: 4863, revenue: 47500 },
  { name: 'Running Sneakers', unitsSold: 1124, revenue: 12650 },
  { name: 'Plain T-Shirt', unitsSold: 1675, revenue: 13540 },
  { name: 'Sneakers', unitsSold: 967, revenue: 6230 },
  { name: 'Cotton Polo Shirts', unitsSold: 865, revenue: 9780 },
  { name: 'Cotton Polo 1', unitsSold: 866, revenue: 9780 },
  { name: 'Cotton Polo 2', unitsSold: 865, revenue: 9781 },
  { name: 'Cotton Polo 3', unitsSold: 865, revenue: 9782 },
  { name: 'Cotton Polo 4', unitsSold: 865, revenue: 9783 },
];

const RecentOrders = [
  {
    orderId: 'ORD-2024-12847',
    customerName: 'John Smith',
    productName: 'Nike Air Max 270',
    orderDate: '2024-12-15',
    status: 'Delivered',
    total: 245.99,
    paymentMethod: 'Credit Card',
  },
  {
    orderId: 'ORD-2024-12846',
    customerName: 'Sarah Johnson',
    productName: 'Adidas Ultraboost 22',
    orderDate: '2024-12-14',
    status: 'Processing',
    total: 389.5,
    paymentMethod: 'PayPal',
  },
  {
    orderId: 'ORD-2024-12845',
    customerName: 'Michael Brown',
    productName: 'Puma RS-X3',
    orderDate: '2024-12-14',
    status: 'Shipped',
    total: 165.75,
    paymentMethod: 'Debit Card',
  },
  {
    orderId: 'ORD-2024-12844',
    customerName: 'Emily Davis',
    productName: 'New Balance 990v5',
    orderDate: '2024-12-13',
    status: 'Delivered',
    total: 425.0,
    paymentMethod: 'Credit Card',
  },
  {
    orderId: 'ORD-2024-12843',
    customerName: 'David Wilson',
    productName: 'Vans Old Skool',
    orderDate: '2024-12-13',
    status: 'Pending',
    total: 125.99,
    paymentMethod: 'Cash on Delivery',
  },
  {
    orderId: 'ORD-2024-12842',
    customerName: 'Lisa Anderson',
    productName: 'Converse Chuck 70',
    orderDate: '2024-12-12',
    status: 'Cancelled',
    total: 89.99,
    paymentMethod: 'Credit Card',
  },
  {
    orderId: 'ORD-2024-12841',
    customerName: 'Robert Taylor',
    productName: 'Jordan 1 Retro High',
    orderDate: '2024-12-12',
    status: 'Delivered',
    total: 725.0,
    paymentMethod: 'Credit Card',
  },
  {
    orderId: 'ORD-2024-12840',
    customerName: 'Jennifer Martinez',
    productName: 'Reebok Classic Leather',
    orderDate: '2024-12-11',
    status: 'Shipped',
    total: 195.5,
    paymentMethod: 'PayPal',
  },
  {
    orderId: 'ORD-2024-12839',
    customerName: 'Jennifer Martinez',
    productName: 'Reebok Classic Leather',
    orderDate: '2024-12-11',
    status: 'Shipped',
    total: 195.5,
    paymentMethod: 'PayPal',
  },
  {
    orderId: 'ORD-2024-12838',
    customerName: 'Jennifer Martinez',
    productName: 'Reebok Classic Leather',
    orderDate: '2024-12-11',
    status: 'Processing',
    total: 195.5,
    paymentMethod: 'PayPal',
  },
  {
    orderId: 'ORD-2024-12837',
    customerName: 'Jennifer Martinez',
    productName: 'Reebok Classic Leather',
    orderDate: '2024-12-11',
    status: 'Shipped',
    total: 195.5,
    paymentMethod: 'PayPal',
  },
];

const DATA = {
  Revenue,
  ChartsData,
  TopSellingProducts,
  RecentOrders,
};

export default DATA;
