import React from 'react';
import {Input} from "../../../components/ui/input.tsx";
import {useSearch} from "./useSearch.tsx";
import SkeletonMediaCard from "../../components/SkeletonMediaCard.tsx";
import MediaCard from "../../components/MediaCard.tsx";
import {useWatchlist} from "../../lib/utils.ts";
import MediaGrid from "../../components/MediaGrid.tsx";

const Skeletons = Array.from({length: 12})
  .map((
    _,
    index
  ) => (
    <SkeletonMediaCard key={index} />
  ))

const Search: React.FC = () => {
  const {
    setSearchQuery,
    searchQuery,
    isLoading,
    results,
    isNothingFound,
    error
  } = useSearch();
  const {isInWatchlist, add, remove} = useWatchlist();

  const MediaCards = results.map(item => (
    <MediaCard
      key={item.id} item={item} onWatchlistToggle={() => {
      if (isInWatchlist(item.id)) {
        remove(item)
      } else {
        add(item)
      }
    }} isInWatchlist={isInWatchlist(item.id)}
    />
  ))

  return (
    <>
      <Input
        autoFocus={true}
        placeholder={'Enter name of TV show or movie'} value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        className={'text-white md:w-[60%] h-10'}
      />
      <MediaGrid>
        {isLoading ? Skeletons : error ?
          <p className={'text-white col-span-full text-center text-[20px]'}>Something went wrong. Try again later</p>
          : isNothingFound
            ?
            <p
              className={'text-white text-[20px] col-span-full text-center'}
            >{`No results for "${searchQuery}". Try a different title.`}</p>
            : MediaCards}
      </MediaGrid>
    </>
  );
};

export default Search;