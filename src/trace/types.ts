export interface TraceData {   
    name: string;
    pid: number;
    tid: number;
    ts: number;
    cat: string;
    ph: string;
    args: {
        path: string;
        containingFileName: string;
        fileIncludeTypes: string;
    };
    dur: number;
}

export interface TreeData {
    id: number;
    line: TraceData; // Node
    children: any[];
    childrenCount: number;
    childrenTypeCount: number;
    typeCount: number;
}

