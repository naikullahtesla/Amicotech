import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social, schema } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row
          s={{ direction: "column", horizontal: "center", align: "center" }}
          gap="m"
        >
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{schema.name}</Text>
            <Text onBackground="neutral-weak">
              / All rights reserved
            </Text>
          </Text>
          <Row gap="m" wrap horizontal="center">
            <SmartLink href="/privacy-policy">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Privacy Policy
              </Text>
            </SmartLink>
            <Text variant="body-default-s" onBackground="neutral-weak">/</Text>
            <SmartLink href="/terms-and-conditions">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Terms & Conditions
              </Text>
            </SmartLink>
          </Row>
        </Row>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
