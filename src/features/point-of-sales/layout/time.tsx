import { Calendar, Clock, Minus } from "lucide-react";

export function Time() {
    const dateToday = new Date();

    const formattedDate = dateToday.toLocaleDateString("en-SG", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    const formattedTime = dateToday.toLocaleTimeString("en-SG", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <div className="text-md flex items-center gap-3 tracking-wide *:flex *:items-center *:gap-3">
            <span className="box-style">
                <span className="svg-border">
                    <Calendar />
                </span>

                <span>{formattedDate}</span>
            </span>
            <Minus className="stroke-gray-400" />
            <span className="box-style">
                <span className="svg-border">
                    <Clock />
                </span>

                <span>{formattedTime}</span>
            </span>
        </div>
    );
}
