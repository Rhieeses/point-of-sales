import Layout from "../../layout/layout";
import { Products } from "./components/list/products";
import { CategoryList } from "./components/list/category-list";

export default function PointOfSales() {
    return (
        <Layout>
            <CategoryList />
            <main className="no-scrollbar overflow-y-auto">
                <Products />
            </main>
        </Layout>
    );
}
