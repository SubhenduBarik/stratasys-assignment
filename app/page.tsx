import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col justify-between p-6 sm:p-10 font-sans bg-muted text-muted-foreground">
            <main className="flex-grow flex items-center justify-center">
                <Card className="w-full max-w-xl shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">Layers Playground</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <span>
                                  To see the canvas and play with layers, go to{" "}
                                    <Link href="/canvas" passHref>
                                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:underline">
                                      /canvas
                                    </Button>
                                  </Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                  To access the GraphQL playground in development mode, go to{" "}
                                    <Link href="/api/graphql" passHref>
                                    <Button variant="link" className="p-0 h-auto text-green-600 hover:underline">
                                      /api/graphql
                                    </Button>
                                  </Link>
                                </span>
                            </li>
                        </ol>
                        <Separator className="my-6"/>
                        <p className="text-sm text-muted-foreground text-center">
                            Explore the interface or test the API. Built for Stratasys assignment.
                        </p>
                    </CardContent>
                </Card>
            </main>

            <footer className="text-center text-xs text-muted-foreground pb-4">
                Developed by <span className="font-semibold text-primary">Subhendu Barik</span>
            </footer>
        </div>
    );
}
