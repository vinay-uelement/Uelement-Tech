const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

export function media(path) {
  const cleanPath = path.replace(/^\/+/, '');

  if (CDN_URL) {
    return `${CDN_URL}/${cleanPath}`;
  }

  return `/${cleanPath}`;
}
