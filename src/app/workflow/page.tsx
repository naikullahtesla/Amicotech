import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Card,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Our Workflow - Multi-Step Process Explained",
    description: "Learn about our comprehensive workflow and development process",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Our Workflow")}`,
    path: "/workflow",
  });
}

export default function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements. This phase includes research, strategy development, and project planning.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience and ensure the design aligns with your brand identity.",
    },
    {
      number: "03",
      title: "Development",
      description: "Our development team brings the design to life using modern technologies and best practices. We follow agile methodologies and maintain regular communication.",
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing is performed to ensure functionality, performance, and compatibility across different devices and browsers.",
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle the deployment process and ensure a smooth launch. We monitor the system closely during the initial period to address any issues quickly.",
    },
    {
      number: "06",
      title: "Maintenance & Support",
      description: "Post-launch, we provide ongoing maintenance, updates, and support to ensure your digital solution continues to perform optimally.",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/workflow"
        title="Our Workflow - Multi-Step Process Explained"
        description="Learn about our comprehensive workflow and development process"
        image={`/api/og/generate?title=${encodeURIComponent("Our Workflow")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Our Workflow</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          A comprehensive multi-step process designed to deliver exceptional digital solutions.
        </Text>
      </Column>

      <Column gap="l">
        {steps.map((step, index) => (
          <Card
            key={index}
            padding="l"
            radius="m"
            border="neutral-alpha-medium"
            gap="m"
          >
            <Row gap="m" vertical="start">
              <Text
                variant="display-strong-xl"
                onBackground="brand-weak"
                style={{ minWidth: "60px" }}
              >
                {step.number}
              </Text>
              <Column gap="s" flex={1}>
                <Heading as="h2" variant="display-strong-m">
                  {step.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {step.description}
                </Text>
              </Column>
            </Row>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
