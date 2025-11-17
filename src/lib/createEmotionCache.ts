import createCache from '@emotion/cache';

// Creates an Emotion cache that respects an insertion point if present in the
// document head. The insertion point meta tag will be added in the root
// layout so server and client can agree where to place MUI/emotion styles.
export default function createEmotionCache() {
  const isBrowser = typeof document !== 'undefined';
  let insertionPoint: HTMLElement | undefined;

  if (isBrowser) {
    const node = document.querySelector('meta[name="emotion-insertion-point"]');
    insertionPoint = (node as HTMLElement | null) || undefined;
  }

  return createCache({ key: 'mui', prepend: true, insertionPoint });
}
