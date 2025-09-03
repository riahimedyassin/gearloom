"use client";

import {
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle,
  Cloud,
  Code,
  DollarSign,
  FileText,
  Folder,
  Globe,
  GraduationCap,
  Home,
  Kanban,
  Megaphone,
  MessageSquare,
  Monitor,
  Palette,
  Rocket,
  Server,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { ProjectSwitcher } from "@/components/project-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  getCurrentProjectType,
  ProjectType,
  useProject,
} from "@/contexts/project-context";

interface ProjectTypeSidebarProps
  extends React.ComponentProps<typeof Sidebar> {}

// Startup-focused navigation
const startupNavigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
    items: [],
  },
  {
    title: "Kanban Board",
    url: "/workspaces/kanban",
    icon: Kanban,
    items: [],
  },
  {
    title: "Business Model",
    url: "/startup/business-model",
    icon: Briefcase,
    items: [
      { title: "Value Proposition", url: "/startup/value-proposition" },
      { title: "Customer Segments", url: "/startup/customer-segments" },
      { title: "Revenue Streams", url: "/startup/revenue-streams" },
      { title: "Key Partnerships", url: "/startup/partnerships" },
    ],
  },
  {
    title: "Marketing & Growth",
    url: "/startup/marketing",
    icon: Megaphone,
    items: [
      { title: "Marketing Strategy", url: "/startup/marketing-strategy" },
      { title: "Social Media", url: "/startup/social-media" },
      { title: "Content Calendar", url: "/startup/content-calendar" },
      { title: "Analytics", url: "/startup/analytics" },
    ],
  },
  {
    title: "Product Development",
    url: "/startup/product",
    icon: Rocket,
    items: [
      { title: "MVP Planning", url: "/startup/mvp" },
      { title: "Feature Roadmap", url: "/startup/roadmap" },
      { title: "User Testing", url: "/startup/user-testing" },
      { title: "Beta Program", url: "/startup/beta" },
    ],
  },
  {
    title: "Funding & Finance",
    url: "/startup/finance",
    icon: DollarSign,
    items: [
      { title: "Funding Rounds", url: "/startup/funding" },
      { title: "Financial Projections", url: "/startup/projections" },
      { title: "Investor Relations", url: "/startup/investors" },
      { title: "Budget Tracking", url: "/startup/budget" },
    ],
  },
  {
    title: "Team & Culture",
    url: "/startup/team",
    icon: Users,
    items: [
      { title: "Hiring Pipeline", url: "/startup/hiring" },
      { title: "Team Goals", url: "/startup/team-goals" },
      { title: "Company Culture", url: "/startup/culture" },
      { title: "Performance Reviews", url: "/startup/reviews" },
    ],
  },
  {
    title: "Customer Feedback",
    url: "/startup/feedback",
    icon: MessageSquare,
    items: [
      { title: "User Interviews", url: "/startup/interviews" },
      { title: "Surveys", url: "/startup/surveys" },
      { title: "Feature Requests", url: "/startup/feature-requests" },
      { title: "Support Tickets", url: "/startup/support" },
    ],
  },
  {
    title: "Metrics & KPIs",
    url: "/startup/metrics",
    icon: TrendingUp,
    items: [
      { title: "Growth Metrics", url: "/startup/growth" },
      { title: "User Acquisition", url: "/startup/acquisition" },
      { title: "Retention Analysis", url: "/startup/retention" },
      { title: "Revenue Analytics", url: "/startup/revenue" },
    ],
  },
];

// Learning-focused navigation
const learningNavigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
    items: [],
  },
  {
    title: "Kanban Board",
    url: "/workspaces/kanban",
    icon: Kanban,
    items: [],
  },
  {
    title: "Learning Paths",
    url: "/learning/paths",
    icon: GraduationCap,
    items: [
      { title: "Current Path", url: "/learning/current-path" },
      { title: "Completed Paths", url: "/learning/completed" },
      { title: "Recommended Paths", url: "/learning/recommended" },
      { title: "Custom Paths", url: "/learning/custom" },
    ],
  },
  {
    title: "Study Resources",
    url: "/learning/resources",
    icon: BookOpen,
    items: [
      { title: "Books & Articles", url: "/learning/books" },
      { title: "Video Courses", url: "/learning/videos" },
      { title: "Online Tutorials", url: "/learning/tutorials" },
      { title: "Documentation", url: "/learning/docs" },
    ],
  },
  {
    title: "Practice & Exercises",
    url: "/learning/practice",
    icon: Code,
    items: [
      { title: "Coding Challenges", url: "/learning/challenges" },
      { title: "Practice Projects", url: "/learning/projects" },
      { title: "Quizzes & Tests", url: "/learning/quizzes" },
      { title: "Flashcards", url: "/learning/flashcards" },
    ],
  },
  {
    title: "Progress Tracking",
    url: "/learning/progress",
    icon: Trophy,
    items: [
      { title: "Learning Goals", url: "/learning/goals" },
      { title: "Milestones", url: "/learning/milestones" },
      { title: "Certificates", url: "/learning/certificates" },
      { title: "Skill Assessment", url: "/learning/assessment" },
    ],
  },
  {
    title: "Study Schedule",
    url: "/learning/schedule",
    icon: Calendar,
    items: [
      { title: "Study Calendar", url: "/learning/calendar" },
      { title: "Study Sessions", url: "/learning/sessions" },
      { title: "Reminders", url: "/learning/reminders" },
      { title: "Time Tracking", url: "/learning/time-tracking" },
    ],
  },
  {
    title: "Notes & Knowledge",
    url: "/learning/notes",
    icon: FileText,
    items: [
      { title: "Study Notes", url: "/learning/study-notes" },
      { title: "Knowledge Base", url: "/learning/knowledge-base" },
      { title: "Bookmarks", url: "/learning/bookmarks" },
      { title: "Quick References", url: "/learning/references" },
    ],
  },
  {
    title: "Community & Help",
    url: "/learning/community",
    icon: Users,
    items: [
      { title: "Study Groups", url: "/learning/study-groups" },
      { title: "Mentorship", url: "/learning/mentorship" },
      { title: "Q&A Forums", url: "/learning/forums" },
      { title: "Peer Reviews", url: "/learning/peer-reviews" },
    ],
  },
];

