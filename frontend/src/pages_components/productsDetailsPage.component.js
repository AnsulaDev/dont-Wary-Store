import {useParams} from "react-router-dom";

const ProductsDetailsPage = () => {
    const {id} = useParams();
    console.log(id);
    return(
        <h1>Hello Product details page!</h1>
    )
};

export default ProductsDetailsPage;