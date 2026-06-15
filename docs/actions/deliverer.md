---
layout: default
title: Deliverer
parent: Actions
nav_order: 3
---

# Deliverer

<img width="648" height="627" alt="Screenshot 2026-06-15 at 10 50 23 AM" src="https://github.com/user-attachments/assets/0ae360b9-8a40-4e33-8b6b-123f25f72baf" />

This tool does the following in order unless left unchecked:
1. Creates a new folder with the PO Number as the folder name in the selected destination (prepopulated with Public_Orders-Deliverables) 
2. Delivers U Files to the newly created folder
3. Delivers S Files to the newly created folder
4. Generates a PDF file using one of the following:
    - Only S Files
    - Only U Files
    - All Files
6. Creates and delivers QC JPGs at either standard 3500px size or full resolution
7. Moves the source folder to RTG after delivery

## Use
### Delivering Deliverables:
- This tool is used primarily to deliver POs to Public_Orders-Deliverables, but can be use to deliver selected assets to any folder, and has the additional option of moving the source files to RTG
