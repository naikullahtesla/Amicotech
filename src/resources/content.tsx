import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "AmicoTech",
  lastName: "",
  name: `AmicoTech`,
  role: "Digital Solutions Company",
  avatar: "/images/avatar.jpg",
  email: "contact@amicotech.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `AmicoTech - Digital Solutions & Development`,
  description: `Comprehensive web development, mobile app development, and digital solutions for businesses`,
  headline: <>Transforming ideas into digital excellence</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AmicoTech</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    We are <Text as="span" size="xl" weight="strong">AmicoTech</Text>, a digital solutions company specializing in <br /> web development, mobile apps, and custom software solutions for businesses worldwide.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About Us – AmicoTech`,
  description: `Learn about AmicoTech, a leading software development company delivering innovative digital solutions`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Who We Are",
    description: (
      <>
        AmicoTech is a full-service software development company specializing in web applications, mobile apps, and custom software solutions. We combine technical expertise with business insight to deliver products that drive growth, efficiency, and competitive advantage for our clients across various industries.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Expertise",
    experiences: [
      {
        company: "Full-Stack Development",
        timeframe: "Core Service",
        role: "End-to-End Software Solutions",
        achievements: [
          <>
            Develop scalable web and mobile applications using modern frameworks and best practices,
            ensuring high performance and maintainability.
          </>,
          <>
            Implement robust backend architectures with secure APIs, database design, and cloud infrastructure
            to support business growth.
          </>,
        ],
        images: [],
      },
      {
        company: "Industry Solutions",
        timeframe: "Specialized Services",
        role: "Domain-Specific Expertise",
        achievements: [
          <>
            Deliver tailored solutions for Education, Healthcare, Fintech, Retail, and SaaS industries
            with deep understanding of sector-specific requirements.
          </>,
          <>
            Ensure compliance with industry regulations (HIPAA, PCI-DSS, GDPR) and implement
            security best practices throughout the development lifecycle.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Certifications & Partnerships",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technologies We Use",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Modern, responsive user interfaces built with cutting-edge frameworks and libraries.</>
        ),
        tags: [
          {
            name: "React",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Infrastructure",
        description: (
          <>Scalable server architectures, APIs, and cloud infrastructure for reliable, high-performance applications.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "javascript",
          },
          {
            name: "Cloud Services",
            icon: "rocket",
          },
          {
            name: "Databases",
            icon: "document",
          },
        ],
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>Native and cross-platform mobile applications for iOS and Android platforms.</>
        ),
        tags: [
          {
            name: "React Native",
            icon: "javascript",
          },
          {
            name: "Flutter",
            icon: "rocket",
          },
          {
            name: "Swift/Kotlin",
            icon: "document",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read about ${person.name} and our latest updates`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects and solutions by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection from ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const services: BasePageConfig = {
  path: "/services",
  label: "Services",
  title: "Services - Our Development Solutions",
  description: "Comprehensive web development, mobile app development, and digital solutions",
};

const industries: BasePageConfig = {
  path: "/industries",
  label: "Industries",
  title: "Industries & Solutions - Industry-Specific Solutions",
  description: "Tailored digital solutions for various industries",
};

const contact: BasePageConfig = {
  path: "/contact",
  label: "Contact",
  title: "Contact Us - Get in Touch",
  description: "All contact details and ways to reach us",
};

const workflow: BasePageConfig = {
  path: "/workflow",
  label: "Workflow",
  title: "Our Workflow - Multi-Step Process Explained",
  description: "Learn about our comprehensive workflow and development process",
};

export { person, social, newsletter, home, about, blog, work, gallery, services, industries, contact, workflow };
