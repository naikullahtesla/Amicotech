"use client";

import { useState } from "react";
import { Row, Column, Button, IconButton, Card, Text } from "@once-ui-system/core";

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <IconButton
        position="fixed"
        bottom="24"
        right="24"
        zIndex={10}
        size="l"
        icon="chat"
        variant="primary"
        onClick={() => setIsOpen(!isOpen)}
        tooltip="Live Chat"
        data-border="rounded"
        style={{
          boxShadow: "var(--shadow-l)",
        }}
      />

      {/* Chat Window */}
      {isOpen && (
        <Card
          position="fixed"
          bottom="100"
          right="24"
          zIndex={10}
          padding="l"
          radius="m"
          border="neutral-alpha-medium"
          background="page"
          maxWidth="400"
          minWidth="320"
          gap="m"
          data-border="rounded"
          style={{
            boxShadow: "var(--shadow-l)",
          }}
        >
          <Row fillWidth horizontal="between" vertical="center">
            <Text variant="heading-strong-m">Live Chat</Text>
            <IconButton
              icon="x"
              variant="ghost"
              size="s"
              onClick={() => setIsOpen(false)}
              tooltip="Close"
            />
          </Row>
          <Column gap="m">
            <Text variant="body-default-m" onBackground="neutral-weak">
              Have questions? We're here to help! Send us a message and we'll get back to you as soon as possible.
            </Text>
            <Button
              href="/contact"
              variant="primary"
              size="m"
              fillWidth
              arrowIcon
            >
              Contact Us
            </Button>
          </Column>
        </Card>
      )}
    </>
  );
};
