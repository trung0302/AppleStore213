function ItemProduct(props){
    return (
        <a href="#" className="flex flex-col py-4 w-[280px] bg-white rounded-xl drop-shadow-sm hover:drop-shadow-2xl">
            <img className="px-4 py-4" src={props.data.image} alt={props.data.image}></img>
            <h3>
                {
                    props.data.name
                }
            </h3>
            <div>
                <p>{props.data.newPrice}</p>
                <p>{props.data.oldPrice}</p>
            </div>

        </a>
    );
}
export default ItemProduct;