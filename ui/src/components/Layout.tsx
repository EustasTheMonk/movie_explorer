import React from 'react';
import {Button} from "../../components/ui/button.tsx";
import {NavLink, Outlet} from "react-router";
import {routes} from "../constants/routes.ts";
import {Toaster} from "../../components/ui/sonner.tsx";

const Layout: React.FC = () => {
  return (
    <div>
      <div className={' border-b-[1px] border-white/10'}>
        <div
          className={'h-15 w-full flex justify-end gap-2 items-center max-w-[1600px] px-4 mx-auto'}
        >
      <NavLink className={'h-min'} to={routes.SearchPage}>
        {({isActive}) => (
          <Button
            variant={isActive ? "secondary" : "default"} size={'default'}
          >
            Search page
          </Button>
        )}
      </NavLink>

      <NavLink className={'h-min'} to={routes.WatchList}>
        {({isActive}) => (
          <Button
            variant={isActive ? "secondary" : "default"} size={'default'}
          >
          Watchlist
        </Button>
        )}

      </NavLink>
    </div>
      </div>
      <div className={'max-w-[1600px] mx-auto w-full mt-4 px-4'}>
        <Outlet />
        <Toaster position={'bottom-right'} />
      </div>
    </div>
  );
};

export default Layout;