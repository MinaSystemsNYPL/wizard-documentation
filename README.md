# Wizard Architecture & Action Script Specification

## Architectural Overview
Wizard is an enterprise digitization and Quality Control (QC) suite optimized for macOS Apple Silicon. It utilizes a hybrid architecture combining PySide6 (Qt) UI components, multi-process asynchronous workers, native macOS Cocoa bindings (`pyobjc`), and server synchronization engines.

---

## Module Index

### 1. Architectural Core (14 Scripts)
| Module | File Name | Description |
| :--- | :--- | :--- |
| **Main Window** | `main.py` | Primary GUI controller, multi-task HUD launcher, and window events. |
| **Action Bridge** | `handlers.py` | Connects UI modal triggers to non-blocking background workers. |
| **UI Components** | `components.py` | Glassmorphism PySide6 dialogs, custom widgets, and input controls. |
| **Orchestrator** | `orchestrator.py` | Central execution manager for multi-core image processing and reporting. |
| **Database Sync** | `database.py` | Local SQLite database manager with automatic multi-master server merging. |
| **Task Queue** | `tasks.py` | `QThread` subclass managing task IDs, progress callbacks, and thread safety. |
| **Data Models** | `models.py` | Data structure abstractions for User identity, roles, and permissions. |
| **Constants** | `constants.py` | System-wide configuration keys, paths, and color palettes. |
| **Color Engine** | `analysis.py` | Vectorized NumPy/scikit-image pipeline operating in native CIELAB space. |
| **Security Migration**| `keyring_migration.py` | Securely migrates plaintext credentials into the macOS Keychain. |
| **Application CLI** | `cli.py` / `__main__.py` | Packaging entry point enforcing macOS `spawn` process initialization. |
| **Report Templates** | `templates.py` | HTML/JS report shells with live canvas pixel-sampling inspectors. |
| **Utilities** | `utils.py` | Multiprocessing Pillow image downsampler, PBKDF2 vault, and local HTTP server. |
| **Version Metadata** | `version.py` | Dynamic build constants injected during build steps. |

### 2. Action Scripts (14 Scripts)
| Module | File Name | Description |
| :--- | :--- | :--- |
| **Base Class** | `base_action.py` | Parent class handling task life cycle, permission checks, and logging. |
| **BDCP Checker** | `bdcp_checker.py` | Validates TIFF Bit-Depth and ICC color profiles in parallel. |
| **Repo Downloader**| `combined_downloader.py` | Queries MySQL file store, samples variants, and streams files with MD5 fixity. |
| **JHOVE Validator** | `jhove_validator.py` | Runs JHOVE Java sub-processes to verify ISO format structure and fixity. |
| **RTG Mover** | `movetortg.py` | Two-phase tool moving master files to RTG ingest and archiving source shells. |
| **Batch Renamer** | `naming_widget.py` | Two-pass collision-safe file renaming, denaming, and resequencing. |
| **PDF Compiler** | `pdfmaker.py` | Generates derivative JPEGs and binds images into single-file PDFs. |
| **Permissions** | `permissions.py` | Admin utility recursively resetting target directory permissions to `0777`. |
| **Pixel Cluster** | `pixel_cluster.py` | Multi-core spatial analysis detecting clipping and data truncation. |
| **PO Deliverer** | `podeliverer.py` | Packages multi-format Purchase Order deliverables and manifests. |
| **Folder Sampler** | `sampler.py` | Generates stratified symbolic link samples for rapid QC inspection. |
| **QC Syncer** | `sync_qc.py` | Downsamples 3500px JPEGs and purges orphaned proxy assets in parallel. |
| **Target Checker** | `target_checker.py` | Validates color calibration target patches in native CIELAB space. |
| **Server Uploader** | `upload.py` | Multi-stage upload manager with pre-flight audits and server-side fixity. |

### 3. Build Configuration & Tooling (3 Files)
| File Name | Purpose |
| :--- | :--- |
| `build_wizard.sh` | Shell script managing version injection, virtualenv verification, PyInstaller freezing, DMG creation, and code signing. |
| `pyproject.toml` | Briefcase build configuration declaring Python 3.13 targets, dependencies, and macOS sandbox permissions[cite: 30]. |
| `wizard.spec` | PyInstaller spec file defining resource bundles, binary inclusions (`bin/jhove`, `bin/jre`), and hidden imports[cite: 32]. |
