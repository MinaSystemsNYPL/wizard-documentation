---
layout: default
title: Repo Depot
parent: Actions
nav_order: 4
---

# Repo Depot

<img width="598" height="1055" alt="Screenshot 2026-06-15 at 10 40 51 AM" src="https://github.com/user-attachments/assets/38779221-cd70-4f19-adf6-e7165adea5bc" />

This tool does the following:
1. Finds all variants of all files by using their capture ID
    - Lists them in the table below the folder drop zone
2. Automatically selects 10% of U files and S files to sample
    - Number of files to download can be changed with the number picker wheel
3. Downloads a stratified sampling of all selected variants amounting to the total number of files the user requests
    - Files will be placed in a subfolder with the naming convention `Repo_Download_YYYYMMDD_HHMMSS`
4. Hashes each file that is downloaded, for manual comparison or for automated comparison
    - For automated comparison for file verification, simply drop the empty project folder (with the QC subfolder in it), located from Moved_to_RTG
    - By comparing the downloaded file hashes with the uploaded file hashes, user can verify the integrity of the downloaded file
5. A manifest of downloaded files is served locally via Chrome for user to verify

### Important Note:
- Please ensure the repo volume is mounted, by pressing "Ensure Repo is Mounted" or the download will not work

## Use
### Repo Check:
- This tool is used to download any image from the repository to check for file integrity, and Repository access
