import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import EpisodesPage from './pages/episodes';
import GuestsPage from './pages/guests';
import AboutPage from './pages/about';
import HostPage from './pages/host';
import WritersStudioPage from './pages/writers-studio';
import NewsletterPage from './pages/newsletter';
import WritingAIPage from './pages/writing-ai';
import WritersBlockPage from './pages/writers-block';
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
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/host',
    element: <HostPage />,
  },
  {
    path: '/writers-studio',
    element: <WritersStudioPage />,
  },
  {
    path: '/newsletter',
    element: <NewsletterPage />,
  },
  {
    path: '/writing-ai',
    element: <WritingAIPage />,
  },
  {
    path: '/writers-block',
    element: <WritersBlockPage />,
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
export type Path = '/' | '/episodes' | '/guests' | '/about';

export type Params = Record<string, string | undefined>;
