import LayoutAdmin from "./pages/inside/Layout";
import FormProduct from "./pages/inside/product/FormProduct";
export const routes = [
    {
        path: "/home",
        exact: false,
        components: match => <LayoutAdmin match={match}/>
    },
    {
        path: "/haha",
        exact: false,
        components: match => <FormProduct match={match}/>
    },
    {
        path: "/test",
        exact: false,
        components: match => <FormProduct match={match}/>
    }
]