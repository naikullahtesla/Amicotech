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
    title: "Terms and Conditions",
    description: "Terms and conditions for using our services",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Terms and Conditions")}`,
    path: "/terms-and-conditions",
  });
}

export default function TermsAndConditions() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/terms-and-conditions"
        title="Terms and Conditions"
        description="Terms and conditions for using our services"
        image={`/api/og/generate?title=${encodeURIComponent("Terms and Conditions")}`}
      />
      <Column gap="l">
        <Heading variant="display-strong-xl">Terms and Conditions</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Last updated: {new Date().toLocaleDateString()}
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Agreement to Terms
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Use License
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Disclaimer
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Limitations
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Revisions
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-m">
          Contact Information
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          If you have any questions about these Terms and Conditions, please contact us through our contact page.
        </Text>
      </Column>
    </Column>
  );
}
