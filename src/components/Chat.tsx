"use client";

import { useState } from "react";
import { Row, Column, Button, IconButton, Card, Text } from "@once-ui-system/core";

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 10,
        }}
      >
        <IconButton
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
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "24px",
            zIndex: 10,
          }}
        >
          <Card
            padding="l"
            radius="m"
            border="neutral-alpha-medium"
            background="page"
            gap="m"
            data-border="rounded"
            style={{
              boxShadow: "var(--shadow-l)",
              maxWidth: "400px",
              minWidth: "320px",
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
        </div>
      )}
    </>
  );
};
