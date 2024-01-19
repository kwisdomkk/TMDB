import { Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Skeleton, SkeletonCircle, Spinner, useColorMode, useDisclosure } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useRef } from "react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
    <div className="w-full flex justify-center py-16">
      <div className="w-[1200px] flex flex-col space-y-4">
        <h1>test</h1>
        <Button colorScheme="teal" size="xs">버튼</Button>
        <Button colorScheme="red" size="md">빨간색 버튼</Button>
        <Checkbox colorScheme="green">체크박스</Checkbox>
        <Spinner color="red.500"/>
        {/* drawer */}
        <div>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </div>

        {/* skeleton */}
        <Box>
          <SkeletonCircle size='10' />
          <Skeleton height="20px"/>
        </Box>

        {/* dark mode */}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "다크모드 버튼" : "라이트 모드 버튼"}
        </Button>
      </div>
    </div>
    </Layout>
  )
}
