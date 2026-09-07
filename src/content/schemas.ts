import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "episodeLabel": z.string(),
        "episodeNumber": z.string(),
        "guestName": z.string(),
        "guestTitle": z.string(),
        "pullQuote": z.string(),
        "description": z.string(),
        "ctaLabel": z.string(),
        "ctaHref": z.string()
      }),
      "featuredEpisodes": z.object({
        "sectionLabel": z.string(),
        "episodes": z.array(z.object({
          "id": z.string(),
          "guestName": z.string(),
          "guestTitle": z.string(),
          "topic": z.string(),
          "duration": z.string()
        }))
      }),
      "about": z.object({
        "sectionLabel": z.string(),
        "pullQuote": z.string(),
        "description": z.string(),
        "hostName": z.string(),
        "hostTitle": z.string()
      }),
      "listen": z.object({
        "sectionLabel": z.string(),
        "platforms": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "href": z.string()
        }))
      }),
      "cta": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "buttonLabel": z.string(),
        "buttonHref": z.string()
      })
    }),
    episodes: z.object({
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "episodes": z.array(z.object({
        "id": z.string(),
        "coverImage": z.string(),
        "guestName": z.string(),
        "guestTitle": z.string(),
        "topic": z.string(),
        "duration": z.string(),
        "date": z.string(),
        "comingSoon": z.boolean(),
        "platforms": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "href": z.string()
        }))
      }))
    }),
    guests: z.object({
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "guests": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "title": z.string(),
        "episode": z.string(),
        "episodeHref": z.string(),
        "quote": z.string(),
        "bio": z.string()
      }))
    }),
    about: z.object({
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "origin": z.object({
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "halfQuestion": z.object({
        "heading": z.string(),
        "pullQuote": z.string(),
        "aiLabel": z.string(),
        "aiNote": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "host": z.object({
        "label": z.string(),
        "name": z.string(),
        "title": z.string(),
        "bio": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "stats": z.array(z.object({
        "id": z.string(),
        "value": z.string(),
        "label": z.string()
      }))
    }),
    newsletter: z.object({
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "newsletter": z.object({
        "heading": z.string(),
        "description": z.string(),
        "frequency": z.string(),
        "placeholder": z.string(),
        "buttonLabel": z.string()
      }),
      "pitch": z.object({
        "label": z.string(),
        "heading": z.string(),
        "description": z.string(),
        "fields": z.object({
          "namePlaceholder": z.string(),
          "emailPlaceholder": z.string(),
          "guestNamePlaceholder": z.string(),
          "guestTitlePlaceholder": z.string(),
          "whyPlaceholder": z.string()
        })
      }),
      "contact": z.object({
        "label": z.string(),
        "heading": z.string(),
        "description": z.string(),
        "email": z.string()
      })
    }),
    host: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "label": z.string(),
        "name": z.string(),
        "title": z.string(),
        "intro": z.string()
      }),
      "bio": z.object({
        "paragraphs": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "halfQuestion": z.object({
        "label": z.string(),
        "heading": z.string(),
        "body": z.string(),
        "pullQuote": z.string()
      }),
      "connect": z.object({
        "label": z.string(),
        "heading": z.string(),
        "body": z.string(),
        "ctaLabel": z.string(),
        "ctaHref": z.string()
      })
    }),
    writers_studio: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "pillars": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "programs": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "duration": z.string(),
          "price": z.string(),
          "description": z.string(),
          "features": z.array(z.object({
            "id": z.string(),
            "text": z.string()
          })),
          "ctaLabel": z.string(),
          "featured": z.boolean()
        }))
      }),
      "mentors": z.object({
        "label": z.string(),
        "heading": z.string(),
        "body": z.string(),
        "ctaLabel": z.string(),
        "ctaHref": z.string()
      }),
      "aiNote": z.object({
        "label": z.string(),
        "heading": z.string(),
        "body": z.string()
      }),
      "apply": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "writerCtaLabel": z.string(),
        "writerCtaHref": z.string(),
        "mentorCtaLabel": z.string(),
        "mentorCtaHref": z.string()
      })
    }),
    writing_ai: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string(),
        "signatureLine": z.string()
      }),
      "description": z.object({
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "tracks": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "description": z.string()
      })),
      "philosophy": z.object({
        "label": z.string(),
        "heading": z.string(),
        "points": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "body": z.string()
      }),
      "curriculum": z.object({
        "label": z.string(),
        "heading": z.string(),
        "stages": z.array(z.object({
          "id": z.string(),
          "number": z.string(),
          "name": z.string(),
          "description": z.string()
        }))
      }),
      "transparency": z.object({
        "label": z.string(),
        "heading": z.string(),
        "body": z.string(),
        "example": z.string()
      }),
      "rules": z.object({
        "label": z.string(),
        "heading": z.string(),
        "intro": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "color": z.string(),
          "label": z.string(),
          "description": z.string()
        })),
        "youngWritersNote": z.string().optional()
      }),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string(),
        "buttonLabel": z.string(),
        "buttonHref": z.string()
      })
    }),
    writers_block: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string()
      }),
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "intro": z.object({
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "helpList": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "supportTypes": z.object({
        "heading": z.string(),
        "intro": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "provider": z.string()
        }))
      }),
      "boundary": z.object({
        "heading": z.string(),
        "note": z.string(),
        "minors": z.string()
      }),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string(),
        "buttonLabel": z.string(),
        "buttonHref": z.string()
      })
    }),
    giving_half: z.object({
      "hero": z.object({
        "label": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "intro": z.object({
        "paragraphs": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "closing": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;