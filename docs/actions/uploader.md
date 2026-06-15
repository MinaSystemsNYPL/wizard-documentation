---
layout: default
title: Uploader
parent: Actions
nav_order: 1
---

# Uploader

<img width="597" height="899" alt="Screenshot 2026-06-15 at 10 27 16 AM" src="https://github.com/user-attachments/assets/47997cde-aeba-497c-bff3-6c5837535028" />

This tool does the following in order unless unchecked:
1. Creates a local MD5 file of hashes for all files in the folder
2. Checks for flat-line artifacts (pink/green lines from GPU/processing errors)
3. Runs BDCP Checker on all files in the folder (Bit Depth & Color Profile Checker)
4. Runs JHOVE on all files in the folder
5. Creates a QC folder and populates it with JPG derivatives at 3500px on the long side
6. Mirrors the input folder to the selected destination folder
7. Creates a server-side MD5 file of hashes for all files that were uploaded
8. Crosschecks the two MD5 files to verify if the file was uploaded without corruption
9. Creates a manifest that is served locally on Chrome for user to verify ex. [Manifest_Upload_Audit_20260611_154407.html](https://github.com/user-attachments/files/28959980/Manifest_Upload_Audit_20260611_154407.html)

## Use
### Server Upload:
- This tool is used to upload files to the server for the QC process
- The MD5 files can also optionally be used by [Repo Depot](https://minasystemsnypl.github.io/wizard-documentation/docs/actions/repo_depot.html) to verify if files downloaded from the Repository are the exact same as those that were uploaded to the server
    - Simply drop the empty shell folder that was moved to `Moved_to_RTG`, and the Repo Depot action will find the MD5s and verify
