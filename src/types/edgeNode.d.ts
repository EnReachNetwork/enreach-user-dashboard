declare namespace EdgeNodeMode {
  type CommonProps = {
    data?: NodeType[] | null;
    onOpenModal: (node: NodeType) => void;
    className?: string;
    isLoading: boolean;
  };

  type NodeType = {
    deviceName: string;
    icon: React.ReactNode;
    mode: string;
    when: string;
    experience: React.ReactNode;
    status: string | boolean;
    nodeId?: string;
    [key: string]: any;
  };

  type AModalProps = {
    isOpen: boolean;
    onCloseModal: () => void;
    onSubmit: (data: any) => void;
  };
}
