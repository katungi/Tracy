import { TraceData, TreeData } from "./types";

export function convertToTree(data: TraceData[]) {
    const freshTree: TreeData = {
        id: 0,
        line: {
            name: "",
            pid: 0,
            tid: 0,
            ts: 0,
            cat: "",
            ph: "",
            args: {
                path: "",
                containingFileName: "",
                fileIncludeTypes: ""
            },
            dur: 0
        },
        children: [],
        childrenCount: 0,
        childrenTypeCount: 0,
        typeCount: 0
    }

    let currentTree = freshTree; // current node we are working on;

    // create a new node
    const Stack: TreeData[] = [];
    let id = 0; // create a new unique id for each node

    // sor the data by ts
    data.sort((a, b) => a.ts - b.ts);

    // iterate through the data, and create a tree
    for(const line of data) {
       if(line.dur) {
         
       }
    }
    



    return freshTree;
}