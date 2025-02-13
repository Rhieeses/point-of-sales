import { Button } from '../ui/button';

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
};

export const CustomButton = ({ children, className }: ButtonProps) => {
	return <Button className={`p-5 rounded-full  ${className}`}>{children}</Button>;
};
