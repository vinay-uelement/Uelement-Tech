const BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? '';
export const imgUrl = (path) => `${BASE}${path}`;
