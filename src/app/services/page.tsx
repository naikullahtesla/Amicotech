import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Card,
  Button,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Services - Our Development Solutions",
    description: "Comprehensive web development, mobile app development, and digital solutions",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Services")}`,
    path: "/services",
  });
}

export default function Services() {
  const websiteServices = [
    {
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with payment integration, inventory management, and secure checkout systems",
    },
    {
      title: "Corporate Websites",
      description: "Professional business websites that showcase your brand and convert visitors into customers",
    },
    {
      title: "Academic Platforms",
      description: "Educational websites and learning management systems for schools and institutions",
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages optimized for marketing campaigns and lead generation",
    },
    {
      title: "Website Redesign",
      description: "Modernize and improve existing websites with enhanced UX, performance, and functionality",
    },
    {
      title: "CMS Integration",
      description: "Content management systems that empower your team to update content easily",
    },
  ];

  const webAppServices = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to solve your specific business challenges and workflows",
    },
    {
      title: "SaaS Platform Development",
      description: "Scalable Software-as-a-Service platforms designed for growth and multi-tenancy",
    },
    {
      title: "Maintenance & Scaling",
      description: "Ongoing support, performance optimization, and infrastructure scaling as your business grows",
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs, third-party integrations, and seamless data connectivity between systems",
    },
  ];

  const mobileAppServices = [
    {
      title: "iOS App Development",
      description: "Native iOS applications built with Swift, following Apple's design guidelines and best practices",
    },
    {
      title: "Android App Development",
      description: "Native Android apps developed with Kotlin/Java, optimized for various device sizes and versions",
    },
    {
      title: "Cross-Platform Solutions",
      description: "React Native and Flutter apps that work seamlessly across iOS and Android from a single codebase",
    },
    {
      title: "App Maintenance & Support",
      description: "Regular updates, bug fixes, security patches, and feature enhancements to keep your app current",
    },
    {
      title: "App Modernization",
      description: "Upgrade legacy applications with modern technologies, improved UX, and enhanced performance",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/services"
        title="Services - Our Development Solutions"
        description="Comprehensive web development, mobile app development, and digital solutions"
        image={`/api/og/generate?title=${encodeURIComponent("Services")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Our Services</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          AmicoTech delivers end-to-end software development services, from initial concept to deployment and ongoing support. We combine technical expertise with business acumen to create solutions that drive growth and efficiency.
        </Text>
      </Column>

      {/* Website Development */}
      <Column gap="m">
        <Heading as="h2" variant="display-strong-l">Website Development</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          Create a powerful online presence with responsive, SEO-optimized websites that engage visitors and drive business results.
        </Text>
        <Column gap="m">
          {websiteServices.map((service, index) => (
            <Card key={index} padding="l" radius="m" border="neutral-alpha-medium" gap="s">
              <Text variant="heading-strong-m">{service.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {service.description}
              </Text>
            </Card>
          ))}
        </Column>
      </Column>

      {/* Web App Development */}
      <Column gap="m">
        <Heading as="h2" variant="display-strong-l">Web Application Development</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          Build scalable, secure web applications that streamline operations, improve productivity, and enable digital transformation.
        </Text>
        <Column gap="m">
          {webAppServices.map((service, index) => (
            <Card key={index} padding="l" radius="m" border="neutral-alpha-medium" gap="s">
              <Text variant="heading-strong-m">{service.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {service.description}
              </Text>
            </Card>
          ))}
        </Column>
      </Column>

      {/* Mobile Apps */}
      <Column gap="m">
        <Heading as="h2" variant="display-strong-l">Mobile App Development</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          Reach your customers wherever they are with intuitive, high-performance mobile applications for iOS and Android.
        </Text>
        <Column gap="m">
          {mobileAppServices.map((service, index) => (
            <Card key={index} padding="l" radius="m" border="neutral-alpha-medium" gap="s">
              <Text variant="heading-strong-m">{service.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {service.description}
              </Text>
            </Card>
          ))}
        </Column>
      </Column>

      <Row paddingTop="l">
        <Button href="/contact" variant="primary" size="m" arrowIcon>
          Request a Consultation
        </Button>
      </Row>
    </Column>
  );
}
