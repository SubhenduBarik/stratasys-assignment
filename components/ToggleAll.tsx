import {useMutation, useQuery} from "@apollo/client";
import {GET_LAYERS, TOGGLE_ALL_LAYERS} from "@/db/queries";
import {Layer} from "@/types/Layer";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {Eye, EyeClosed} from "lucide-react";

export default function ToggleAll() {
    const {data} = useQuery(GET_LAYERS);
    const [toggleAllLayers, {loading}] = useMutation(TOGGLE_ALL_LAYERS, {
        refetchQueries: [GET_LAYERS],
    });

    if (!data?.layers) return null;

    const allVisible = data.layers.every((l: Layer) => l.visible);
    const newVisibility = !allVisible;

    const handleToggleAll = async () => {
        try {
            await toggleAllLayers({variables: {visible: newVisibility}});
            toast.success(`All layers ${newVisibility ? "shown" : "hidden"}`);
        } catch (err) {
            console.error(err);
            toast.error("Failed to toggle all layers");
        }
    };
    return (
        <Button variant="ghost" className="p-1 h-7 w-7 rounded-sm bg-emerald-500 hover:bg-emerald-700"
                onClick={handleToggleAll} disabled={loading}
                title={allVisible ? "Toggle off all layers" : "Toggle on all layers"}>
            {allVisible ? <Eye/> : <EyeClosed/>}
        </Button>
    )
}
