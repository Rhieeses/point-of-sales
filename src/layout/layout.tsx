import { Header } from "./header";
import { Sidebar } from "./sidebar";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="flex h-full basis-full flex-col gap-3 rounded-2xl px-3">
                <Header />
                {children}
            </div>
            <Sidebar />
        </div>
    );
}
