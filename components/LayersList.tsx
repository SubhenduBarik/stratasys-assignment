'use client';

import {useMutation} from '@apollo/client';
import {Layer} from "@/types/Layer";
import {DELETE_LAYER, GET_LAYERS, TOGGLE_LAYER} from "@/db/queries";
import {Skeleton} from "@/components/ui/skeleton"
import {Button} from "@/components/ui/button";
import {Eye, EyeClosed, X} from "lucide-react";

interface ILayerListProps {
    data: { layers: Layer[] };
    loading: boolean;
}

export default function LayerList(props: ILayerListProps) {
    const [toggleVisibility] = useMutation(TOGGLE_LAYER);
    const [deleteLayer] = useMutation(DELETE_LAYER);

    if (props.loading) return <div className="flex flex-col space-y-2 items-center gap-1.5">
        <Skeleton className="h-5 w-[200px] bg-stone-200"/>
        <Skeleton className="h-5 w-[200px] bg-stone-200"/>
        <Skeleton className="h-5 w-[200px] bg-stone-200"/>
        <Skeleton className="h-5 w-[200px] bg-stone-200"/>
        <Skeleton className="h-5 w-[200px] bg-stone-200"/>
    </div>

    return (
        <>
            {props.data.layers.map((layer: Layer) => (
                <div key={layer.id}>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-xs" style={{backgroundColor: layer.color}}></div>
                            <span>{layer.name}</span>
                        </div>
                        <div>
                            <Button variant="ghost"
                                    className="p-1 h-7 w-7 rounded-sm "
                                    title={"Toggle visibilty"}
                                    onClick={() => toggleVisibility({variables: {id: layer.id}})}>{layer.visible ?
                                <Eye/> : <EyeClosed/>}</Button>
                            <Button variant="destructive"
                                    className="p-1 h-5 w-5 rounded-sm "
                                    title={"Delete layer"}
                                    onClick={() => deleteLayer({
                                        variables: {id: layer.id},
                                        refetchQueries: [GET_LAYERS]
                                    })}>
                                <X size={12}/> </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
