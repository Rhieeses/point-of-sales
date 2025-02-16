import { useRef, useState } from "react";

export default function Inventory() {
    const inputRefs = useRef<HTMLInputElement[]>([]); // Array of refs
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFocusRef = () => {
        if (inputRefs.current[currentIndex]) {
            inputRefs.current[currentIndex].focus(); // Focus current input
        }
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % inputRefs.current.length,
        ); // Move to next input
    };

    return (
        <main className="flex h-lvh flex-col items-center justify-center gap-y-5">
            <h1>I'm in the inventory page</h1>
            <CustomInput refs={inputRefs} />
            <button
                onClick={handleFocusRef}
                className="rounded-2xl border-1 bg-black p-5 text-white"
            >
                Focus to the input
            </button>
        </main>
    );
}

type InputProps = {
    refs: React.RefObject<HTMLInputElement[]>;
};

const CustomInput = ({ refs }: InputProps) => {
    return (
        <>
            {["name", "password", "email"].map((field, index) => (
                <input
                    key={field}
                    type={field}
                    name={field}
                    placeholder={field}
                    ref={(el) => {
                        if (el) refs.current[index] = el;
                    }}
                    className="rounded-2xl border-1 border-black p-5 placeholder:capitalize placeholder:italic focus:shadow-2xl focus:outline-1 focus:outline-blue-500"
                />
            ))}
        </>
    );
};
