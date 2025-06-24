import {Layer} from "@/types/Layer";

interface ICADWindowProps {
    data: { layers: Layer[] };
    loading: boolean;
}

export default function CADWindow(props: ICADWindowProps) {
    if (props.loading) return <div>Loading...</div>;
    const {data: {layers}} = props;
    return (
        <main>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {
                        layers.map((layer: Layer) => <div key={layer.id}
                                                          className={`h-3/5 aspect-square rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2
                                                          -translate-y-1/2 backdrop-blur-none`}
                                                          style={{
                                                              backgroundColor: layer.color + "90",
                                                              display: layer.visible ? "inherit" : "none",
                                                          }}/>)
                    }
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"/>
            </div>
        </main>
    );
};
