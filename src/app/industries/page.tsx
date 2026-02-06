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
    title: "Industries & Solutions - Industry-Specific Solutions",
    description: "Tailored digital solutions for Education, Healthcare, Fintech, Retail, and SaaS industries",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Industries & Solutions")}`,
    path: "/industries",
  });
}

export default function Industries() {
  const industries = [
    {
      name: "Education",
      description: "Transform learning experiences with comprehensive educational technology solutions",
      solutions: [
        "Learning Management Systems (LMS)",
        "Student Information Systems",
        "Online course platforms",
        "Virtual classroom solutions",
        "Educational mobile apps",
      ],
    },
    {
      name: "Healthcare",
      description: "Secure, compliant healthcare technology solutions that improve patient care and operational efficiency",
      solutions: [
        "Electronic Health Records (EHR) systems",
        "Telemedicine platforms",
        "Patient portal applications",
        "Healthcare analytics dashboards",
        "HIPAA-compliant mobile apps",
      ],
    },
    {
      name: "Fintech",
      description: "Build secure, scalable financial technology solutions that meet regulatory requirements",
      solutions: [
        "Payment processing systems",
        "Digital banking platforms",
        "Investment and trading applications",
        "Financial analytics tools",
        "Cryptocurrency and blockchain solutions",
      ],
    },
    {
      name: "Retail & E-Commerce",
      description: "Drive sales and enhance customer experience with modern retail technology solutions",
      solutions: [
        "E-commerce platforms",
        "Point-of-sale (POS) systems",
        "Inventory management software",
        "Customer loyalty programs",
        "Retail analytics and reporting",
      ],
    },
    {
      name: "SaaS & Enterprise",
      description: "Scalable software solutions for businesses looking to digitize operations and scale efficiently",
      solutions: [
        "Multi-tenant SaaS platforms",
        "Enterprise resource planning (ERP)",
        "Customer relationship management (CRM)",
        "Business intelligence tools",
        "Workflow automation systems",
      ],
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/industries"
        title="Industries & Solutions - Industry-Specific Solutions"
        description="Tailored digital solutions for various industries"
        image={`/api/og/generate?title=${encodeURIComponent("Industries & Solutions")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Industries We Serve</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          AmicoTech specializes in delivering industry-specific software solutions. Our deep understanding of sector-specific challenges enables us to build applications that address real business needs and drive measurable results.
        </Text>
      </Column>

      <Column gap="l">
        {industries.map((industry, index) => (
          <Card
            key={index}
            padding="l"
            radius="m"
            border="neutral-alpha-medium"
            gap="m"
          >
            <Heading as="h2" variant="display-strong-m">
              {industry.name}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
              {industry.description}
            </Text>
            <Column gap="s" paddingLeft="m">
              {industry.solutions.map((solution, solIndex) => (
                <Text key={solIndex} variant="body-default-s" onBackground="neutral-weak" as="li">
                  {solution}
                </Text>
              ))}
            </Column>
          </Card>
        ))}
      </Column>

      <Row paddingTop="l">
        <Button href="/contact" variant="primary" size="m" arrowIcon>
          Discuss Your Industry Needs
        </Button>
      </Row>
    </Column>
  );
}
