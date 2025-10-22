import { SideMenuAppLayout } from "@/components/SideMenuAppLayout";
import { PageContainer } from "@ant-design/pro-components";
import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SideMenuAppLayout>
      <PageContainer
        token={{
          paddingInlinePageContainerContent: 0,
          paddingBlockPageContainerContent: 0,
        }}
      >
        {children}
      </PageContainer>
    </SideMenuAppLayout>
  );
};
