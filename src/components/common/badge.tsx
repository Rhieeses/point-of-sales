export function Badge({ category }: { category: string }) {
    let color = "";
    switch (category) {
        case "coffee":
            color = "bg-amber-950/20 text-amber-900";
            break;
        case "cake":
            color = "bg-pink-950/20 text-pink-900";
            break;
        case "tea":
            color = "bg-green-950/20 text-green-900";
            break;
        case "beverage":
            color = "bg-orange-950/20 text-orange-900";
            break;
        case "smoothie":
            color = "bg-blue-950/20 text-blue-900";
            break;
    }

    return (
        <span
            className={`badge h-fit rounded-full p-2 py-0 text-sm capitalize ${color}`}
        >
            {category}
        </span>
    );
}
