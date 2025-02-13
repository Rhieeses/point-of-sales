import { Receipt, Pen } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="flex basis-1/3 flex-col rounded-3xl bg-white">
            <div className="header flex justify-start shadow-md">
                <div className="flex w-full items-center justify-between p-5">
                    <Receipt className="svg-border size-[2.5rem] stroke-gray-400 p-2" />

                    <div className="label text-center">
                        <h3 className="text-xl">Customer's Name</h3>
                        <span className="text-sm">Order Number #000</span>
                    </div>
                    <Pen className="svg-border size-[2.5rem] stroke-black p-2" />
                </div>
            </div>

            <div className="items-list h-full">
                <div className="empty label flex h-1/3 items-center justify-center border-b-[1px] border-dashed">
                    <span>No item selected</span>
                </div>
            </div>

            <div className="footer">
                <div className="space-y-2 p-5">
                    <div className="flex justify-between text-lg">
                        <div className="flex w-full justify-between">
                            <span>Subtotal</span>
                            <span>₱</span>
                        </div>

                        <span className="basis-1/3 text-end">0.00</span>
                    </div>
                    <div className="label flex justify-between">
                        <div className="flex w-full justify-between">
                            <span>Tax</span>
                            <span>₱</span>
                        </div>

                        <span className="basis-1/3 text-end">0.00</span>
                    </div>
                </div>
                <div className="total border-t-2 border-dashed p-5">
                    <div className="flex justify-between text-lg">
                        <div className="flex w-full justify-between">
                            <span>TOTAL</span>
                            <span>₱</span>
                        </div>

                        <span className="basis-1/3 text-end">0.00</span>
                    </div>
                </div>

                <div className="w-full bg-blue-500 p-5 text-center text-xl text-white">
                    Place Order
                </div>
            </div>
        </aside>
    );
}
