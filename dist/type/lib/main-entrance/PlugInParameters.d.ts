export default class PlugInParameters {
    constructor();
    getMediaStream(): MediaStream | null;
    setMediaStream(mediaStream: MediaStream): void;
    setInitStatus(status: boolean): void;
    getInitStatus(): boolean;
    getWebRtcStatus(): boolean;
    setWebRtcStatus(status: boolean): void;
    getCanvasSize(): {
        canvasWidth: number;
        canvasHeight: number;
    };
    setCanvasSize(width: number, height: number): void;
    getShowScreenDataStatus(): boolean;
    setShowScreenDataStatus(status: boolean): void;
    setMaskColor(color: {
        r: number;
        g: number;
        b: number;
        a: number;
    }): void;
    getMaskColor(): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
}
