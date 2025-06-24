import React from 'react';
import {AppSidebar} from "@/components/app-sidebar";
import LayerList from "@/components/LayersList";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import CADWindow from "@/components/CADWindow";
import {useQuery} from "@apollo/client";
import {GET_LAYERS} from "@/db/queries";

const Workspace = () => {
    const {data, loading} = useQuery(GET_LAYERS);

    return (
        <SidebarProvider>
            <AppSidebar>
                <LayerList loading={loading} data={data}/>
            </AppSidebar>
            <SidebarInset>
                <SidebarTrigger/>
                <CADWindow loading={loading} data={data}/>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Workspace;
