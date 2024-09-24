export default function Item({name, quantity, category}) {
    let textStyle = "text-2xl text-purple-500";
    return(
        <div className="flex items-center justify-center bg-amber-400 border-cyan-500 mb-3 border-4 border-dashed w-1/2 text-center">  
            <ol>
                <li className={textStyle}>{name}</li>
                <li className={textStyle}>{quantity}</li>
                <li className={textStyle}>{category}</li>
            </ol>
        </div>
    );
    
}