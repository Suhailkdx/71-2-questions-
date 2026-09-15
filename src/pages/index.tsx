import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { home, host } from 'virtual:content';

import './index.css';

const siteUrl = 'https://7andahalfquestions.com';
const episodeImages = [
  '/assets/uploads/pages-episodes-dante-miller-cover-040e8ece.jpg',
  '/assets/uploads/conner.jpg',
];

export default function HomePage() {
  const [introduction, ...biography] = host.bio.paragraphs;

  return (
    <>
      <Helmet>
        <title>Priscilla Beaton — Seven and a Half Questions</title>
        <meta
          name="description"
          content="Priscilla Beaton is a New York based journalist and the founder of Seven and a Half Questions."
        />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Priscilla Beaton — Seven and a Half Questions" />
        <meta property="og:description" content="Interviews and original storytelling from Seven and a Half Questions." />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="profile-landing">
        <div className="profile-launch-bar">Launching Soon</div>
        <article className="profile-sheet">
          <header className="profile-masthead">
            <div className="profile-brand-lockup">
              <h1>
                <span>Seven</span>
                <em>and a Half</em>
                <strong>Questions</strong>
              </h1>
            </div>

            <div className="profile-section-rule" aria-hidden="true" />
          </header>

          <section className="profile-intro" aria-labelledby="profile-name">
            <h2 id="profile-name">
              <span>Priscilla</span>
              <em>Beaton</em>
            </h2>
            <div className="profile-heavy-rule" />
            <p className="profile-deck">{introduction.text}</p>
            <div className="profile-descriptors" aria-label="Profile descriptors">
              <span>Journalist</span>
              <i aria-hidden="true" />
              <span>New Yorker</span>
              <i aria-hidden="true" />
              <span>Storyteller</span>
            </div>
          </section>

          <figure className="profile-portrait-block">
            <div className="profile-photo-frame">
              <img
                src="/assets/uploads/port 2.png"
                alt="Priscilla Beaton wearing a blue graduation gown"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              Priscilla Beaton, Columbia Journalism School graduate and founder of Seven and a Half Questions.
            </figcaption>
          </figure>

          <div className="profile-color-rule" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <section className="profile-biography" aria-label="Biography">
            {biography.map((paragraph, index) => (
              <p key={paragraph.id} className={index === 0 ? 'profile-drop-cap' : undefined}>
                {paragraph.text}
              </p>
            ))}
          </section>

          <section className="profile-featured" aria-labelledby="featured-episodes-heading">
            <div className="profile-featured-heading">
              <h2 id="featured-episodes-heading">{home.featuredEpisodes.sectionLabel}</h2>
            </div>

            <div className="profile-episode-grid">
              {home.featuredEpisodes.episodes.map((episode, index) => (
                <article className="profile-episode-card" key={episode.id}>
                  <div className="profile-episode-image">
                    <img src={episodeImages[index]} alt={`${episode.guestName} portrait`} loading="lazy" />
                  </div>
                  <h3>{episode.guestName}</h3>
                  {episode.id === 'ep-dante' && <p className="profile-episode-alias">aka &quot;Turbo Millz&quot;</p>}
                  <span className="profile-coming-soon">
                    Coming Soon
                    <i aria-hidden="true" />
                  </span>
                </article>
              ))}
            </div>

            <Link className="profile-view-episodes" to="/episodes">
              View All Episodes
            </Link>
          </section>

          <section className="profile-half-question" aria-labelledby="half-question-heading">
            <div className="profile-half-question-title">
              <p>Question 7½</p>
              <h2 id="half-question-heading">
                <span>The one</span>
                <em>only a robot</em>
                <strong>could ask.</strong>
              </h2>
            </div>

            <div className="profile-half-question-copy">
              <p>
                Seven questions are carefully crafted by Priscilla, shaped by her curiosity about the person sitting across from her.
              </p>
              <p>
                The half question is different. It comes from AI. Unexpected, unpredictable, and entirely out of Priscilla’s hands—a question neither interviewer nor interviewee knows in advance.
              </p>
              <p>
                The result is a conversation that moves between the intentional and the unexpected.
              </p>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
