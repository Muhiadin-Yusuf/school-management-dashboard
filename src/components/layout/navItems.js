import { LayoutDashboard, BookOpen, Users, Wallet, BriefcaseBusiness, UserPlus } from "lucide-react";

export const navItems = [
  { to: "/", label: "Home", icon: LayoutDashboard, end: true },
  { to: "/classes", label: "Class", icon: BookOpen },
  { to: "/students", label: "Students", icon: Users },
  { to: "/finance", label: "Finance", icon: Wallet },
  { to: "/staff", label: "Staff", icon: BriefcaseBusiness },
  { to: "/registration", label: "Registration", icon: UserPlus }
];
