import React from 'react';
import {useWatchlist} from "../../lib/utils.ts";
import MediaGrid from "../../components/MediaGrid.tsx";
import MediaCard from "../../components/MediaCard.tsx";
import {routes} from "../../constants/routes.ts";
import {Link} from "react-router";
import {Button} from "../../../components/ui/button.tsx";

const Watchlist: React.FC = () => {
  const {watchlist, remove} = useWatchlist()


  return (
    <MediaGrid>
      {watchlist.length ? watchlist.map(item => (
        <MediaCard key={item.id} item={item} onWatchlistToggle={() => {
          remove(item)
        }} isInWatchlist={true} />
      )) : (
        <div className={'text-[20px] text-white w-full flex items-center flex-col col-span-full'}>
          <p>Your watchlist is empty. Add some movies or TV shows to it from the search page!</p>
          <Link to={routes.SearchPage} >
            <Button size={'lg'} className={'h-[80px] text-[30px] mt-[10px]'}>Search page</Button>
          </Link>
        </div>
      )}
    </MediaGrid>
  );
};

export default Watchlist;