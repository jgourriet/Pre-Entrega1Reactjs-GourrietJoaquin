
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import FormularioFormik from "../components/pages/formularioFormik/FormularioFormik";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";


export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormularioFormik,
  },
];