import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Layers",
    description: "Add, Update, or modify canvas",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
