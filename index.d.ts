declare module "react-native-change-icon" {
  export function changeIcon(iconName: string | null): Promise<string>;
  export function getIcon(): Promise<string>;
}