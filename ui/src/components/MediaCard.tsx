import {Card, CardContent} from "../../components/ui/card.tsx";
import type {SearchQuery} from "../gql/graphql.ts";

type Media = SearchQuery['search'][number];

interface Props {
  item: Media;
  onWatchlistToggle: (item: Media) => void;
  isInWatchlist: boolean;
}

const MediaCard = ({ item, onWatchlistToggle, isInWatchlist }: Props) => (
  <Card className="overflow-hidden group bg-blue-50">
    <div className="relative aspect-[2/3] bg-muted">
      {item.poster
        ? <img src={item.poster} alt={item.title} className="w-full h-full object-cover" />
        : <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">no image</div>
      }
      <span className={`absolute top-2 left-2 text-[10px] font-medium px-1.5 py-0.5 rounded
        ${item.type === 'MOVIE' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
        {item.type === 'MOVIE' ? 'Movie' : 'TV'}
      </span>
      <button
        title={isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        onClick={(e) => { e.stopPropagation(); onWatchlistToggle(item); }}
        className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-[30px] bg-black/50
          ${isInWatchlist ? 'text-yellow-500' : 'text-white'}`}
      >
        <span className={'absolute top-1/2 right 1/2 translate-y-[-55%]'}>★</span>
      </button>
    </div>
    <CardContent className="p-3">
      <p className="text-[13px] font-medium leading-snug line-clamp-2 min-h-[35px]">
        {item.title}
      </p>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[11px] text-muted-foreground">{item.year ?? '—'}</span>
        <span className="text-[11px] font-medium text-amber-700">★ {item.rating?.toFixed(1) ?? '—'}</span>
      </div>
    </CardContent>
  </Card>
);

export default MediaCard;