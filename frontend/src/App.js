
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page
import HomePage from "./pages_components/homePage.component";
import CartPage from "./pages_components/cartPage.component";
import LoginPage from "./pages_components/loginPage.component";
import ProductList from "./pages_components/productList.component";
import ProductDetails from "./pages_components/productsDetailsPage.component";
import Register from "./pages_components/registerPage.component"
//users
import UserCartDetailsPage from "./pages_components/user_components/userCartDetailsPage.component";
import UserOrderDetailsPage from "./pages_components/user_components/userOrderDetailsPage.component";
import UserOrderPage from "./pages_components/user_components/userOrderPage.component";
import UserProfilePage from "./pages_components/user_components/userProfilePage.component";
import ProtectedRoutesCompoent from "./components/protectedRoutesComponent";

//admin pages
import AdminUserPage from "./pages_components/admin/adminUserPage.component";
import AdminEditUserPage from './pages_components/admin/adminEditUserPage.component';
import AdminAnalyticsPage from './pages_components/admin/adminAnalyticsPage.component';
import AdminChatPage from './pages_components/admin/adminChatsPage.component';
import AdminOrderPage from './pages_components/admin/adminOrderpage.component';
import AdminOrderDetails from './pages_components/admin/adminOrederDetails';
import AdminProductPage from './pages_components/admin/adminProductPage.component';
import AdminEditProduct from './pages_components/admin/adminEditProduct.component';
import AdminCreateProductPage from './pages_components/admin/adminCreateProductPage.component';

import HeaderComponet from './components/header.component'
import FooterCompoent from './components/footer.component';
//chat
import RoutesWithUserChatComponent from './components/user_chat/routesWithUserChat.component';

function App() {
  return (
    <BrowserRouter>
    <HeaderComponet/>
    <Routes>
        <Route element = {<RoutesWithUserChatComponent/>}>
         {/* publicly available routes: */}
          <Route path = "/" element = {  <HomePage/> } />
          <Route path = "/cart" element = {  <CartPage/> } />
          <Route path = "/login" element = {  <LoginPage/> } />
          <Route path = "/register" element = {  <Register/> } />
          <Route path = "/product-list" element = {  <ProductList/> } />
          <Route path = "/product-details/:id" element = {  <ProductDetails/> } />
          <Route path = "*" element = "page doesn't exist" />
        </Route>
        //protected user routes
          <Route element={<ProtectedRoutesCompoent admin={false} />}>
            <Route path = "/user" element = {  <UserProfilePage/> } />
            <Route path = "/user/my-orders" element = {  <UserOrderPage/> } />
            <Route path = "/user/cart-details" element = {  <UserCartDetailsPage/> } />
            <Route path = "/user/order-details" element = {  <UserOrderDetailsPage/> } />
          </Route>

        //protected admin routes
        <Route element={<ProtectedRoutesCompoent admin={true}/>}>
          <Route path = "/admin/users" element = {  <AdminUserPage/> } />
          <Route path = "/admin/edit-user" element = {  <AdminEditUserPage/> } />
          <Route path = "/admin/analytics" element = {  <AdminAnalyticsPage/> } />
          <Route path = "/admin/chat" element = {  <AdminChatPage/> } />
          <Route path = "/admin/orders" element = {  <AdminOrderPage/> } />
          <Route path = "/admin/order-details" element = {  <AdminOrderDetails/> } />
          <Route path = "/admin/product" element = {  <AdminProductPage/> } />
          <Route path = "/admin/edit-product" element = {  <AdminEditProduct/> } />
          <Route path = "/admin/create-product" element = {  <AdminCreateProductPage/> } />
        </Route>
    </Routes>
      <FooterCompoent/>
    </BrowserRouter>
  
  );
}

export default App;
