// login
import mainLogin from '../views/login/page/main-login';

// dashboard seller
import DashboardSeller from '../views/seller/pages/dashboard';
import Profile from '../views/seller/pages/profile';
import DataPenjualan from '../views/seller/pages/dataPenjualan';
import tambahDataPenjualan from '../views/seller/pages/tambahDataPenjualan';

// admin
import DashboardAdmin from '../views/admin/pages/dashboard';
import BlogsAdmin from '../views/admin/pages/articles';
import AccountsAdmin from '../views/admin/pages/accounts';
import ItemsAdmin from '../views/admin/pages/items';
import TransactionsAdmin from '../views/admin/pages/transactions';

// login routes
const loginRoutes = {
  '/': mainLogin,
};

// seller dashboard routes
const sellerDashboardRoutes = {
  '/': DashboardSeller,
  '/profile': Profile,
  '/dataseller': DataPenjualan,
  '/addsales': tambahDataPenjualan,
};

// admin dashboard routes
const adminRoutes = {
  '/': DashboardAdmin,
  '/blogs': BlogsAdmin,
  '/accounts': AccountsAdmin,
  '/items': ItemsAdmin,
  '/transactions': TransactionsAdmin,
};

export { loginRoutes, sellerDashboardRoutes, adminRoutes };
