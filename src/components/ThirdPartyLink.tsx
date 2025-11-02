import { ReactNode } from "react";

interface ThirdPartyLinkProps {
  title: string;
  subtitle: ReactNode;
  description: ReactNode;
}

export function ThirdPartyLink({
  title,
  subtitle,
  description,
}: ThirdPartyLinkProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base mb-4">{subtitle}</div>
        <div className="text-gray-700 text-base">{description}</div>
      </div>
    </div>
  );
}
