import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="bg-slate-950">
            <div className="m-4 text-white">
                <h2 className="text-3xl font-bold m-2">Shopping List</h2>
                <ItemList />
            </div>
            
        </main>
    );
}