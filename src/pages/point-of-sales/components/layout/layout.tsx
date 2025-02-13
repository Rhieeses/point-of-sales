import Header from "./components/header";
import { Sidebar } from "./components/sidebar";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="flex h-full basis-full flex-col gap-3 rounded-2xl px-3">
                <Header />
                <main className="no-scrollbar overflow-y-auto">{children}</main>
            </div>

            <Sidebar />
        </div>
    );
}
