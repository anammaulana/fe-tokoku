import { Suspense } from "react";
import EditProduct from "../../components/product/EditProduct";
const EditProductPage = () =>{
    return (
        <>
        <Suspense>
        <EditProduct/>
        </Suspense>
        </>
    );
}

export default EditProductPage;