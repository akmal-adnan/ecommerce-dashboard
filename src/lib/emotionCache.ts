import createEmotionCache from './createEmotionCache';

// Client-side singleton cache. Imported by client code (Providers) so the
// client uses the same insertion point as the server.
const clientSideEmotionCache = createEmotionCache();

export default clientSideEmotionCache;