// Web Development-focused navigation
const webDevelopmentNavigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
    items: [],
  },
  {
    title: "Kanban Board",
    url: "/workspaces/kanban",
    icon: Kanban,
    items: [],
  },
  {
    title: "Frontend Development",
    url: "/web-dev/frontend",
    icon: Monitor,
    items: [
      { title: "Components Library", url: "/web-dev/frontend/components" },
      { title: "Styling & Themes", url: "/web-dev/frontend/styling" },
      { title: "State Management", url: "/web-dev/frontend/state" },
      { title: "Performance", url: "/web-dev/frontend/performance" },
    ],
  },
  {
    title: "Backend Development",
    url: "/web-dev/backend",
    icon: Server,
    items: [
      { title: "API Development", url: "/web-dev/backend/api" },
      { title: "Database Design", url: "/web-dev/backend/database" },
      { title: "Authentication", url: "/web-dev/backend/auth" },
      { title: "Middleware", url: "/web-dev/backend/middleware" },
    ],
  },
  {
    title: "DevOps & Deployment",
    url: "/web-dev/devops",
    icon: Cloud,
    items: [
      { title: "CI/CD Pipelines", url: "/web-dev/devops/cicd" },
      { title: "Docker & Containers", url: "/web-dev/devops/docker" },
      { title: "Cloud Services", url: "/web-dev/devops/cloud" },
      { title: "Monitoring", url: "/web-dev/devops/monitoring" },
    ],
  },
  {
    title: "Testing & QA",
    url: "/web-dev/testing",
    icon: CheckCircle,
    items: [
      { title: "Unit Testing", url: "/web-dev/testing/unit" },
      { title: "Integration Testing", url: "/web-dev/testing/integration" },
      { title: "E2E Testing", url: "/web-dev/testing/e2e" },
      { title: "Test Coverage", url: "/web-dev/testing/coverage" },
    ],
  },
  {
    title: "Documentation",
    url: "/web-dev/docs",
    icon: FileText,
    items: [
      { title: "API Documentation", url: "/web-dev/docs/api" },
      { title: "Code Documentation", url: "/web-dev/docs/code" },
      { title: "User Guides", url: "/web-dev/docs/user" },
      { title: "Architecture", url: "/web-dev/docs/architecture" },
    ],
  },
  {
    title: "Project Management",
    url: "/web-dev/project",
    icon: Briefcase,
    items: [
      { title: "Requirements", url: "/web-dev/project/requirements" },
      { title: "Sprint Planning", url: "/web-dev/project/sprints" },
      { title: "Bug Tracking", url: "/web-dev/project/bugs" },
      { title: "Release Management", url: "/web-dev/project/releases" },
    ],
  },
];

