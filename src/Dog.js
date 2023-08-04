
import Images from "./Image";
 function DogCart(props) {
    return(
        <>
            <h3>{props.name}</h3>
            <image src={props.image}/>
        </>
    );
}
export default DogCart;