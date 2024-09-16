import { IconType } from "react-icons";
import { ReactNode } from "react";

export type Menu = {
  id: number;
  name: string;
  url: string;
  icon: IconType;
}

export type Services = {
  id: number;
  title: string;
  description: string;
}

export interface ButtonProps {
  text: string;
  icon: ReactNode;
  onClick: () => void;
}

export type PersonalInfo = {
  id: number;
  title: string;
  description: string;
}

export interface Figures {
  title: string;
  number: number;
}

export type Skills = {
  title: string;
  percentage: number;
}

export type Activities = {
  activity: string;
}

export interface Experience {
  title: string;
  company: string;
  dateFrom: string;
  dateTo: string;
  city: string;
  icon: IconType;
  description: Activities[];
}
