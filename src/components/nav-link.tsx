"use client";

import { Link, LinkProps, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  const activeColor = useColorModeValue("oceanGreen.500", "oceanGreen.200");
  const hoverColor = useColorModeValue("oceanGreen.500", "oceanGreen.200");

  return (
    <Link
      {...props}
      as={NextLink}
      py="4"
      px="2"
      fontWeight="semibold"
      color={isActive ? activeColor : "text"}
      _hover={{
        textDecoration: "none",
        color: hoverColor,
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
