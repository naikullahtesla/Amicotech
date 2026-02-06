import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Privacy Policy",
    description: "Our privacy policy and data protection practices",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Privacy Policy")}`,
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/privacy-policy"
        title="Privacy Policy"
        description="Our privacy policy and data protection practices"
        image={`/api/og/generate?title=${encodeURIComponent("Privacy Policy")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Privacy Policy</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Last updated: {new Date().toLocaleDateString()}
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Introduction
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Information We Collect
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We may collect information about you in a variety of ways. The information we may collect includes personal data, usage data, and tracking technologies.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          How We Use Your Information
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Data Security
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Your Rights
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Contact Us
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          If you have questions about this Privacy Policy, please contact us through our contact page.
        </Text>
      </Column>
    </Column>
  );
}
