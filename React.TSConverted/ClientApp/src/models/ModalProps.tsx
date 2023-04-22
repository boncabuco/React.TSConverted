import ColumnDefinition from "./ColumnDefinition";

export default interface ModalProps {
    onClose: () => void;
    show: boolean;
    header: ColumnDefinition[];
    data?: any;
  }