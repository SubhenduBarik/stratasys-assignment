'use client'
import {ApolloProvider} from "@apollo/client";
import client from "@/db/apolloClient";
import {loadDevMessages, loadErrorMessages} from "@apollo/client/dev";
import Workspace from "@/components/Workspace";
import {Toaster} from 'sonner';

loadDevMessages();
loadErrorMessages();


export default function Canvas() {
    return (
        <ApolloProvider client={client}>
            <Workspace/>
            <Toaster position="bottom-center"/>
        </ApolloProvider>
    );
}
