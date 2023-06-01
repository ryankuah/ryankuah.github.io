import { BsGithub } from "react-icons/bs";
import {
    Button, 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
} from "@chakra-ui/react";

export const DisplayBox = ({type}: {type: string}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{type}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>Project Description</Text>
            </ModalBody>

            <ModalFooter>
                <Button 
                leftIcon={<BsGithub/>} 
                colorScheme= "blackAlpha"
                onClick={() => window.open("https://google.com")}>
                    Project
                </Button>
            </ModalFooter>
            </ModalContent>
            </Modal>
        </div>
    );
}