"use client";

import {useState} from "react";
import {useMutation} from "@apollo/client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";
import {toast} from "sonner";
import {ADD_LAYER, GET_LAYERS} from "@/db/queries";
import {Plus} from "lucide-react";

export default function NewLayerButton() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [color, setColor] = useState("#000000");
    const [addLayer, {loading}] = useMutation(ADD_LAYER, {
        refetchQueries: [GET_LAYERS],
    });

    const handleAdd = async () => {
        if (!name.trim()) {
            setNameError(true);
            toast.warning("Please enter a layer name");
            return;
        }

        try {
            await addLayer({variables: {name, color}});
            toast.success("Layer added!");
            setName("");
            setColor("#000000");
            setNameError(false);
        } catch (err) {
            console.error(err);
            toast.error("Failed to add layer");
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="default"
                        className="p-1 h-7 w-7 rounded-sm bg-blue-500 hover:bg-blue-700 " title={"Add new layer"}><Plus/></Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" side="right">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">New Layer</h4>
                        <p className="text-sm text-muted-foreground">
                            Set the name and color for the layer.
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="layer-name">Name</Label>
                            <Input
                                id="layer-name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g., Layer 1"
                                className={`col-span-2 h-8 ${nameError ? "border-red-600" : ""}`}
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="layer-color">Color</Label>
                            <Input
                                id="layer-color"
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="col-span-2 h-8 w-12 p-0 rounded-xs"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button size="sm" onClick={handleAdd} disabled={loading} className="bg-blue-500 hover:bg-blue-700">
                            {loading ? "Adding..." : "Add Layer"}
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
