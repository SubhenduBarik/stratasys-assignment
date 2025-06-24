import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar"
import {ReactNode} from "react";
import {Separator} from "@/components/ui/separator";
import NewLayerButton from "@/components/NewLayerButton";
import ToggleAll from "@/components/ToggleAll";

export function AppSidebar({children}: { children: ReactNode }) {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex justify-between pr-0">Layers <div className="flex gap-1.5"><NewLayerButton/>
                        <ToggleAll/></div></SidebarGroupLabel>
                    <Separator className="mb-2"/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {children}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}