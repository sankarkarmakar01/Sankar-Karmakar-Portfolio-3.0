export interface ExperienceDataType {
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  experienceName: string;
  companyName: string;
  description: string;
  toolsUsed: ToolsUsedType[];
}

interface ToolsUsedType {
  toolName: string;
  colorCode: string;
  borderColor: string;
  bgColor: string;
  hoverColor: string;
}
