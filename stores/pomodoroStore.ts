import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type TimerState = 'idle' | 'running' | 'paused' | 'completed';
type SessionType = 'work' | 'short-break' | 'long-break';

interface LinkedTask {
  id: number;
  title: string;
  description?: string;
  columnId: number;
  projectId: number;
}

interface PomodoroState {
  // Timer state
  sessionType: SessionType;
  timeLeft: number;
  timerState: TimerState;
  sessionsCompleted: number;
  isOpen: boolean;
  
  // Task linking
  linkedTask: LinkedTask | null;
  totalTimeSpentOnTask: number; // in seconds
  
  // Timer controls
  startTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  completeSession: () => void;
  
  // Modal controls
  openTimer: (task?: LinkedTask) => void;
  closeTimer: () => void;
  
  // Session management
  setSessionType: (type: SessionType) => void;
  setTimeLeft: (time: number) => void;
  decrementTime: () => void;
  
  // Task management
  setLinkedTask: (task: LinkedTask | null) => void;
  addTimeToTask: (seconds: number) => void;
  
  // Preset durations
  getPresetDuration: (type: SessionType) => number;
}

// Preset durations in seconds
const presets = {
  work: 25 * 60,
  'short-break': 5 * 60,
  'long-break': 15 * 60
};

export const usePomodoroStore = create<PomodoroState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    sessionType: 'work',
    timeLeft: presets.work,
    timerState: 'idle',
    sessionsCompleted: 0,
    isOpen: false,
    
    // Task linking initial state
    linkedTask: null,
    totalTimeSpentOnTask: 0,
    
    // Timer controls
    startTimer: () => {
      set({ timerState: 'running' });
    },
    
    pauseTimer: () => {
      set({ timerState: 'paused' });
    },
    
    stopTimer: () => {
      const { sessionType } = get();
      set({ 
        timerState: 'idle',
        timeLeft: presets[sessionType]
      });
    },
    
    resetTimer: () => {
      const { sessionType } = get();
      set({ 
        timerState: 'idle',
        timeLeft: presets[sessionType]
      });
    },
    
    completeSession: () => {
      const { sessionType, sessionsCompleted, linkedTask } = get();
      
      set({ timerState: 'completed' });
      
      if (sessionType === 'work') {
        set({ sessionsCompleted: sessionsCompleted + 1 });
        
        // Add time to linked task if there is one
        if (linkedTask) {
          get().addTimeToTask(presets.work);
        }
      }
      
      // Auto-suggest next session after 2 seconds
      setTimeout(() => {
        if (sessionType === 'work') {
          const nextSessionType = (sessionsCompleted + 1) % 4 === 0 ? 'long-break' : 'short-break';
          set({
            sessionType: nextSessionType,
            timeLeft: presets[nextSessionType],
            timerState: 'idle'
          });
        } else {
          set({
            sessionType: 'work',
            timeLeft: presets.work,
            timerState: 'idle'
          });
        }
      }, 2000);
    },
    
    // Modal controls
    openTimer: () => set({ isOpen: true }),
    closeTimer: () => set({ isOpen: false }),
    
    // Session management
    setSessionType: (type: SessionType) => {
      set({ 
        sessionType: type,
        timeLeft: presets[type],
        timerState: 'idle'
      });
    },
    
    setTimeLeft: (time: number) => set({ timeLeft: time }),
    
    decrementTime: () => {
      const { timeLeft } = get();
      if (timeLeft <= 1) {
        get().completeSession();
        set({ timeLeft: 0 });
      } else {
        set({ timeLeft: timeLeft - 1 });
      }
    },
    
    getPresetDuration: (type: SessionType) => presets[type],

    // Task linking methods
    setLinkedTask: (task: LinkedTask | null) => {
      set({ linkedTask: task });
      // If setting a task, reset the total time spent counter
      if (task) {
        set({ totalTimeSpentOnTask: 0 });
      }
    },

    addTimeToTask: (timeInSeconds: number) => {
      set(state => ({ 
        totalTimeSpentOnTask: state.totalTimeSpentOnTask + timeInSeconds 
      }));
    }
  }))
);

// Timer interval management (outside of store to avoid multiple intervals)
let timerInterval: NodeJS.Timeout | null = null;

// Subscribe to timer state changes to manage the interval
usePomodoroStore.subscribe(
  (state) => state.timerState,
  (timerState) => {
    if (timerState === 'running') {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        usePomodoroStore.getState().decrementTime();
      }, 1000);
    } else {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }
  }
);
