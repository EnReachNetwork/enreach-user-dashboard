import { Tooltip, TooltipProps } from "@nextui-org/react";
import { IoIosHelpCircle } from "react-icons/io";

export function HelpTip({ content, children, placement, ...props }: TooltipProps) {
  const contentClassname = "bg-[#585858] border border-solid border-white/10 min-h-9 min-w-[4.5rem] text-xs text-white/60"
  return (
    <Tooltip
      showArrow={false}
      content={content}
      placement={placement}
      color="default"
      className=" min-h-10 min-w-[4.5rem] !max-w-[25rem] !w-full"
      classNames={{ content: contentClassname }}
      {...props}
    >
      {children ? (
        children
      ) : (
        <button className="outline-none border-none">
          <IoIosHelpCircle />
        </button>
      )}
    </Tooltip>
  );
}
