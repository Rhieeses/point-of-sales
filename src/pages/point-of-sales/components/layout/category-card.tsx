import { CategoryCardProps } from "../../../types";

export function CategoryCard({ props }: { props: CategoryCardProps }) {
    return (
        <div className="group flex cursor-pointer flex-col items-start space-y-5 rounded-xl bg-white p-4 outline-blue-500 active:outline-2">
            <span className="svg-border bg-gray-200/40 p-5 py-4 group-active:bg-blue-500">
                <div className="text-3xl text-blue-400 group-active:text-white">
                    <i className={`${props.icon}`} />
                </div>
            </span>

            <div className="grid">
                <h2 className="text-lg">{props.name}</h2>
                <span className="label">{props.quantity} items</span>
            </div>
        </div>
    );
}
