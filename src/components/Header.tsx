"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton, SmartLink } from "@once-ui-system/core";
import Image from "next/image";

import { routes, display, person, about, work, gallery, services, industries, contact, workflow, schema } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Set initial theme
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <SmartLink href="/">
            <Row gap="8" vertical="center">
              {schema.logo && (
                <Image
                  src={schema.logo}
                  alt={schema.name}
                  width={120}
                  height={40}
                  style={{ 
                    objectFit: "contain", 
                    maxHeight: "40px", 
                    filter: currentTheme === "dark" ? "invert(1)" : "none" 
                  }}
                  priority
                />
              )}
            </Row>
          </SmartLink>
          {display.location && <Row s={{ hide: true }} marginLeft="m">{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/services"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="briefcase"
                      href="/services"
                      label={services.label}
                      selected={pathname.startsWith("/services")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="briefcase"
                      href="/services"
                      selected={pathname.startsWith("/services")}
                    />
                  </Row>
                </>
              )}
              {routes["/industries"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="building"
                      href="/industries"
                      label={industries.label}
                      selected={pathname.startsWith("/industries")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="building"
                      href="/industries"
                      selected={pathname.startsWith("/industries")}
                    />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      label={contact.label}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                </>
              )}
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about" || pathname.startsWith("/privacy-policy") || pathname.startsWith("/terms-and-conditions")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about" || pathname.startsWith("/privacy-policy") || pathname.startsWith("/terms-and-conditions")}
                    />
                  </Row>
                </>
              )}
              {routes["/workflow"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="workflow"
                      href="/workflow"
                      label={workflow.label}
                      selected={pathname.startsWith("/workflow")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="workflow"
                      href="/workflow"
                      selected={pathname.startsWith("/workflow")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
