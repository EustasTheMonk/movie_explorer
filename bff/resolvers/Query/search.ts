import 'dotenv/config'
import type { QueryResolvers } from '../../src/schema/types.generated';

export const search: QueryResolvers['search'] = async (_, { query }) => {
  let data

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}`,
      { headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` } }
    );

    data = await res.json();
  } catch (e) {
    console.error(e);
    throw e;
  }

  return data.results
    .filter((r: any) => r.media_type === 'movie' || r.media_type === 'tv')
    .map((r: any) => ({
      id: String(r.id),
      title: r.title ?? r.name,
      poster: r.poster_path ? `https://image.tmdb.org/t/p/w500${r.poster_path}` : null,
      year: (r.release_date ?? r.first_air_date)?.slice(0, 4) ?? null,
      rating: r.vote_average ?? null,
      type: r.media_type === 'movie' ? 'MOVIE' : 'TV',
    }));
};