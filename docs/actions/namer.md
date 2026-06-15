---
layout: default
title: Namer
parent: Actions
nav_order: 6
---

# Namer

<img width="596" height="692" alt="Screenshot 2026-06-15 at 11 28 05 AM" src="https://github.com/user-attachments/assets/da456225-cd2b-4528-96e9-a0987b0cec4e" />

This tool renames, denames, resequences, files and has an option to revert from log.

### Rename:
Renames the files in the selected folder in order according to the copied and pasted csv of Capture IDs.

### Dename:
Takes the current order of the folder and removes the Capture IDs according to their sequence in the CSV. *Currently, dename *does not* support denaming files downloaded from the repository that already are renamed to their capture IDs. Please use "Revert from Log" option when available instead.

### Resequence:
Takes the current order of the folder and applies the names 1s, 1u, 2s, 2u, 3s, 3u, etc. sequentially regardless of how they are currently named.

There is a **Live Validation Table** for checking the validity of the proposed naming pattern for Renamer and Denamer. If a file does not have a corresponding Capture ID to be renamed to, it shows up as red in the table. When a name is provided, it turns green. Actions are limited until all files have corresponding proposed names.

For the **Revert from Log** action, you will be prompted to select the rename action log from the QC folder in the subfolder "logs". Once selected, the reverting will be done according to that document.

## Use
### Renaming all files in a folder:
- This tool is used primarily to rename a session folder from the generic 1s, 1u, 2s, 2u pattern to specific Capture IDs for files in preparation for ingest into the Repository by RTG. It can also be used to revert these rename actions or override the current sequence.
