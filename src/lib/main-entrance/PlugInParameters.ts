let enableWebRtc = true;

// 数据初始化标识
let initStatus = false;

// 画布宽高
let canvasWidth = 0;
let canvasHeight = 0;

// 展示截屏图片至容器
let showScreenData = false;

// 蒙层颜色
const maskColor = { r: 0, g: 0, b: 0, a: 0.6 };

// 视频流
let stream: MediaStream | null = null;

export default class PlugInParameters {
  constructor() {
    // 标识为true时则初始化数据
    if (initStatus) {
      enableWebRtc = true;
      canvasWidth = 0;
      canvasHeight = 0;
      showScreenData = false;
      stream = null;
      // 初始化完成设置其值为false
      initStatus = false;
    }
  }

  // 获取MediaStream
  public getMediaStream() {
    return stream;
  }

  // 设置MediaStream
  public setMediaStream(mediaStream: MediaStream) {
    stream = mediaStream;
  }

  // 设置数据初始化标识
  public setInitStatus(status: boolean) {
    initStatus = status;
  }

  // 获取数据初始化标识
  public getInitStatus() {
    return initStatus;
  }

  // 获取webrtc启用状态
  public getWebRtcStatus() {
    return enableWebRtc;
  }

  // 设置webrtc启用状态
  public setWebRtcStatus(status: boolean) {
    enableWebRtc = status;
  }

  // 获取画布宽高
  public getCanvasSize() {
    return { canvasWidth: canvasWidth, canvasHeight: canvasHeight };
  }

  // 设置画布宽高
  public setCanvasSize(width: number, height: number) {
    canvasWidth = width;
    canvasHeight = height;
  }

  // 获取展示图片至容器的状态
  public getShowScreenDataStatus() {
    return showScreenData;
  }

  // 设置展示图片至容器的状态
  public setShowScreenDataStatus(status: boolean) {
    showScreenData = status;
  }

  // 设置蒙层颜色
  public setMaskColor(color: { r: number; g: number; b: number; a: number }) {
    maskColor.r = color.r;
    maskColor.g = color.g;
    maskColor.b = color.b;
    maskColor.a = color.a;
  }

  public getMaskColor() {
    return maskColor;
  }
}
