import type { MediaResolvers } from '../src/schema/types.generated';

export const Media: MediaResolvers = {
  id: (parent) => parent.id,
  title: (parent) => parent.title,
  poster: (parent) => parent.poster ?? null,
  year: (parent) => parent.year ?? null,
  rating: (parent) => parent.rating ?? null,
  type: (parent) => parent.type,
};