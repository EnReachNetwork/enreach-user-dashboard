declare namespace OtherTypes {
  type MAvatarProps = {
    name?: string;
    className?: string;
    size?: number;
    showFirst?: boolean;
  };

  type IconCardProps = {
    icon: React.FC;
    className?: string;
    iconSize?: number;
    tit: React.ReactNode;
    content: React.ReactNode;
  };

  type TitCardProps = {
    tit?: string | React.ReactNode;
    right?: React.ReactNode;
    className?: string;
  };

  type BGProps = {
    className?: string;
    wrapClassName?: string;
  };

  type ConfirmDialogProps = {
    confirmText?: string | React.ReactNode;
    cancelText?: string | React.ReactNode;
    onCancel?: () => void;
    onConfirm?: () => void;
    tit: string;
    msg: React.ReactNode;
    isOpen: boolean;
    className?: string;
    isLoading?: boolean;
    confirmColor?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | undefined;

    cancelColor?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | undefined;
  };

  type MLinkProps = {
    className?: string;
    isDisable?: boolean;
    target?: string;
  };

  type SignInWithGoogleProps = {
    defReferralCode?: string;
    btn?: string;
    isDisabled?: boolean;
  };

  type STableProps = {
    head: React.ReactNode[];
    data: React.ReactNode[][];
    empty?: React.ReactNode;
    loadingContent?: React.ReactNode;
    isLoading?: boolean;
  };

  type TipsProps = {
    content: React.ReactNode;
    children?: React.ReactNode;
  };
  interface AuthContextProps {
    user?: Opt<LoginResult>;
    setUser: (u?: Opt<LoginResult>) => void;
    login: (credentials: { email: string; password: string }) => Promise<void>;
    logout: () => void;
    queryUserInfo?: UseQueryResult<User | undefined>;
  }
}
