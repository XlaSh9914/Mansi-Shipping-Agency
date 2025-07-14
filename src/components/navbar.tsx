import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@heroui/dropdown";
import { FaLocationArrow } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Listbox, ListboxItem } from "@heroui/listbox";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="bg-white/40 shadow-lg z-50"
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 w-[100px]">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo color={"#003c7c"} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) =>
            item.href ? (
              <NavbarItem key={item.href} className="flex p-2 font-[600]">
                <Link className="text-[#003c7c]" href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            ) : (
              <Dropdown key={item.label} showArrow>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      className="text-[#003c7c] p-0 bg-transparent data-[hover=true]:bg-transparent gap-0 text-md font-[600]"
                      endContent={<RiArrowDropDownLine size={25} />}
                      radius="sm"
                      variant="light"
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="Dropdown menu"
                  disabledKeys={item.label}
                  itemClasses={{
                    base: "gap-4",
                  }}
                  variant="faded"
                >
                  <DropdownSection>
                    {item.dropdownItem && item.dropdownItem.length > 0
                      ? item.dropdownItem.map((dropdownItem, index) => (
                          <DropdownItem
                            key={dropdownItem.label}
                            as="a"
                            className="hover:!bg-primary/15 p-3 transition-colors opacity-0 animate-fade-slide"
                            href={dropdownItem.href}
                            startContent={
                              dropdownItem.icon ? (
                                <dropdownItem.icon
                                  className="casual-float"
                                  color="#005cbe"
                                  size={20}
                                />
                              ) : null
                            }
                            style={{
                              animationDelay: `${index * 80}ms`,
                              transform: "translateX(20px)",
                            }}
                          >
                            {dropdownItem.label}
                          </DropdownItem>
                        ))
                      : null}
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            )
          )}
        </div>
        <NavbarItem className="flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-white pulse-gradient px-6 py-3 shadow-lg shadow-blue-500/50 font-[500]"
            endContent={<FaLocationArrow className="rocket-hover" />}
            href={"/contact-us"}
            target="_self"
          >
            Contact Us
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) =>
            item.href ? (
              <NavbarItem key={item.href} className="flex">
                <Link
                  className="text-large font-[600]"
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ) : (
              <Accordion
                key={item.label}
                isCompact
                className="p-0 -mt-2 -mb-2"
                selectionMode="single"
              >
                <AccordionItem
                  key={index}
                  aria-label={item.label}
                  title={
                    <span className="text-large p-0 text-black font-[600]">
                      {item.label}
                    </span>
                  }
                >
                  <Listbox>
                    {item.dropdownItem && item.dropdownItem.length > 0
                      ? item.dropdownItem.map((dropdownItem, index) => (
                          <ListboxItem
                            key={dropdownItem.label}
                            className="hover:!bg-primary/15 p-3 transition-colors opacity-0 animate-fade-slide"
                            startContent={
                              dropdownItem.icon ? (
                                <dropdownItem.icon
                                  className="casual-float"
                                  color="#005cbe"
                                  size={20}
                                />
                              ) : null
                            }
                            style={{
                              animationDelay: `${index * 80}ms`,
                              transform: "translateX(20px)",
                            }}
                          >
                            {dropdownItem.label}
                          </ListboxItem>
                        ))
                      : null}
                  </Listbox>
                </AccordionItem>
              </Accordion>
            )
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
