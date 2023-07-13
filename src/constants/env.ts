export const DEBUG_MODE = process.env.NEXT_PUBLIC_DEBUG_MODE === "true";
export const DUMMY_DATE = DEBUG_MODE ? process.env.NEXT_PUBLIC_DUMMY_DATE : undefined;