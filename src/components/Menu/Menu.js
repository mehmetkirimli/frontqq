import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const CardSettings = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem icon={<AddIcon />} command="ctrl + e">
          Edit Q/Q
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="ctrl + x">
          Delete Q/Q
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<RepeatIcon />}>@user kullanıcısını takip et</MenuItem>
        <MenuItem icon={<EditIcon />}>@user kullanıcısını engelle</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CardSettings;
//TODO açılınca sağ tarafa doğru açılmalı , card'ın üzerine geliyor.