// Mobile App-focused navigation
const mobileAppNavigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
    items: [],
  },
  {
    title: "Kanban Board",
    url: "/workspaces/kanban",
    icon: Kanban,
    items: [],
  },
  {
    title: "UI/UX Design",
    url: "/mobile/design",
    icon: Palette,
    items: [
      { title: "Wireframes", url: "/mobile/design/wireframes" },
      { title: "Prototypes", url: "/mobile/design/prototypes" },
      { title: "User Testing", url: "/mobile/design/testing" },
      { title: "Design System", url: "/mobile/design/system" },
    ],
  },
  {
    title: "App Development",
    url: "/mobile/development",
    icon: Code,
    items: [
      { title: "React Native", url: "/mobile/development/react-native" },
      { title: "Flutter", url: "/mobile/development/flutter" },
      { title: "Native Development", url: "/mobile/development/native" },
      { title: "Cross-platform", url: "/mobile/development/crossplatform" },
    ],
  },
  {
    title: "Device Testing",
    url: "/mobile/testing",
    icon: CheckCircle,
    items: [
      { title: "iOS Testing", url: "/mobile/testing/ios" },
      { title: "Android Testing", url: "/mobile/testing/android" },
      { title: "Device Lab", url: "/mobile/testing/devices" },
      { title: "Performance", url: "/mobile/testing/performance" },
    ],
  },
  {
    title: "App Store",
    url: "/mobile/store",
    icon: Globe,
    items: [
      { title: "App Store Connect", url: "/mobile/store/ios" },
      { title: "Google Play Console", url: "/mobile/store/android" },
      { title: "ASO Strategy", url: "/mobile/store/aso" },
      { title: "Release Management", url: "/mobile/store/releases" },
    ],
  },
  {
    title: "Analytics & Monitoring",
    url: "/mobile/analytics",
    icon: Target,
    items: [
      { title: "User Analytics", url: "/mobile/analytics/users" },
      { title: "Crash Reporting", url: "/mobile/analytics/crashes" },
      { title: "Performance Monitoring", url: "/mobile/analytics/performance" },
      { title: "Custom Events", url: "/mobile/analytics/events" },
    ],
  },
  {
    title: "Marketing & Growth",
    url: "/mobile/marketing",
    icon: TrendingUp,
    items: [
      { title: "User Acquisition", url: "/mobile/marketing/acquisition" },
      { title: "Push Notifications", url: "/mobile/marketing/push" },
      { title: "In-App Messaging", url: "/mobile/marketing/messaging" },
      { title: "A/B Testing", url: "/mobile/marketing/ab-testing" },
    ],
  },
];

// Default navigation (original)
const defaultNavigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    items: [],
  },
  {
    title: "Kanban Board",
    url: "/workspaces/kanban",
    icon: Kanban,
    isActive: true,
    items: [],
  },
  {
    title: "Projects",
    url: "/workspaces",
    icon: Folder,
    items: [
      {
        title: "All Projects",
        url: "/workspaces",
      },
      {
        title: "Favorites",
        url: "/workspaces/favorites",
      },
      {
        title: "Recent",
        url: "/workspaces/recent",
      },
    ],
  },
  {
    title: "Team",
    url: "/team",
    icon: Users,
    items: [
      {
        title: "Members",
        url: "/team/members",
      },
      {
        title: "Roles",
        url: "/team/roles",
      },
    ],
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
];

const getNavigationByProjectType = (projectType: ProjectType) => {
  switch (projectType) {
    case "startup":
      return startupNavigation;
    case "learning":
      return learningNavigation;
    case "web-development":
      return webDevelopmentNavigation;
    case "mobile-app":
      return mobileAppNavigation;
    default:
      return defaultNavigation;
  }
};

const getProjectsByType = (projectType: ProjectType) => {
  // This would normally come from your API/database
  // For now, returning mock data based on project type
  const baseProjects = [
    {
      name: "Current Project",
      url: "/workspaces/current",
      icon: Folder,
    },
  ];

  if (projectType === "startup") {
    return [
      ...baseProjects,
      {
        name: "Market Research",
        url: "/startup/market-research",
        icon: TrendingUp,
      },
      {
        name: "Competitor Analysis",
        url: "/startup/competitors",
        icon: Target,
      },
    ];
  }

  if (projectType === "learning") {
    return [
      ...baseProjects,
      {
        name: "Frontend Mastery",
        url: "/learning/frontend",
        icon: Code,
      },
      {
        name: "Algorithm Studies",
        url: "/learning/algorithms",
        icon: Brain,
      },
    ];
  }

  if (projectType === "web-development") {
    return [
      ...baseProjects,
      {
        name: "E-commerce Platform",
        url: "/web-dev/ecommerce",
        icon: Globe,
      },
      {
        name: "API Service",
        url: "/web-dev/api-service",
        icon: Server,
      },
    ];
  }

  if (projectType === "mobile-app") {
    return [
      ...baseProjects,
      {
        name: "Social Media App",
        url: "/mobile/social-app",
        icon: MessageSquare,
      },
      {
        name: "Fitness Tracker",
        url: "/mobile/fitness-tracker",
        icon: Target,
      },
    ];
  }

  return baseProjects;
};

const userData = {
  name: "Alex Morgan",
  email: "alex@gearloom.com",
  avatar: "/avatars/user.jpg",
};

export function ProjectTypeSidebar({ ...props }: ProjectTypeSidebarProps) {
  const { currentProject } = useProject();
  const projectType = getCurrentProjectType(currentProject);
  const navigation = getNavigationByProjectType(projectType);
  const projects = getProjectsByType(projectType);

  return (
    <>
      <Sidebar
        collapsible="icon"
        {...props}
        variant="floating"
        className="border-r-0 group"
      >
        <SidebarHeader className="bg-background/95 border-b border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
          <ProjectSwitcher />
        </SidebarHeader>
        <SidebarContent className="bg-background/95 px-3 py-2 group-data-[collapsible=icon]:px-2">
          <NavMain items={navigation} />
          <NavProjects projects={projects} />
        </SidebarContent>
        <SidebarFooter className="bg-background/95 border-t border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
          <NavUser user={userData} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      {/* Pomodoro Timer */}
      <PomodoroTimer />
    </>
  );
}
