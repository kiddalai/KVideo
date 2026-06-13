import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [
  {
    id: "bfzy",
    name: "暴风资源",
    baseUrl: "https://bfzyapi.com",
    searchPath: "/api.php/provide/vod",
    detailPath: "/api.php/provide/vod", // 这里根据API实际情况填，很多CMS接口和搜索路径一致
    enabled: true,
    priority: 1,
    type: "cms" // 注：如果你的VideoSource接口没有定义type字段，也要删掉它
  }
];
