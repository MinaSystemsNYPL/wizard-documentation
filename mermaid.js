(() => {
  const flowDefinition = `sequenceDiagram
    autonumber
    actor U as User
    participant GUI as UI Layer
    participant H as Handler
    participant T as Task Queue
    participant A as Action Script
    participant O as Orchestrator

    U->>GUI: Opens a workflow tool from the main app
    GUI->>H: Triggers handle_*() logic
    H->>GUI: Opens the dialog and drop zone
    U->>GUI: Chooses a folder and clicks Run
    GUI->>H: Accepts the dialog and starts the task

    H->>H: Validates the target path and locks it
    H->>T: Spawns an action thread
    T->>GUI: Mounts the progress overlay HUD

    T->>A: Starts Action.run() in the background
    A->>A: Checks permissions and QC context
    A->>O: Calls the orchestrated workflow

    rect rgb(35, 40, 45)
    Note over O: Parallel processing phase
    O->>O: Runs the worker pool and image analysis
    O-->>T: Sends progress callbacks
    T-->>GUI: Updates the live status panel
    end

    O-->>A: Returns a structured result payload
    A->>A: Writes success or error logs
    A-->>T: Finishes the action run

    T->>H: Emits the task-complete signal
    H->>GUI: Removes the overlay and unlocks the path
    H->>GUI: Opens the success or error summary dialog
    GUI-->>U: Presents the final result and logs`;

  let currentTheme = 'dark';

  function renderFlow() {
    const container = document.getElementById('flow-diagram');
    if (!container || typeof mermaid === 'undefined') {
      return;
    }

    container.innerHTML = '';
    const id = `wizard-flow-${Math.random().toString(36).slice(2, 8)}`;

    mermaid.initialize({
      startOnLoad: false,
      theme: currentTheme,
      securityLevel: 'loose',
      sequence: {
        actorMargin: 60,
        messageMargin: 40
      }
    });

    mermaid.render(id, flowDefinition)
      .then(({ svg }) => {
        container.innerHTML = svg;
      })
      .catch((error) => {
        container.innerHTML = '<p class="status">Unable to render the sequence flow right now.</p>';
        console.error(error);
      });
  }

  function setTheme(theme) {
    currentTheme = theme;
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.textContent = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    }
    renderFlow();
  }

  function init() {
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'neutral' : 'dark');
    });
  }
  setTheme(currentTheme);
}

// Safely wait for both DOM and ESM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();