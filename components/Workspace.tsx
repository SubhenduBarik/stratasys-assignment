import React from 'react';
import {AppSidebar} from "@/components/app-sidebar";
import LayerList from "@/components/LayersList";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import CADWindow from "@/components/CADWindow";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_LAYER, GET_LAYERS} from "@/db/queries";
import {toast} from "sonner";

const Workspace = () => {
    const {data, loading} = useQuery(GET_LAYERS);
    const [addLayer, {loading: addLoading}] = useMutation(ADD_LAYER, {
        refetchQueries: [GET_LAYERS],
    });

    const onAddNewLayer = async () => {
        // if (!name.trim()) return;

        try {
            const name = "someval"
            const color = "#FFCCAA"
            await addLayer({variables: {name, color}});
            toast.success("Layer added");
            // setName("");
            // setColor("#000000");
        } catch (err) {
            console.error(err);
            toast.error("Failed to add layer");
        }
    }
    return (
        <SidebarProvider>
            <AppSidebar onAddNewLayer={onAddNewLayer}>
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
