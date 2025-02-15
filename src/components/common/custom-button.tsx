import { Button } from "../ui/button";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
};

export const CustomButton = ({ children, className }: ButtonProps) => {
    return (
        <Button className={`rounded-full p-5 ${className}`}>{children}</Button>
    );
};
