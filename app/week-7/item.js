export default function Item({itemObj}) {

    const {id, name, quantity, category} = itemObj;

    return( 
        <ul>
            {/* <li className={textStyle}>{id}</li> */}
            <li className="p-2 m-4 bg-slate-900 w-80 max-w-sm" key={id}>
                <h2 className="text-xl font-bold" >{name}</h2>
                <div className="text-sm">
                    <p>Buy {quantity} in {category}</p>
                </div>
            </li>
        </ul>
    );
    
}