export declare enum PadPosition {
    Start = 0,
    End = 1,
    Center = 2
}
export declare function pad(str: string, length: number, fill?: string, padPos?: PadPosition): string;
