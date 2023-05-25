import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

const Wrapper = ({ children, className }: Props) => {
	return (
		<div className={`w-full  max-w-[1280px] ${className || ""}`}>
			{children}
		</div>
	);
};

export default Wrapper;
