import { RouteObject } from 'react-router';
import HomePage from './pages/index';
import EpisodesPage from './pages/episodes';
import GuestsPage from './pages/guests';
import NewsletterPage from './pages/newsletter';
import AIMentorPage from './pages/ai-mentor';
import GivingHalfPage from './pages/giving-half';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/episodes',
    element: <EpisodesPage />,
  },
  {
    path: '/guests',
    element: <GuestsPage />,
  },
  {
    path: '/newsletter',
    element: <NewsletterPage />,
  },
  {
    path: '/ai-mentor',
    element: <AIMentorPage />,
  },
  {
    path: '/giving-half',
    element: <GivingHalfPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/episodes' | '/guests';

export type Params = Record<string, string | undefined>;
