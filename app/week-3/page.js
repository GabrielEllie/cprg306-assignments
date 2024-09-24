import ItemList from "./item-list";

export default function Page() {
    return(
        <main>
            <h1 className="text-4xl flex align-middle justify-center mb-5">Shopping List</h1>
            <ItemList />
        </main>
    );
}