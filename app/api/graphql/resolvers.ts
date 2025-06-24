import {v4 as uuidv4} from 'uuid';
import {layersDB} from "@/db/layersDB";
import {Layer} from "@/types/Layer";

const resolvers = {
    Query: {
        layers: (): Layer[] => layersDB,
        layer: (_: unknown, {id}: { id: string }): Layer | undefined =>
            layersDB.find((l) => l.id === id),
    },
    Mutation: {
        toggleLayerVisibility: (_: unknown, {id}: { id: string }): Layer | null => {
            const layer = layersDB.find((l) => l.id === id);
            if (!layer) return null;
            layer.visible = !layer.visible;
            layer.lastModified = new Date();
            return layer;
        },
        updateLayer: (
            _: unknown,
            {
                id,
                name,
                color,
                visible,
            }: { id: string; name?: string; color?: string; visible?: boolean }
        ): Layer | null => {
            const layer = layersDB.find((l) => l.id === id);
            if (!layer) return null;
            if (name !== undefined) layer.name = name;
            if (color !== undefined) layer.color = color;
            if (visible !== undefined) layer.visible = visible;
            layer.lastModified = new Date();
            return layer;
        },
        addLayer: (_: unknown, {name, color}: { name: string; color?: string }): Layer => {
            const newLayer: Layer = {
                id: uuidv4(),
                name,
                visible: true,
                color: color ?? '#FFFFFF',
                lastModified: new Date(),
            };
            layersDB.push(newLayer);
            return newLayer;
        },
        deleteLayer: (_: unknown, {id}: { id: string }): boolean => {
            const index = layersDB.findIndex((l) => l.id === id);
            if (index === -1) return false;
            layersDB.splice(index, 1);
            return true;
        },
        toggleAllLayers: (
            _: unknown,
            {visible}: { visible: boolean }
        ): Layer[] => {
            layersDB.forEach((layer) => {
                layer.visible = visible;
                layer.lastModified = new Date();
            });
            return layersDB;
        }
    },
};

export default resolvers;