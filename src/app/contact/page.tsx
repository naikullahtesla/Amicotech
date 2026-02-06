import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Button,
  Card,
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact Us - Get in Touch",
    description: "All contact details and ways to reach us",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact Us")}`,
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/contact"
        title="Contact Us - Get in Touch"
        description="All contact details and ways to reach us"
        image={`/api/og/generate?title=${encodeURIComponent("Contact Us")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Get in Touch</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Ready to transform your business with custom software solutions? Let's discuss your project and explore how AmicoTech can help you achieve your goals.
        </Text>
      </Column>

      <Card padding="l" radius="m" border="neutral-alpha-medium" gap="m">
        <Column gap="m">
          <Heading as="h2" variant="display-strong-m">
            Business Inquiries
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
            For project proposals, partnerships, or general business inquiries, reach out via email.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-strong" marginBottom="s">
            {person.email}
          </Text>
          <Button
            href={`mailto:${person.email}?subject=Business Inquiry`}
            variant="primary"
            size="m"
            prefixIcon="email"
            arrowIcon
          >
            Send Email
          </Button>
        </Column>
      </Card>

      <Card padding="l" radius="m" border="neutral-alpha-medium" gap="m">
        <Column gap="m">
          <Heading as="h2" variant="display-strong-m">
            Project Consultation
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
            Schedule a free consultation to discuss your project requirements, timeline, and budget. We'll provide expert guidance on the best approach for your needs.
          </Text>
          <Button
            href="/workflow"
            variant="secondary"
            size="m"
            prefixIcon="calendar"
            arrowIcon
          >
            Learn About Our Process
          </Button>
        </Column>
      </Card>

      {social.length > 0 && (
        <Card padding="l" radius="m" border="neutral-alpha-medium" gap="m">
          <Column gap="m">
            <Heading as="h2" variant="display-strong-m">
              Connect With Us
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
              Follow us on social media to stay updated on our latest projects, industry insights, and company news.
            </Text>
            <Row wrap gap="m">
              {social.map((item) => (
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    variant="secondary"
                    size="m"
                    prefixIcon={item.icon}
                  >
                    {item.name}
                  </Button>
                )
              ))}
            </Row>
          </Column>
        </Card>
      )}

      <Card padding="l" radius="m" border="neutral-alpha-medium" gap="m" background="brand-alpha-weak">
        <Column gap="s">
          <Heading as="h2" variant="display-strong-m">
            Response Time
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters, please mention it in your email subject line.
          </Text>
        </Column>
      </Card>
    </Column>
  );
}
