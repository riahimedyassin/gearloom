import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  // Modal states
  commandPaletteOpen: boolean;
  pomodoroModalOpen: boolean;
  createTaskModalOpen: boolean;
  createProjectModalOpen: boolean;

  // Search
  searchQuery: string;
  searchResults: any[];
  isSearching: boolean;

  // Theme
  isDarkMode: boolean;

  // Sidebar
  sidebarCollapsed: boolean;

  // Workspace
  currentWorkspaceName: string;

  // Actions - Modals
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleCommandPalette: () => void;

  openPomodoroModal: () => void;
  closePomodoroModal: () => void;

  openCreateTaskModal: () => void;
  closeCreateTaskModal: () => void;

  openCreateProjectModal: () => void;
  closeCreateProjectModal: () => void;

  // Actions - Search
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: any[]) => void;
  setIsSearching: (searching: boolean) => void;
  clearSearch: () => void;

  // Actions - Theme
  toggleTheme: () => void;
  setDarkMode: (dark: boolean) => void;

  // Actions - Sidebar
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;

  // Actions - Workspace
  setCurrentWorkspaceName: (name: string) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Initial state - Modals
      commandPaletteOpen: false,
      pomodoroModalOpen: false,
      createTaskModalOpen: false,
      createProjectModalOpen: false,

      // Initial state - Search
      searchQuery: "",
      searchResults: [],
      isSearching: false,

      // Initial state - Theme
      isDarkMode: false,

      // Initial state - Sidebar
      sidebarCollapsed: false,

      // Initial state - Workspace
      currentWorkspaceName: "My Workspace",

      // Modal actions
      openCommandPalette: () => set({ commandPaletteOpen: true }),
      closeCommandPalette: () => set({ commandPaletteOpen: false }),
      toggleCommandPalette: () =>
        set((state) => ({
          commandPaletteOpen: !state.commandPaletteOpen,
        })),

      openPomodoroModal: () => set({ pomodoroModalOpen: true }),
      closePomodoroModal: () => set({ pomodoroModalOpen: false }),

      openCreateTaskModal: () => set({ createTaskModalOpen: true }),
      closeCreateTaskModal: () => set({ createTaskModalOpen: false }),

      openCreateProjectModal: () => set({ createProjectModalOpen: true }),
      closeCreateProjectModal: () => set({ createProjectModalOpen: false }),

      // Search actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSearchResults: (results) => set({ searchResults: results }),
      setIsSearching: (searching) => set({ isSearching: searching }),
      clearSearch: () =>
        set({
          searchQuery: "",
          searchResults: [],
          isSearching: false,
        }),

      // Theme actions
      toggleTheme: () => {
        const newDarkMode = !get().isDarkMode;
        set({ isDarkMode: newDarkMode });
      },

      setDarkMode: (dark) => {
        set({ isDarkMode: dark });
      },

      // Sidebar actions
      toggleSidebar: () =>
        set((state) => ({
          sidebarCollapsed: !state.sidebarCollapsed,
        })),

      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      // Workspace actions
      setCurrentWorkspaceName: (name) => set({ currentWorkspaceName: name }),
    }),
    {
      name: "ui-storage",
      // Don't persist modal states, only persistent UI preferences
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        sidebarCollapsed: state.sidebarCollapsed,
        currentWorkspaceName: state.currentWorkspaceName,
      }),
    }
  )
);
