'use client'
import {ApolloProvider} from "@apollo/client";
import client from "@/db/apolloClient";
import Workspace from "@/components/Workspace";
import {Toaster} from 'sonner';

export default function Canvas() {
    return (
        <ApolloProvider client={client}>
            <Workspace/>
            <Toaster position="bottom-center"/>
        </ApolloProvider>
    );
}
